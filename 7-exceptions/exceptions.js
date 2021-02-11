export function isNumerical(number) {
  return /^\d+$/.test(number)
}

export function assertNorwegianNationalIdentityNumber(id) {
  if (id == null) {
    throw new Error('parameter is null or undefined')
  }
  if (id.length !== 11) {
    throw new Error('parameter does not have the correct length')
  }
  if (!isNumerical(id)) {
    throw new Error('parameter is not numerical')
  }
  return id
}

export function throwsOnNegativeNumbers(number) {
  return number
}

export function httpResponse(httpCode) {
  // Implementer en funksjon som tar inn HTTP statuskoder og returnerer en passende melding for,
  // og kaster en feil dersom det er en feilkode
  // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
}