"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//演習１
const a = {
    id: 1, name: "Taro"
};
const jasont = JSON.stringify(a);
console.log("jasontext", jasont);
//演習２ 
const pretty = JSON.stringify(a, null, 2);
console.log(pretty);
//演習３
const Jasona = { "x": 10, "y": 20 };
const jasonb = JSON.stringify(Jasona);
const parsed = JSON.parse(jasonb);
console.log(jasonb);
//# sourceMappingURL=index.js.map