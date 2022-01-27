const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

const expect = chai.expect;

describe('4-payment.test sendPaymentRequestToApi', () => {
  let apiStub = null;

  beforeEach(() => {
    apiStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  it('should call calculateNumber with the correct parameters', () => {
    const totalAmount = 100;
    const totalShipping = 10;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(apiStub.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
  });

  it('should call calculateNumber once', () => {
    const totalAmount = 100;
    const totalShipping = 10;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(apiStub.calledOnce).to.be.true;
  });

  it('should call console.log with correct parameters', () => {
    const totalAmount = 100;
    const totalShipping = 10;
    sinon.spy(console, 'log');

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(console.log.calledWith('The total is: 10')).to.be.true;
    console.log.restore();
  });

  afterEach(() => {
    apiStub.restore();
  });
});
