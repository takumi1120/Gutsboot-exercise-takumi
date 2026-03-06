"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = 80;
if (score >= 60) {
    console.log("pass");
}
else {
    console.log("fail");
}
const age = 10;
const isWeekend = false;
if (age >= 20 && isWeekend) {
    console.log("you can dorink");
}
else {
    console.log("you can not dorink");
}
const isMember = true;
const hasCoupon = true;
if (isMember || hasCoupon) {
    console.log("discount");
}
else {
    console.log("No discount");
}
const month = 1;
switch (month) {
    case 1:
    case 12:
    case 2:
        console.log("winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("summer");
        break;
    case 9:
    case 10:
    case 11: console.log("autumm");
}
//# sourceMappingURL=index.js.map