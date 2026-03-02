//データ型と変数
const number: number = 3
const string: string = "a"
const i: boolean = false
const a: null = null
let b: undefined = undefined
console.log(number)
console.log(string)
console.log(i)
console.log(a)
console.log(b)
//ex2
const c: number = 1
const d: number = 2
let e: number = 1
e = 3
console.log(e)
//ex3
let total: number = c + d + e;
let avarage: number = total / 3
console.log(total);
console.log(avarage)
//ex4
const name: string = "takumi";
let age: number = 26
console.log(name, "is", age, "years old")
//ex5
//const k: string = takumi1//""を入れる必要あり
const K: string = "takumi1"
//条件分岐と比較演算子
const age1: number = 10
if (age1 >= 20) {
    console.log("adult")

} else {
    console.log("minor")
}
//ex2
const score: number = 100;
if (score >= 90) {
    console.log("A")
} else if (score >= 80) {
    console.log("B")
} else if (score >= 70) {
    console.log("C")
} else {
    console.log("D")
}
//ex3
const age2: number = 22
const hasticket: boolean = true
if (age2 >= 20 && hasticket) {
    console.log("enter")
}
//算術演算
//ex1
const n: number = 1;
if (n % 2 === 0) {
    console.log("even")
} else {
    console.log("odd");
}
//ex2
const totalprice: number = 1500
const people: number = 20
const each: number = totalprice / people
console.log(each)







