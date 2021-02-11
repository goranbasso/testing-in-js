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
  if (number < 0) throw new Error('number was negative')
  if (isNaN(number)) throw new Error('number was NaN')
  return number
}

export function httpResponse(httpCode) {
  // Implementer en funksjon som tar inn HTTP statuskoder og returnerer en passende melding for,
  // og kaster en feil dersom det er en feilkode
  // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
  switch (httpCode) {
  case 100:
    return '100 Continue'
  case 200:
    return '200 OK'
  case 201:
    return '201 Created'
  case 202:
    return '202 Accepted'
  case 302:
    return '302 Found'
  case 305:
    return '305 Use Proxy'
  case 307:
    return '307 Temporary Redirect'
  case 308:
    return '308 Permanent Redirect'
  case 400:
    throw new Error('400 Bad Request')
  case 401:
    throw new Error('401 Unauthorized')
  case 403:
    throw new Error('403 Forbidden')
  case 404:
    throw new Error('404 Not Found')
  case 405:
    throw new Error('405 Method Not Allowed')
  case 408:
    throw new Error('408 Request Timeout')
  case 418:
    throw new Error('418 I\'m a teapot')
  case 500:
    throw new Error('500 Internal Server Error')
  case 502:
    throw new Error('502 Bad Gateway')
  case 503:
    throw new Error('503 Service Unavailable')
  case 504:
    throw new Error('504 Gateway Timeout')
  default:
    throw new Error('Unknown HTTP-statuscode')
  }
}