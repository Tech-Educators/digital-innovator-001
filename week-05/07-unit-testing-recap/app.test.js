// app.test.js
import { describe, test, expect } from "vitest";
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app"; // 8

// From the workshop, I can infer these instructions:
// write tests for each of the functions
// I am given example executions
// I am given expected outputs

// First, I want to write a test suite for findMaxValue. This is so I can see all the tests related to that function.
describe("findMaxValue tests", function () {
  test("returns 8, from an array of 3, 7, 2, 8, 5", function () {
    // One way I can write the actual test is all in line, like so:
    expect(findMaxValue([3, 7, 2, 8, 5])).toBe(8);
  });

  test("returns null when given an empty array", function () {
    // Alternatively, I can create some locally scoped variables which helps keep my code a bit more readable and organised:
    const theResult = findMaxValue([]);
    const answer = null;

    expect(theResult).toBe(answer);
  });
});

// I should make a second suite for the factorial tests. This helps keep my code organised and readable:
describe("factorial tests", function () {
  test("returns 120 when given 5", function () {
    expect(factorial(5)).toBe(120);
  });
});
