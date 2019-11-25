"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ts中定义函数
var Person = /** @class */ (function () {
    // 构造函数，实例化类的时候触发的方法
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    return Person;
}());
var p = new Person("张三");
p.run();
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    return Student;
}());
var s = new Student("张三");
console.log(s.getName());
s.setName("李四");
console.log(s.getName());
// 实现继承 extends、super
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.run = function () {
        return this.name + "\u5728\u8DD1";
    };
    return Car;
}());
var BenChi = /** @class */ (function (_super) {
    __extends(BenChi, _super);
    function BenChi(name) {
        // 初始化父类的构造函数
        return _super.call(this, name) || this;
    }
    return BenChi;
}(Car));
var bc = new BenChi("奔驰");
console.log(bc.run());
// ts中继承的探讨，父类的方法和子类的方法一致
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        return this.name + "\u5728\u5403\u4E1C\u897F";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + "\u5728\u5403\u4E1C\u897F -- \u5B50\u7C7B";
    };
    Dog.prototype.sleep = function () {
        console.log(this.name + "在睡觉");
    };
    return Dog;
}(Animal));
var dog = new Dog("Tom");
dog.sleep();
console.log(dog.eat());
// 类的修饰符，在typescript里定义属性的时候，提供了3种修饰符
// public(公有，在类里、子类、类外面都可以访问)、protected(保护，在类里、子类可以访问，在类外部没法访问)、private(私有，在类里可以访问，子类和类外部都没法访问)
// 属性如果不加修饰符，默认就是 public
var Game = /** @class */ (function () {
    function Game(name, age, base) {
        this.name = name;
        this.age = age;
        this.base = base;
    }
    Game.prototype.getBase = function () {
        return "深圳-腾讯";
    };
    return Game;
}());
var Lol = /** @class */ (function (_super) {
    __extends(Lol, _super);
    function Lol(name, age, base) {
        return _super.call(this, name, age, base) || this;
    }
    Lol.prototype.work = function () {
        console.log(this.name + "\u7684\u5DE5\u4F5C" + this.age + "\u5E74,\u516C\u53F8\u6240\u6709\u5730\uFF1A" + this.getBase());
    };
    return Lol;
}(Game));
var lol = new Lol("英雄联盟", 10, "");
lol.work();
// 类外部访问公有属性
var game = new Game("王者荣耀", 5, "");
console.log(game.name);
// console.log(game.age); // 保护类型的属性，类外部没法访问
