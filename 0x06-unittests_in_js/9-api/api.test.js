const {
  expect,
} = require('chai');
const request = require('request');

describe('IndexPage', () => {
  it('should have the correct status code', () => {
    request('http://localhost:7865', (_error, response, _body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should have the correct result', () => {
    request('http://localhost:7865', (_err, _res, body) => {
      expect(body).to.contain('Welcome to the payment system');
    });
  });

  it('should have the correct content type', () => {
    request('http://localhost:7865', (_err, res, _body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('should have the correct content length', () => {
    request('http://localhost:7865', (_err, res, _body) => {
      expect(res.headers['content-length']).to.equal('29');
    });
  });

});

describe('CartPage', () => {
  it('should have the correct status code with number id parameter', () => {
    request('http://localhost:7865/cart/12', (_error, response, _body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should have the correct result with number id parameter', () => {
    request('http://localhost:7865/cart/12', (_err, _res, body) => {
      expect(body).to.contain('Payment methods for cart 12');
    });
  });

  it('should have the correct status with non number id parameter', () => {
    request('http://localhost:7865/cart/1bc', (_error, response, _body) => {
      expect(response.statusCode).to.equal(404);
    });
  });

  it('should have the correct body content with non number id parameter', () => {
    request('http://localhost:7865/cart/1bc', (_error, _response, body) => {
      expect(body).to.contain('Cannot GET /cart/1bc');
    });
  });

  it('should have the correct content type', () => {
    request('http://localhost:7865/cart/12', (_err, res, _body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('should have the correct content length', () => {
    request('http://localhost:7865/cart/12', (_err, res, _body) => {
      expect(res.headers['content-length']).to.equal('27');
    });
  });

});
