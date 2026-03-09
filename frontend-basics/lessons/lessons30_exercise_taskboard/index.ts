// const number = 100 //pass
// if (number >= 60) {
//     console.log("pass")
// } else {
//     console.log("faile")
// }

// //
// const age: number = 25;
// const isWeekend: boolean = true;
// if (age >= 20 && isWeekend === true) {
//     console.log("you can drink")
// } else {
//     console.log("you cannot drink")
// }
// //
// const isMenber: boolean = true;
// const hasCoupon: boolean = true;

// if (isMenber || hasCoupon) {
//     console.log("Discount")
// } else {

//     console.log("no discount")
// }

// //
// const totalPraice: number = 3000
// const people: number = 4
// console.log(totalPraice / people)

// //
// const n: number = 17
// if (n === 2 % 0) {
//     console.log("eveb")
// } else {
//     console.log("odd")

// }
// //
// const score: number = 80;
// if (score < 60) {
//     console.log("fail")
// } else {
//     console.log("pass")
// }
// //
// if (score >= 90) {
//     console.log("a");
// } else if (score >= 80) {
//     console.log("b")
// } else if (score >= 70) {
//     console.log("c")
// } else {
//     console.log("d")

// }
// //
// //
// //
// const isLoggedin: boolean = false;
// if (!isLoggedin) {
//     console.log("prease login")
// }
// const month: number = 3;
// switch (month) {
//     case 1: case 2: case 3:
//         console.log("winter");

//         break
//     case 4: case 5: case 6:
//         console.log("spling");
//         break;
//     case 7: case 8: case 9: ;
//         console.log("summer");
//         break
//     case 10: case 11: case 12: ;
//         console.log("autumn")
//     default: console.log("not found")
//         break
// }
// //

// let found: boolean = false;

// for (let i = 1; i <= 10; i++) {
//     if (i === 7) {
//         found = true;
//         console.log("found:", i);
//         break;
//     }
//     console.log("not found:", i);
// }

// console.log("found flag:", found);

// const numbers: number[] = [2, 4, 6, 8];
// let total: number = 0;

// for (const n of numbers) {
//     total = total + n;
// }

// console.log("total:", total);

// let n: number = 0
// for (n; n <= 20; n++) {
//     console.log(n)
// }

// let sum: number = 0
// for (let i: number = 1; i <= 100; i++) {
//     sum = sum + i
// } console.log(sum);
// let a: string = ""
// for (let i: number = 1; i <= 50; i++) {
//     if (i % 5 !== 0) {
//         continue;
//     }

//     a = a + i + ","
// }
// console.log(a)

// const numbers: number[] = [1, 2, 3, 4, 5];
// let n: number = 0
// for (const n of numbers) {
//     if (n % 2 === 0) {
//         console.log(n); break
//     }
// } 

// let n: number = 10
// while (n <= 10 && n >= 0) {
//     console.log(n)
//     n = n - 1
// }

// let a: number = 0;
// do {
//     console.log(a);
//     a = a + 1
// } while (a < 3)
// const a: number[] = [3, 1, 9, 2]
// let max = a[0]
// for (const n of a) {

//     if (n > max)
//         max = n
// }
// console.log(max)

// const a: number[] = [10, 20, 30];
// let total: number = 0
// for (const n of a) {
//     total = n + total
// }
// console.log(total)

// let n: number = 1
// let c: number = 1
// for (n; n < 10; n++) {
//     let b: number = 2 * n

// } for (c; c < 10; c++) {
//     console.log("2×" + c + "=" + 2 * c)
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(i + " x " + j + " = " + (i * j));
//     }
//

// let n: number = 1;
// for (n; n <= 30; n++) {
//     if (n % 3 === 0) {
//     } if (n === 23) {
//         break;

//     } console.log(n)
// }
// for (let i = 1; i <= 5; i++) {
//   console.log("i=", i);
// }
// let i: number = 1
// while (i <= 5) {
//     console.log("i=", i);
//     i = i + 1
// }

const a: number[] = [3, 6, 9]
let b: number = 0
console.log(a.join(","))
console.log(a[a.length - 1])
a.push(12);
console.log(a.join(","))
a.pop();
const name: string[] = ["taro", "hanako", "jiro"];
console.log(name.includes("hanako"));
for (const n of a) {
    b = b + n;

}
console.log(b);
for (let i = 0; i <= name.length - 1; i++) {
    if (i % 2 === 0) {
        console.log(name[i])
    }
}
console.log(a.map((n) => n * 10).join(","))
console.log(a.filter((n) => n % 2 === 0).join(","))
console.log(a.filter((n) => n >= 5).map((n) => n * 2).join(","))
console.log(name.filter((n) => n.length >= 4))

const c: [string, number] = ["taro", 25];

const users: [string, number][] = [["Taro", 20], ["Hanako", 19]]
for