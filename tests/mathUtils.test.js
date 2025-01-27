"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mathUtils_1 = require("../src/utils/mathUtils");
test("adds two numbers", () => {
    expect((0, mathUtils_1.add)(2, 3)).toBe(5);
});
test("multiplies two numbers", () => {
    expect((0, mathUtils_1.multiply)(2, 3)).toBe(6);
});
