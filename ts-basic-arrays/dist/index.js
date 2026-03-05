"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [10, 100, 100];
numbers.push(1000);
console.log(numbers.join(","));
const last = numbers.pop();
console.log("popped:", last);
console.log(numbers.join(","));
//for/for of
const number = [10, 20, 30];
for (let i = 0; i < number.length; i++) {
    console.log("i", "value", number[i]);
}
let sum = 0;
for (const n of number) {
    sum = sum + n;
}
console.log("sum", sum);
//演習１
const number2 = [3, 6, 9];
console.log(number2.join(","));
//演習２
console.log(number2[number2.length - 1]);
//演習３
console.log(number2.push(12));
console.log(number2);
//演習４
const last1 = number2.pop();
console.log("popped", last1);
console.log(number2.join(","));
//演習５
const names = ["taro", "hanako", "jiro",
];
console.log(names.includes("hanako"));
console.log(names.includes("saburo"));
//演習６
for (const n of number2) {
    sum = sum + n;
}
console.log("sum", sum);
//演習７
let names2 = [1, 2, 3, 4,];
for (let i = 0; i < names2.length; i++) {
    if (i % 2 === 0) {
        console.log(names2[i]);
    }
}
;
//演習８
const number3 = [3, 6, 9];
const doubled = number3.map((n) => n * 10);
console.log(doubled);
//演習９
const evens = number3.filter((n) => n % 2 === 0);
console.log(evens);
//演習１０
const result = number3
    .filter((n) => n >= 5)
    .map((n) => n * 2);
console.log(result);
//# sourceMappingURL=index.js.map