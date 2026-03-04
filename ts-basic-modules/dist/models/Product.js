"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    name;
    price;
    quantity;
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    totalPrice() {
        return this.price * this.quantity;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map