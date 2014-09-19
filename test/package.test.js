/* global describe, it, expect */

var pkg = require('..');

describe('bixby-statsd', function() {
  
  it('should export object', function() {
    expect(pkg).to.be.an('function');
  });
  
});
