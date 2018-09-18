const assert = require('assert')

const b = require('../src');

describe('b', () => {
  it('should have an b1 function', () => {
    assert(b.b1() === 'b1');
  });
});
