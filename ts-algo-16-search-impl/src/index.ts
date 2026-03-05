import { binarySearchRightmost, lowerBound } from "./search";

const arr = [10, 20, 30, 30, 30, 40, 50];
console.log(binarySearchRightmost(arr, 30))
console.log(lowerBound(arr, 44))
arr.splice(6, 0, 45)
console.log(arr)