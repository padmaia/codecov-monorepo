const assert = require('assert')

const a = require('../src');

describe('a', () => {
  it('should have an a1 function', () => {
    assert(a.a1() === 'a1');
  });
});
