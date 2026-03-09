"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//演習２
const n = 17;
if (n % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}
//演習３
const score = 60;
if (score >= 60) {
    console.log("pass");
}
else {
    console.log("fail");
}
//演習４
if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else if (score >= 70) {
    console.log("C");
}
else {
    console.log("D");
}
//演習５
const hour = 17;
const isHoliday = false;
if (isHoliday === false && hour >= 9 && hour <= 18) {
    console.log("open");
}
else {
    console.log("closed");
}
//演習６
const isMenber = true;
const hasCoupon = true;
if (isMenber || hasCoupon) {
    console.log("discount");
}
else {
    console.log("no discount");
}
//# sourceMappingURL=index.js.map