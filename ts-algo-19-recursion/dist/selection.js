"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = selectionSort;
function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
function selectionSort(arr) {
    const a = [...arr];
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++)
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        if (minIndex !== i) {
            swap(a, i, minIndex);
        }
    }
    return a;
}
//# sourceMappingURL=selection.js.map