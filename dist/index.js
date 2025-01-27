"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mathUtils_1 = require("./utils/mathUtils");
const stringUtils_1 = require("./utils/stringUtils");
console.log("Sum: ", (0, mathUtils_1.add)(2, 3));
console.log("Product: ", (0, mathUtils_1.multiply)(2, 3));
console.log("Capitalized: ", (0, stringUtils_1.capitalize)("hello"));
