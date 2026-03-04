"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeDiv = safeDiv;
exports.safemod = safemod;
function safeDiv(x, y) {
    if (y === 0) {
        throw new Error("dicaidevby zero");
    }
    return x / y;
}
//ex2
function safemod(x, y) {
    if (y === 0) {
        throw new Error("mod by zero");
    }
    return x / y;
}
//# sourceMappingURL=safeMath.js.map