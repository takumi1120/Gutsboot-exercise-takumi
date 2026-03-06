"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = linearSearch;
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
//# sourceMappingURL=linearSearch.js.map