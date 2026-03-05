"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) { return x + y; }
const result = add(3, 5);
console.log("add(3,5=", result);
//演習１
function sayHi() { console.log("Hi!"); }
sayHi();
sayHi();
//演習２
function greet(name) {
    console.log("Hello", name);
}
;
greet("Taro");
greet("Hanako");
//演習３
function add1(x, y) {
    return x + y;
}
const result1 = add1(3, 5);
console.log(result1);
//演習４
function sub(a, b) {
    return a - b;
}
const result2 = sub(10, 3);
console.log(result2);
//
function mul(c, d) {
    return c * d;
}
const result3 = mul(3, 5);
console.log(result3);
function div(e, f) {
    return e / f;
}
const result4 = div(10, 4);
console.log(result4);
//
const addArrow = (x, y) => {
    return x + y;
};
console.log("addArroe(2,4)=", addArrow(2, 4));
//演習５
function isEven(n) {
    return n % 2 === 0;
}
const a = isEven(7);
console.log(a);
const b = isEven(8);
console.log(b);
//演習９
const add2 = (x, y) => {
    return x + y;
};
const isEven1 = (n) => {
    return n % 2 === 0;
};
const A = add2(3, 4);
console.log(A);
const B = isEven1(3);
console.log(B);
//# sourceMappingURL=index.js.map