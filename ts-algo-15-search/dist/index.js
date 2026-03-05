"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linearSearch_1 = require("./linearSearch");
const arr = [10, 40, 20, 50, 30];
console.log("15-EX linearSearch index=", (0, linearSearch_1.linearSearch)(arr, 50));
console.log("15-EX2 linearSearch not found", (0, linearSearch_1.linearSearch)(arr, 999));
//# sourceMappingURL=index.js.map