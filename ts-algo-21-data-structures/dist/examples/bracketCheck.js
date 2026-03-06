"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidBrackets = isValidBrackets;
function isValidBrackets(s) {
    const stack = [];
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    for (const ch of s) {
        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch);
            continue;
        }
        if (ch === ")" || ch === "]" || ch === "}") {
            const top = stack.pop();
            if (top !== pairs[ch])
                return false;
        }
    }
    return stack.length === 0;
}
//# sourceMappingURL=bracketCheck.js.map