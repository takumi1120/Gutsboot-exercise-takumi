"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = require("./search");
const arr = [10, 20, 30, 30, 30, 40, 50];
console.log((0, search_1.binarySearchRightmost)(arr, 30));
console.log((0, search_1.lowerBound)(arr, 44));
arr.splice(6, 0, 45);
console.log(arr);
//# sourceMappingURL=index.js.map