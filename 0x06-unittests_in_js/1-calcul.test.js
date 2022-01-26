const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('#Sum', () => {
    it('should return integer as sum with float and float', () => {
      assert.deepStrictEqual(calculateNumber('SUM', 1.7, 2.3), 4);
    });

    it('should return integer as sum with integer and float', () => {
      assert.deepStrictEqual(calculateNumber('SUM', 1, 2.3), 3);
    });

    it('should return integer as sum with integer and integer', () => {
      assert.deepStrictEqual(calculateNumber('SUM', 1, 2), 3);
    });

    it('should return correct sum with a float rounded up and other float rounded down', () => {
      assert.deepStrictEqual(calculateNumber('SUM', 0.2, 2.8), 3);
    });

    it('should return correct sum with numbers to be rounded down', () => {
      assert.deepStrictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
    });

    it('should return correct sum with numbers to be rounded up', () => {
      assert.deepStrictEqual(calculateNumber('SUM', 0.8, 1.7), 3);
    });

    it('should return correct sum with one negative floats', () => {
      assert.deepStrictEqual(calculateNumber('SUM', -1.8, 1.2), -1);
    });

    it('should return correct sum with two negative floats', () => {
      assert.deepStrictEqual(calculateNumber('SUM', -0.2, -1.7), -2);
    });
  });

  describe('#Subtract', () => {
    it('should return integer as difference with float and float', () => {
      assert.deepStrictEqual(calculateNumber('SUBTRACT', 1.7, 2.3), 0);
    });

    it('should return integer as difference with integer and float', () => {
      assert.deepStrictEqual(calculateNumber('SUBTRACT', 1, 2.3), -1);
    });

    it('should return integer as difference with integer and integer', () => {
      assert.deepStrictEqual(calculateNumber('SUBTRACT', 1, 2), -1);
    });

    it('should return correct difference with a float rounded up and other float rounded down', () => {
      assert.deepStrictEqual(calculateNumber('SUBTRACT', 0.2, 2.8), -3);
    });

    it('should return correct difference with numbers to be rounded down', () => {
      assert.deepStrictEqual(calculateNumber('SUBTRACT', 0.1, 0.2), 0);
    });

    it('should return correct difference with numbers to be rounded up', () => {
      assert.deepStrictEqual(calculateNumber('SUBTRACT', 0.8, 1.7), -1);
    });

    it('should return correct difference with one negative floats', () => {
      assert.deepStrictEqual(calculateNumber('SUBTRACT', -1.8, 1.2), -3);
    });

    it('should return correct difference with two negative floats', () => {
      assert.deepStrictEqual(calculateNumber('SUBTRACT', -0.2, -1.7), 2);
    });
  });

  describe('#Divide', () => {
    it('should return integer as quotient with float and float', () => {
      assert.deepStrictEqual(calculateNumber('DIVIDE', 1.7, 2.3), 1);
    });

    it('should return correct quotient with integer and float', () => {
      assert.deepStrictEqual(calculateNumber('DIVIDE', 1, 2.3), 0.5);
    });

    it('should return float with odd and even number', () => {
      assert.deepStrictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
    });

    it('should return integer with two even numbers', () => {
      assert.deepStrictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('should return float with two even numbers but the numerator being less than denominator', () => {
      assert.deepStrictEqual(calculateNumber('DIVIDE', 2, 4), 0.5);
    });

    it('should return correct quotient with a float rounded up and other float rounded down', () => {
      assert.deepStrictEqual(calculateNumber('DIVIDE', 0.2, 2.8), 0);
    });

    it('should return correct quotient with numbers to be rounded down', () => {
      assert.deepStrictEqual(calculateNumber('DIVIDE', 0.1, 0.2), 'Error');
    });

    it('should return correct quotient with numbers to be rounded up', () => {
      assert.deepStrictEqual(calculateNumber('DIVIDE', 0.8, 1.7), 0.5);
    });

    it('should return correct quotient with one negative floats', () => {
      assert.deepStrictEqual(calculateNumber('DIVIDE', -1.8, 1.2), -2);
    });

    it('should return correct quotient with two negative floats', () => {
      assert.deepStrictEqual(calculateNumber('DIVIDE', -0.2, -1.7), 0);
    });

    it('should return error with divide by zero', () => {
      assert.deepStrictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });

    it('should return a string as error message with negative divide by zero', () => {
      assert.deepStrictEqual(typeof (calculateNumber('DIVIDE', 1, 0)), 'string');
    });
  });
});
