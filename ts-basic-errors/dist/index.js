"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeMath_1 = require("./safeMath");
try {
    console.log("safeDiv(10,2=", (0, safeMath_1.safeDiv)(10, 2));
    console.log("safeDiv(10,2)=", (0, safeMath_1.safeDiv)(10, 0));
}
catch (e) {
    if (e instanceof Error) {
        console.log("error", e.message);
    }
    else {
        console.log("unknown error");
    }
}
finally {
    console.log("done");
}
const safeMath_2 = require("./safeMath");
try {
    console.log((0, safeMath_2.safemod)(10, 2));
    console.log((0, safeMath_2.safemod)(10, 0));
}
catch (e) {
    if (e instanceof Error) {
        console.log("error", e.message);
    }
    else {
        console.log("unknown error");
    }
}
finally {
    console.log("done");
}
//# sourceMappingURL=index.js.map