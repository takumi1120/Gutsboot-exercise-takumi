"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibLoop = fibLoop;
function fibLoop(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}
//# sourceMappingURL=fib.js.map