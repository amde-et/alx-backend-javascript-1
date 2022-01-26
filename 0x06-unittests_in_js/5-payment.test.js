const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  it('should call console.log with the correct parameters and call it once', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });

  it('should call console.log with the correct parameters and call it once', () => {
    const totalAmount = 10;
    const totalShipping = 10;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(console.log.calledWith('The total is: 20')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });

  afterEach(() => {
    sinon.restore();
  });
});
