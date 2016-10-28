const assert = require('chai').assert;

const eliacase = require('./index');

describe('eliacase', () => {
  it('adds Elia to the start of every word in a string', () => {
    assert.equal(eliacase('abcdefg'), 'Eliaabcdefg');
    assert.equal(eliacase('ABCDEFG'), 'EliaABCDEFG');
    assert.equal(eliacase('The quick brown fox jumps over the lazy dog'), 'EliaThe Eliaquick Eliabrown Eliafox Eliajumps Eliaover Eliathe Elialazy Eliadog');
  });

  it('throws with non-string input', () => {
    assert.throws(() => eliacase(null));
    assert.throws(() => eliacase({}));
    assert.throws(() => eliacase([]));
    assert.throws(() => eliacase(undefined));
    assert.throws(() => eliacase(123));
    assert.throws(() => eliacase(0));
    assert.throws(() => eliacase(true));
    assert.throws(() => eliacase(false));
  });

  it('handles edge cases', () => {
    assert.equal(eliacase(''), '');
  });

  it('throws with missing input', () => {
    assert.throws(() => eliacase());
  });
});
