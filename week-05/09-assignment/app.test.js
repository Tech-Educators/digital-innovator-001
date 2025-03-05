// Imports
import { mockPosts } from "./mockData.js";
import { toTitleCase, getUserNameByID } from "./app.js";
import { assert, describe, expect, test } from "vitest";

// this console log is just to check that my posts have imported correctly
// console.log(mockPosts);

// My first suite of tests. I am testing the mock post data:
describe("JSON Placeholder posts", () => {
  // Individual tests. Describing what it is testing for:
  test("should return a positive result that it is an array", () => {
    assert.isArray(mockPosts, "mockPosts in should be an array");
  });

  // I now want to test the individual items in an array.
  // First of all I have to describe what the structure of an item should be:
  const bodyObject = {
    userId: expect.any(Number),
    id: expect.any(Number),
    title: expect.any(String),
    body: expect.any(String),
  };

  test("Each item in the array should be an object.", () => {
    expect(mockPosts).toContainEqual(bodyObject);
  });

  // Write a test which checks that "Each item in the array should be an object, but with a for loop":
  test("Each item in the Array should be an object, through a for loop.", () => {
    // Your code here!
  });

  // Test the function toTitleCase:
  // This is one for you to finish and fix:
  test("any string put through the toTitleCase function should return a Titled Case String.", () => {
    // in here, is where you would write your code!
    const result = toTitleCase(); // this function needs a parameter
    const expected = "something here that you've figured out";

    expect().toBe(); // you need to finish off this test, because your project lead actually doesn't know as much as they let on....
  });

  // Next, make a 'toTitleCase' test work with a single title, from a post, from the mockData
  test("a post title, put through the toTitleCase function, should return a Titled Case String.", () => {
    // in here, is where you would write your code!
    const result = toTitleCase(); // this function needs a parameter
    const expected = "something here that you've figured out"; // this string needs changing to a Title Case'd string, from a post title

    expect().toBe(); // you need to finish off this test too.
  });

  // The following tests are going to fail. Part of your assignment is to figure out why (it's partly because your project lead gets paid way too much, and spends their time at the pub, and not coding correctly....):
  test("individual item should not be an array", () => {
    assert.isNotArray(
      mockPosts,
      "We expected the value to NOT be an array, so check what it is"
    );
  });
  // Perhaps some of these tests should be in a different suite??
  test("checks that each userID, in each item, should be a number", () => {
    let idType = expect.any(String);

    mockPosts.forEach((post) => {
      expect(post).toStrictEqual(idType);
    });
  });

  test("returns the correct username matched from the userID in an array", () => {
    const result = getUserNameByID(2);
    const expected = "Jez";

    expect(result).toBe(expected);
  });

  test("return the correct username matched from the userID in an array", () => {
    const result = getUserNameByID();
    const expected = "4";

    expect(result).toBe(expected);
  });

  // If you get to this point, feel free to make a few more tests! Tests! Lovely tests!!
});

// Maybe, you could make a new test suite, to test out a different function:

// You could also, if you're feeling very funky, test a different, live API. Bear in mind this is a super stretch goal.
// You will need: beforeAll(), which uses a timeout.
