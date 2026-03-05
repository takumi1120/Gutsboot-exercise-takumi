import { linearSearch } from "./linearSearch";

const arr = [10, 40, 20, 50, 30];
console.log("15-EX linearSearch index=", linearSearch(arr, 50));
console.log("15-EX2 linearSearch not found", linearSearch(arr, 999));

import { binarySearch } from "./binarySearch";

const sorted = [10, 20, 30, 40, 50, 60];
console.log("15-EX3 binarySearch index=", binarySearch(sorted, 50));
console.log("15-EX3 binarySearch not found=", binarySearch(sorted, 999)); 