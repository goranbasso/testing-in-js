import {assertNorwegianNationalIdentityNumber, isNumerical, throwsOnNegativeNumbers} from "./index";

describe('Test of .toThrow() (exception handling)', () => {

  it('assertNorwegianNationalIdentityNumber() throws the expected error messages', () => {
    expect(() => assertNorwegianNationalIdentityNumber(null)).toThrow('parameter is null or undefined')
    expect(() => assertNorwegianNationalIdentityNumber('123')).toThrow('parameter does not have the correct length')
    expect(() => assertNorwegianNationalIdentityNumber('12345abcdef')).toThrow('parameter is not numerical')
    expect(() => assertNorwegianNationalIdentityNumber(12345678901)).toThrow(expect.any(Error))
    expect(() => assertNorwegianNationalIdentityNumber('01017054321')).not.toThrow(expect.any(Error))
  })

  it('throwsOnNegativeNumbers() should not throw on positive numbers', () => {
    expect(() => throwsOnNegativeNumbers(1)).not.toThrow(expect.any(Error))
  })

  it('throwsOnNegativeNumbers() should throw on negative numbers', () => {
    expect(() => throwsOnNegativeNumbers(-1)).toThrow(expect.any(Error))
  })

  it('throwsOnNegativeNumbers() should throw on non-numbers', () => {
    expect(() => throwsOnNegativeNumbers(NaN)).toThrow(expect.any(Error))
  })

  it('isNumerical() identifies numbers correctly', () => {
    // test for them to implement themselves, lot of cases to check here
    // expect(isNumerical(1)).toBeTruthy()
    // expect(isNumerical('1')).toBeTruthy()
    // expect(isNumerical('01')).toBeTruthy()
    // expect(isNumerical('hei')).toBeFalsy()
    // expect(isNumerical('0ab2')).toBeFalsy()
    // expect(isNumerical(NaN)).toBeFalsy()
    // expect(isNumerical(null)).toBeFalsy()
  })

  it('httpResponse() should throw appropriate messages on http error codes', () => {
    // show us them 400s and 500s baby
  })

  it('httpResponse() should not throw and return appropriate messages on successful http status codes', () => {
    // show us them 100s, 200s, and 300s boii
  })
})
