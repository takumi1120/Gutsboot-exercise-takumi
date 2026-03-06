//演習２
const n: number = 17
if (n % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}
//演習３
const score: number = 60;
if (score >= 60) {
    console.log("pass")
} else {
    console.log("fail")
}
//演習４
if (score >= 90) {
    console.log("A")
} else if (score >= 80) {
    console.log("B")
} else if (score >= 70) {
    console.log("C")
} else {
    console.log("D")
}
//演習５
const hour: number = 17;
const isHoliday: boolean = false
if (isHoliday === false && hour >= 9 && hour <= 18) {
    console.log("open")
} else {
    console.log("closed")
}
//演習６
const isMenber: boolean = true;
const hasCoupon: boolean = true;
if (isMenber || hasCoupon) {
    console.log("discount")
} else {
    console.log("no discount")
}
