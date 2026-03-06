//演習１
const user = {
    name: "takumi",
    age: 15,
}

console.log("name is", user.name)
console.log("age is", user.age)
//演習２

interface user {
    name: string;
    age: number;
}
const a: user = {
    name: "taro",
    age: 22

}
console.log("user name is", a.name)
console.log("user age is", a.age)
//演習４
class Product {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }
    totalprice(): number {
        return this.price * this.quantity
    }
}
const n = new Product("ru", 300, 300,)
console.log("合計は", n.totalprice(), "です.")
//演習５
class Counter {
    private value: number;
    constructor(value: number) {
        this.value = value
    }
    increment(): void {
        this.value = this.value + 1

    }
    getvalue(): number {
        return this.value;
    }

}
const z = new Counter(1)
//console.log(z.value)privateなのでエラー
z.increment();
console.log(z.getvalue())
//演習６
class Emloyee {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    role(): string {
        return "Employee";
    }
}
class Manager extends Emloyee {
    teamesize: number;
    constructor(name: string, teamsize: number) {
        super(name);
        this.teamesize = teamsize
    }
    role(): string {
        return "manager"

    }

}
const e = new Manager("taro", 10);
console.log(e.role())
//演習９
class Person {
    firstname: string
    lastname: string
    constructor(
        firstname: string, lastname: string) {
        this.firstname = firstname; this.lastname = lastname;
    }
    get firstname1(): string {
        return this.firstname
    }
    get fullname(): string {
        return this.lastname + this.firstname
    }

}
const g = new Person("yama", "yama")
console.log(g.firstname1)
console.log(g.fullname)
//演習９
class human {
    private age: number
    constructor(age: number) {
        this.age = age

    }
    set age1(age: number) {
        if (age > 120 || age < 0) {
            console.log("０歳未満or１２０歳を超えています");
            return
        }

    }
}
const j = new human(180);
console.log(j.age1)












