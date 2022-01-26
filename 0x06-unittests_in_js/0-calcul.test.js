const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function () {

  it('should return integer as sum with float and float', () => {
    assert.deepStrictEqual(calculateNumber(1.7, 2.3), 4);
  });

  it('should return integer as sum with integer and float', () => {
    assert.deepStrictEqual(calculateNumber(1, 2.3), 3);
  });

  it('should return integer as sum with integer and integer', () => {
    assert.deepStrictEqual(calculateNumber(1, 2), 3);
  });

  it('should return correct sum with a float rounded up and other float rounded down', () => {
    assert.deepStrictEqual(calculateNumber(0.2, 2.8), 3);
  });

  it('should return correct sum with numbers to be rounded down', () => {
    assert.deepStrictEqual(calculateNumber(0.1, 0.2), 0);
  });

  it('should return correct sum with numbers to be rounded up', () => {
    assert.deepStrictEqual(calculateNumber(0.8, 1.7), 3);
  });
});
