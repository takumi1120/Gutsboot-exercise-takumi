
import { add, mul } from "./math";
import { formatYen, greet } from "./strings";

console.log("add(2, 3)=", add(2, 3));
console.log("mul(4, 5)=", mul(4, 5));
console.log("formatYen(1200)=", formatYen(1200));
console.log("greet(Taro)=", greet("Taro"));
import { Product } from "./models/Product"

const a = new Product("a", 3, 3)
console.log(a.totalPrice())
//演習１
import { mod } from "./math";
console.log(mod(3, 5))
//演習２
import { toUpper } from "./strings";
console.log(toUpper("aiueo"))
//演習３
