import {assertNorwegianNationalIdentityNumber, isNumerical, throwsOnNegativeNumbers} from "./index";

/**
 * Dette testsettet er ment å vise hvordan man kan oppdage og håndtere Exceptions som blir kastet av koden.
 *
 * Vi har en rekke funksjoner, hvor meningen er at de ved invalide parametere skal kaste feil, som vi kan håndtere
 * lengre oppe i applikasjonen vår.
 * Vi benytter Jest for å oppdage at vi faktisk kaster disse feilene, og at det skjer ved riktige inn-parametere.
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch oppgave_xx_exceptions
 */


/**
 * describe() lar oss definere et sett av tester, som kjører sammen.
 */
describe('Test of .toThrow() (exception handling)', () => {

  /**
   * En fungerende test, for en funksjon som påser at en streng er et norsk personnummer.
   */
  it('assertNorwegianNationalIdentityNumber() throws the expected error messages', () => {
    expect(() => assertNorwegianNationalIdentityNumber(null)).toThrow('parameter is null or undefined')
    expect(() => assertNorwegianNationalIdentityNumber('123')).toThrow('parameter does not have the correct length')
    expect(() => assertNorwegianNationalIdentityNumber('12345abcdef')).toThrow('parameter is not numerical')
    expect(() => assertNorwegianNationalIdentityNumber(12345678901)).toThrow(expect.any(Error))
    expect(() => assertNorwegianNationalIdentityNumber('01017054321')).not.toThrow(expect.any(Error))
  })

  /**
   * En rekke tester for å sjekke at funksjonen kaster på negative tall.
   */
  it('throwsOnNegativeNumbers() should not throw on positive numbers', () => {
    expect(() => throwsOnNegativeNumbers(1)).not.toThrow(expect.any(Error))
  })

  it('throwsOnNegativeNumbers() should throw on negative numbers', () => {
    expect(() => throwsOnNegativeNumbers(-1)).toThrow(expect.any(Error))
  })

  it('throwsOnNegativeNumbers() should throw on non-numbers', () => {
    expect(() => throwsOnNegativeNumbers(NaN)).toThrow(expect.any(Error))
  })

  /**
   * Skriv en test for hjelpefunksjonen isNumerical() (benyttes av assertNorwegianNationalIdentityNumber())
   */
  it('isNumerical() identifies numbers correctly', () => {
    // Skriv en test som sjekker at isNumerical() returnerer riktig

    // expect(isNumerical(1)).toBeTruthy()
    // expect(isNumerical('1')).toBeTruthy()
    // expect(isNumerical('01')).toBeTruthy()
    // expect(isNumerical('hei')).toBeFalsy()
    // expect(isNumerical('0ab2')).toBeFalsy()
    // expect(isNumerical(NaN)).toBeFalsy()
    // expect(isNumerical(null)).toBeFalsy()
  })

  /**
   * Skriv noen tester som forsikrer at httpResponse() kaster på riktige http-koder.
   * Implementer også selve funksjonen. Trenger nok ikke dekke *alle* http-koder som finnes, men et utvalg.
   */
  it('httpResponse() should throw appropriate messages on http error codes', () => {
    // Dette er gjerne 400 og 500 statuskoder
  })

  it('httpResponse() should not throw and return appropriate messages on successful http status codes', () => {
    // Dette er gjerne 100, 200, og 300 statuskoder
  })
})
