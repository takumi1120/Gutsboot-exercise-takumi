const numbers: number[] = [10, 100, 100];
numbers.push(1000);
console.log(numbers.join(","));

const last = numbers.pop();
console.log("popped:", last);
console.log(numbers.join(","));
//for/for of
const number: number[] = [10, 20, 30];
for (let i = 0; i < number.length; i++) {
    console.log("i", "value", number[i]);
}
let sum: number = 0;
for (const n of number) {
    sum = sum + n;

}
console.log("sum", sum);
//演習１
const number2: number[] = [3, 6, 9]
console.log(number2.join(","));
//演習２
console.log(number2[number2.length - 1])
//演習３
console.log(number2.push(12))
console.log(number2)
//演習４
const last1 = number2.pop();
console.log("popped", last1);
console.log(number2.join(","));
//演習５
const names: string[] = ["taro", "hanako", "jiro",
]
console.log(names.includes("hanako"));
console.log(names.includes("saburo"));
//演習６
for (const n of number2) {
    sum = sum + n;

}
console.log("sum", sum);
//演習７
let names2: number[] = [1, 2, 3, 4,];
for (let i = 0; i < names2.length; i++) {
    if (i % 2 === 0) {
        console.log(names2[i])

    }
};
//演習８
const number3: number[] = [3, 6, 9]
const doubled: number[] = number3.map((n) => n * 10);
console.log(doubled)
//演習９
const evens: number[] = number3.filter((n) => n % 2 === 0);
console.log(evens)
//演習１０
const result: number[] = number3
    .filter((n) => n >= 5)
    .map((n) => n * 2)
console.log(result)
//演習１１

