const assert = require('assert');
const fetchMock = require('fetch-mock');

const React = require('react');
const Hello = require('../../../app/components/hello/hello.js').default;
const TestUtils = require('react-addons-test-utils');

describe('Hello component', function() {
  before('setup', function() {
    fetchMock.get('/message.json', {
      message: 'Hello world'
    });

    const renderedComponent = TestUtils.renderIntoDocument(
      <Hello />
    );

    this.heading = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'h1'
    );
  });

  after('teardown', function() {
    fetchMock.restore();
  });

  it('heading should start with loading message', function() {
    assert(this.heading.textContent === 'Hello world');
  });
});
