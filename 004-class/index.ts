// ts中定义函数
class Person {
    // 属性，前面省略了 public 关键词
    name: string;

    // 构造函数，实例化类的时候触发的方法
    constructor(name: string) {
        this.name = name;
    }

    run(): void {
        console.log(this.name);
    }
}
var p = new Person("张三");
p.run();

class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}
var s = new Student("张三");
console.log(s.getName());
s.setName("李四");
console.log(s.getName());

// 实现继承 extends、super
class Car {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    run(): string {
        return `${this.name}在跑`;
    }
}

class BenChi extends Car {
    constructor(name: string) {
        // 初始化父类的构造函数
        super(name);
    }
}

var bc = new BenChi("奔驰");
console.log(bc.run());

// ts中继承的探讨，父类的方法和子类的方法一致
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    eat(): string {
        return `${this.name}在吃东西`;
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    eat(): string {
        return `${this.name}在吃东西 -- 子类`;
    }

    sleep(): void {
        console.log(this.name + "在睡觉");
    }
}

var dog = new Dog("Tom");
dog.sleep();
console.log(dog.eat());


// 类的修饰符，在typescript里定义属性的时候，提供了3种修饰符
// public(公有，在类里、子类、类外面都可以访问)、protected(保护，在类里、子类可以访问，在类外部没法访问)、private(私有，在类里可以访问，子类和类外部都没法访问)
// 属性如果不加修饰符，默认就是 public
class Game {
    public name: string;
    protected age: number;
    private base: string;

    constructor(name: string, age: number, base: string) {
        this.name = name;
        this.age = age;
        this.base = base;
    }

    getBase(): string {
        return "深圳-腾讯";
    }
}

class Lol extends Game {
    constructor(name: string, age: number, base: string) {
        super(name, age, base);
    }

    work() {
        console.log(`${this.name}的工作${this.age}年,公司所有地：${this.getBase()}`)
    }
}

var lol = new Lol("英雄联盟", 10, "");
lol.work();
// 类外部访问公有属性
var game = new Game("王者荣耀", 5, "");
console.log(game.name);
// console.log(game.age); // 保护类型的属性，类外部没法访问
