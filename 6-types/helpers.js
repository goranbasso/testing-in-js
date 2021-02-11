export const sum = (a, b) => {
  return a + b
}

export const difference = (a, b) => {
  return a - b
}

export const product = (a, b) => {
  return a * b
}

export const division = (a, b) => {
  return b === 0 ? '' : a / b
}

export const exponentiation = (a, b) => {
  return Math.pow(a, b)
}

export const getDate = () => new Date()