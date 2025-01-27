"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringUtils_1 = require("../src/utils/stringUtils");
test("capitalizes a string", () => {
    expect((0, stringUtils_1.capitalize)("hello")).toBe("Hello");
});
test("returns empty string for empty input", () => {
    expect((0, stringUtils_1.capitalize)("")).toBe("");
});
