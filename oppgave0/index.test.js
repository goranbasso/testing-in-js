import { sum, identity } from "."
import {absolute, product} from "./index";

// quick and dirty example of how the tasks could be structured:
// - an example test that works fine
// - another test that fails, need some changes in the code
// - another test that is not implemented, the code is already implemented

// a-okay example
it('identity() returns the same value as the input', () => {
  expect(identity(1)).toEqual(1)
})

// the code that is being tested is wrong
it('sum() returns the sum of the two input variables', () => {
  expect(sum(1, 1)).toEqual(2)
})

// the test is not implemented (but code should, maybe, work fine)
it('product() returns the product of the two input variables', () => {
  // implement a test for product()
  // expect(product(2, 3)).toEqual(6)
})

it('product() returns NaN if any of the input variables are not numbers', () => {
  // implement a test for product()
  // expect(product('a', 2)).toBeNaN()
})

// a test where they have to implement the function themselves
it('absolute() returns the absolute value of a given number', () => {
  // they need to implement absolute(), and write a test for it
  // expect(absolute(1)).toEqual(1)
  // expect(absolute(0)).toEqual(0)
  // expect(absolute(-1)).toEqual(1)
})