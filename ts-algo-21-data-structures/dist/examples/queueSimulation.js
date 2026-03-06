"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countWords = countWords;
function countWords(words) {
    const map = new Map();
    for (const w of words) {
        map.set(w, (map.get(w) ?? 0) + 1);
    }
    return map;
}
//# sourceMappingURL=queueSimulation.js.map