"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearchRightmost = binarySearchRightmost;
exports.lowerBound = lowerBound;
function binarySearchRightmost(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    let answer = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const value = sortedArr[mid];
        if (value === target) {
            answer = mid;
            left = mid + 1;
            continue;
        }
        if (value < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return answer;
}
function lowerBound(soretedArr, target) {
    let left = 0;
    let right = soretedArr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const value = soretedArr[mid];
        if (value < target) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return left;
}
//# sourceMappingURL=search.js.map