"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//演習１
const user = {
    name: "takumi",
    age: 15,
};
console.log("name is", user.name);
console.log("age is", user.age);
const a = {
    name: "taro",
    age: 22
};
console.log("user name is", a.name);
console.log("user age is", a.age);
//演習４
class Product {
    name;
    price;
    quantity;
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    totalprice() {
        return this.price * this.quantity;
    }
}
const n = new Product("ru", 300, 300);
console.log("合計は", n.totalprice(), "です.");
//演習５
class Counter {
    value;
    constructor(value) {
        this.value = value;
    }
    increment() {
        this.value = this.value + 1;
    }
    getvalue() {
        return this.value;
    }
}
const z = new Counter(1);
//console.log(z.value)privateなのでエラー
z.increment();
console.log(z.getvalue());
//演習６
class Emloyee {
    name;
    constructor(name) {
        this.name = name;
    }
    role() {
        return "Employee";
    }
}
class Manager extends Emloyee {
    teamesize;
    constructor(name, teamsize) {
        super(name);
        this.teamesize = teamsize;
    }
    role() {
        return "manager";
    }
}
const e = new Manager("taro", 10);
console.log(e.role());
//演習９
class Person {
    firstname;
    lastname;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get firstname1() {
        return this.firstname;
    }
    get fullname() {
        return this.lastname + this.firstname;
    }
}
const g = new Person("yama", "yama");
console.log(g.firstname1);
console.log(g.fullname);
//演習９
class human {
    age;
    constructor(age) {
        this.age = age;
    }
    set age1(age) {
        if (age > 120 || age < 0) {
            console.log("０歳未満or１２０歳を超えています");
            return;
        }
        console.log("aaaa");
    }
}
const j = new human(180);
console.log(j.age1);
//# sourceMappingURL=index.js.map