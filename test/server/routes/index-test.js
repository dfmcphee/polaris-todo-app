const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const getIndex = require('../../../server/routes/index.js');

describe('Index', function() {
  describe('GET index', function() {
    it('should respond', function() {
      const req = {};
      const res = {
        render: function() {}
      };
      const spy = res.render = sinon.spy();

      getIndex(req, res);
      expect(spy.calledOnce).to.equal(true);
    });

    it('should provide default sources', function() {
      const req = {};
      const res = {
        render: function() {}
      };
      const spy = res.render = sinon.spy();

      const expectedData = {
        env: process.env.NODE_ENV,
        script: '/main.js',
        styles: false
      };

      getIndex(req, res);
      expect(spy.calledWith('index', expectedData)).to.equal(true);
    });
  });
});
