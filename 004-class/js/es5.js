// es5的类
// 1.最简单的类
function Person() {
    // 属性
    this.name = "张三";
    this.age = 20;
}

var p = new Person();
console.log(p.name);

// 2.构造函数和原型链里面增加方法
function Student() {
    this.name = "张三";
    this.age = 20;

    // 实例方法
    this.run = function () {
        console.log(this.name);
    }
}
// 原型链上面的属性会被多个实例共享，构造函数不会
Student.prototype.sex = "男";
Student.prototype.work = function () {
    console.log(this.name + "在学习");
}
var s = new Student();
s.run();
s.work();

// 3.类里的静态方法
function Dog() {
    this.name = "Tom";
    this.age = 2;
}
// 静态方法
Dog.getInfo = function () {
    console.log("我是静态方法");
}
// 调用静态方法
Dog.getInfo();

// 4.es5里的继承，对象冒充实现继承
function Animal() {
    this.name = "Tom";
    this.age = 2;

    this.eat = function () {
        console.log(this.name + "在吃东西");
    }
}

Animal.prototype.work = function () {
    console.log(this.name + "在学习");
}

function Cat() {
    Animal.call(this); // 对象冒充实现继承
}
var c = new Cat();
c.eat();// 对象冒充可以继承构造函数里面的属性和方法
// c.work(); // 没法继承原型链上面的属性和方法

// 5.es5里的继承，原型链实现继承
function Game() {
    this.name = "王者荣耀";

    this.play = function () {
        console.log("在玩" + this.name);
    }
}

Game.prototype.work = function () {
    console.log(this.name + "还在继续工作");
}

function Wzry() {

}

Wzry.prototype = new Game(); // 原型链实现继承，可以继承构造函数里面的属性和方法，也可以继承原型链上面的属性和方法
var w = new Wzry();
w.play();
w.work();

// 6.原型链继承的问题
function Car(name) {
    this.name = name;
    this.play = function () {
        console.log(this.name + "在跑");
    }
}

Car.prototype.type = "SUV";
Car.prototype.work = function () {
    console.log(this.name + "在工作");
}

var car = new Car("奔驰");
car.play();

function Bm(name) {

}
Bm.prototype = new Car();
var bm1 = new Bm("宝马"); // 实例化子类的时候没法给父类传参
bm1.play();

var bm2 = new Bm("宝马SUV");
bm2.play();

// 6.原型链+构造函组合继承模式
function Ky(name) {
    Car.call(this, name); // 对象冒充，实例化子类可以给父类传参
}

Ky.prototype = new Car();

var ky = new Ky("卡宴");
ky.play();
ky.work();

// 8.原型链+对象冒充的另一种方式
function Fll(name) {
    Car.call(this, name); // 对象冒充，实例化子类可以给父类传参,可以继承构造函数里的属性和方法
}
Fll.prototype = Car.prototype;

var fll = new Fll("法拉利");
fll.play();
fll.work();