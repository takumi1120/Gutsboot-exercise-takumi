"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const strings_1 = require("./strings");
console.log("add(2, 3)=", (0, math_1.add)(2, 3));
console.log("mul(4, 5)=", (0, math_1.mul)(4, 5));
console.log("formatYen(1200)=", (0, strings_1.formatYen)(1200));
console.log("greet(Taro)=", (0, strings_1.greet)("Taro"));
const Product_1 = require("./models/Product");
const a = new Product_1.Product("a", 3, 3);
console.log(a.totalPrice());
//演習１
const math_2 = require("./math");
console.log((0, math_2.mod)(3, 5));
//演習２
const strings_2 = require("./strings");
console.log((0, strings_2.toUpper)("aiueo"));
//# sourceMappingURL=index.js.map