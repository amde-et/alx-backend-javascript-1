const assert = require('assert');
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const expect = chai.expect;

describe('calculateNumber', function () {
  describe('#Sum', () => {
    it('should return integer as sum with float and float', () => {
      expect(calculateNumber('SUM', 1.7, 2.3)).to.equal(4);
    });

    it('should return integer as sum with integer and float', () => {
      expect(calculateNumber('SUM', 1, 2.3)).to.equal(3);
    });

    it('should return integer as sum with integer and integer', () => {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    it('should return correct sum with a float rounded up and other float rounded down', () => {
      expect(calculateNumber('SUM', 0.2, 2.8)).to.equal(3);
    });

    it('should return correct sum with numbers to be rounded down', () => {
      expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
    });

    it('should return correct sum with numbers to be rounded up', () => {
      expect(calculateNumber('SUM', 0.8, 1.7)).to.equal(3);
    });

    it('should return correct sum with one negative floats', () => {
      expect(calculateNumber('SUM', -1.8, 1.2)).to.equal(-1);
    });

    it('should return correct sum with two negative floats', () => {
      expect(calculateNumber('SUM', -0.2, -1.7)).to.equal(-2);
    });
  });

  describe('#Subtract', () => {
    it('should return integer as difference with float and float', () => {
      expect(calculateNumber('SUBTRACT', 1.7, 2.3)).to.equal(0);
    });

    it('should return integer as difference with integer and float', () => {
      expect(calculateNumber('SUBTRACT', 1, 2.3)).to.equal(-1);
    });

    it('should return integer as difference with integer and integer', () => {
      expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
    });

    it('should return correct difference with a float rounded up and other float rounded down', () => {
      expect(calculateNumber('SUBTRACT', 0.2, 2.8)).to.equal(-3);
    });

    it('should return correct difference with numbers to be rounded down', () => {
      expect(calculateNumber('SUBTRACT', 0.1, 0.2)).to.equal(0);
    });

    it('should return correct difference with numbers to be rounded up', () => {
      expect(calculateNumber('SUBTRACT', 0.8, 1.7)).to.equal(-1);
    });

    it('should return correct difference with one negative floats', () => {
      expect(calculateNumber('SUBTRACT', -1.8, 1.2)).to.equal(-3);
    });

    it('should return correct difference with two negative floats', () => {
      expect(calculateNumber('SUBTRACT', -0.2, -1.7)).to.equal(2);
    });
  });

  describe('#Divide', () => {
    it('should return integer as quotient with float and float', () => {
      expect(calculateNumber('DIVIDE', 1.7, 2.3)).to.equal(1);
    });

    it('should return correct quotient with integer and float', () => {
      expect(calculateNumber('DIVIDE', 1, 2.3)).to.equal(0.5);
    });

    it('should return float with odd and even number', () => {
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });

    it('should return integer with two even numbers', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });

    it('should return float with two even numbers but the numerator being less than denominator', () => {
      expect(calculateNumber('DIVIDE', 2, 4)).to.equal(0.5);
    });

    it('should return correct quotient with a float rounded up and other float rounded down', () => {
      expect(calculateNumber('DIVIDE', 0.2, 2.8)).to.equal(0);
    });

    it('should return correct quotient with numbers to be rounded down', () => {
      expect(calculateNumber('DIVIDE', 0.1, 0.2)).to.equal('Error');
    });

    it('should return correct quotient with numbers to be rounded up', () => {
      expect(calculateNumber('DIVIDE', 0.8, 1.7)).to.equal(0.5);
    });

    it('should return correct quotient with one negative floats', () => {
      expect(calculateNumber('DIVIDE', -1.8, 1.2)).to.equal(-2);
    });

    it('should return correct quotient with two negative floats', () => {
      expect(calculateNumber('DIVIDE', -0.2, -1.7)).to.equal(0);
    });

    it('should return error with divide by zero', () => {
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });

    it('should return a string as error message with negative divide by zero', () => {
      expect(calculateNumber('DIVIDE', -1, 0)).to.be.a('string');
    });
  });
});
