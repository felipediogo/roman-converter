const assert = require('chai').assert;
const expect = require('chai').expect;
const convertNumberToRoman = require('../src/romanConverter');

describe('Convert numbers successfully', () => {
  it('should convert 10 to X', () => {
    expect(convertNumberToRoman(10)).to.be.equal('X');
  });
  it('should convert 25 to XXV', () => {
    expect(convertNumberToRoman(24)).to.be.equal('XXV');
  });
  it('should convert 180 to CLXXX', () => {
    expect(convertNumberToRoman(180)).to.be.equal('CLXXX');
  });
  it('should convert 947 to CMXLVII', () => {
    expect(convertNumberToRoman(947)).to.be.equal('CMXLVII');
  });
  it('should convert 2541 to MMDXLI', () => {
    expect(convertNumberToRoman(2541)).to.be.equal('MMDXLI');
  });
});

describe('Validations', () => {
  it('should fail when number is bigger then 3999', () => {
    assert.throws(() => { convertNumberToRoman(4001) }, RangeError);
  })
  it('should fail when number is negative', () => {
    assert.throws(() => { convertNumberToRoman(-15) }, RangeError);
  })
  it('should fail when number is zero', () => {
    assert.throws(() => { convertNumberToRoman(0) }, RangeError);
  })
  it('should fail when it\'s not a number', () => {
    assert.throws(() => { convertNumberToRoman('asd') }, TypeError);
  })
  it('should fail when it\'s a float number', () => {
    assert.throws(() => { convertNumberToRoman(123.3) }, TypeError);
  })
});
