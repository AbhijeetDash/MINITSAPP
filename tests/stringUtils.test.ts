import { capitalize } from "../src/utils/stringUtils";

test("capitalizes a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("returns empty string for empty input", () => {
  expect(capitalize("")).toBe("");
});