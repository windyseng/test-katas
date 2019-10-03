const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns a string with length that is less or equal to the max length', () => {
    expect(wrap("this exercise is weird", 10)).to.equal("this\nexercise\nis weird")
  });
});
