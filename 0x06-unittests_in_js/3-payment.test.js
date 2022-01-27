const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(Utils, 'calculateNumber');
  });

  it('should be called with arguments', () => {
    const totalAmount = 100;
    const totalShipping = 10;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(Utils.calculateNumber.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
  });

  it('should be called with once', () => {
    const totalAmount = 100;
    const totalShipping = 10;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });

  it('should call console.log with correct parameter', () => {
    const totalAmount = 100;
    const totalShipping = 10;

    sinon.spy(console, 'log');
    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(console.log.calledWith('The total is: 110')).to.be.true;
  });

  afterEach(() => {
    sinon.restore();
  });

});
