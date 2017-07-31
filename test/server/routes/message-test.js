const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const getMessage = require('../../../server/routes/message.js');

describe('Message', function() {
  describe('GET message.json', function() {
    it('should respond with message', function() {
      const req = {};
      const res = {
        render: function() {}
      };
      const spy = res.send = sinon.spy();

      getMessage(req, res);
      expect(spy.calledWith({message: 'Hello world'})).to.equal(true);
    });
  });
});
