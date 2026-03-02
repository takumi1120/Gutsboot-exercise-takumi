"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let sum1 = 0;
for (let i = 1; i <= 40; i++) {
    sum1 = sum1 + i;
}
console.log("sum(1..10)=", sum1);
//演習問題１
let i = 0;
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
//演習問題２
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
    sum2 = sum2 + i;
}
console.log("sum(1..100)=", sum2);
//演習問題３
let result = "";
for (let I = 1; i <= 50; i++) {
    if (i % 5 !== 0) {
        continue;
    }
    result = result + i + ",";
}
console.log("evens", result);
//演習５
let a = 10;
while (a >= 0) {
    console.log(a);
    a = a - 1;
}
//演習６
let n = 1;
do {
    console.log("attempt", n);
    n = n + 1;
} while (n < 3);
//# sourceMappingURL=index.js.map