import {assertNorwegianNationalIdentityNumber, httpResponse, isNumerical, throwsOnNegativeNumbers} from "./exceptions";

/**
 * Dette testsettet er ment å vise hvordan man kan oppdage og håndtere Exceptions som blir kastet av koden.
 *
 * Vi har en rekke funksjoner, hvor meningen er at de ved ugyldige parametere skal kaste feil, som vi kan håndtere
 * lengre oppe i applikasjonen vår.
 * Vi benytter Jest for å oppdage at vi faktisk kaster disse feilene, og at det skjer ved riktige inn-parametere.
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch 7-exceptions
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
    expect(isNumerical(1)).toBeTruthy()
    expect(isNumerical('1')).toBeTruthy()
    expect(isNumerical('01')).toBeTruthy()
    expect(isNumerical('hei')).toBeFalsy()
    expect(isNumerical('0ab2')).toBeFalsy()
    expect(isNumerical(NaN)).toBeFalsy()
    expect(isNumerical(null)).toBeFalsy()
  })

  /**
   * Test at httpResponse() kaster feil på riktige http-koder. En gitt kode skal returnere en spesifikk beskrivelse av feilen.
   * Implementer også selve funksjonen. Trenger nok ikke dekke *alle* http-koder som finnes, men et utvalg.
   */
  it('httpResponse() should throw appropriate messages on http error codes', () => {
    expect(() => httpResponse(400)).toThrow('400 Bad Request')
    expect(() => httpResponse(401)).toThrow('401 Unauthorized')
    expect(() => httpResponse(403)).toThrow('403 Forbidden')
    expect(() => httpResponse(404)).toThrow('404 Not Found')
    expect(() => httpResponse(408)).toThrow('408 Request Timeout')
    expect(() => httpResponse(418)).toThrow('418 I\'m a teapot')
    expect(() => httpResponse(500)).toThrow('500 Internal Server Error')
    expect(() => httpResponse(502)).toThrow('502 Bad Gateway')
    expect(() => httpResponse(503)).toThrow('503 Service Unavailable')
    expect(() => httpResponse(504)).toThrow('504 Gateway Timeout')

  })

  /**
   * Merk at for å kunne sjekke at en vellykket httpResponse() returnerer riktig, vil det være nødvendig å benytte
   * jest.fn()-funksjonen for å kunne fange resultatet av kallet.
   * Derfor kan det være greit å gjøre denne oppgaven (eller bare sjekke at den ikke kaster feil) etter funksjonsoppgaven
   */
  it('httpResponse() should not throw on successful http status codes', () => {
    expect(() => httpResponse(100)).not.toThrow()
    expect(() => httpResponse(200)).not.toThrow()
    expect(() => httpResponse(201)).not.toThrow()
    expect(() => httpResponse(202)).not.toThrow()
    expect(() => httpResponse(302)).not.toThrow()
    expect(() => httpResponse(305)).not.toThrow()
    expect(() => httpResponse(307)).not.toThrow()
    expect(() => httpResponse(308)).not.toThrow()
  })
})
