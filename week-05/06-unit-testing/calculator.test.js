// Import my functions from my calculator.js
import { describe, expect, test } from "vitest";
import { sum, multiply } from "./calculator.js";

// A test suite has 3 parts to it
// You declare the overall suite with the 'describe' keyword
// You declare an individual test inside of that suite with the 'test' keyword.
// The third piece, is the actual test you wish to run!

describe("Calculator sum tests", function () {
  test("adds 10 to 19, to get 29", function () {
    const result = sum(10, 19);
    const expected = 29;

    expect(result).toBe(expected);
  });

  test("adds 100 to 200 to get 300", function () {
    const result = sum(100, 200);
    const expected = 300;

    expect(result).toBe(expected);
  });
});

// I want to make a new suite of calculator multiply tests:

describe("Calculator multiply tests", function () {
  test("multiplies 10 and 19 to get 190", function () {
    const result = multiply(10, 19);
    const expected = 190;

    expect(result).toBe(expected);
  });
});
