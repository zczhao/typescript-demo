// es5函数定义方法
// 函数声明法
function run() {
    return "run";
}

// 匿名
var run2 = function () {
    return "run2";
}

// ts中定义函数的方法
// 函数声明法
function run3(): string {
    return "run3";
}
// 匿名
let run4 = function (): number {
    return 123;
}
// ts定义方法传参
function getInfo(name: string, age: number): string {
    return `${name} ---- ${age}`;
}
console.log(getInfo("zhicheng", 18));

let getInfo2 = function (name: string, age: number): string {
    return `${name} ---- ${age}`;
}

console.log(getInfo2("zhicheng", 20));

// 没有返回值的方法
function run5(): void {
    console.log("run5");
}

// 方法可选参数，注意：可选参数必须配置到参数的最后面
function getInfo3(name: string, age?: number): string {
    if (age) {
        return `${name} ---- ${age}`;
    } else {
        return `${name} ---- 年龄保密`;
    }
}
console.log(getInfo3("zhicheng"));

// 默认参数
function getInfo4(name: string, age: number = 18): string {
    return `${name} ---- ${age}`;
}

console.log(getInfo4("zhicheng"));

// 剩余参数
function sum(a: number, b: number, c: number, d: number): number {
    return a + b + c + d;
}

console.log(sum(1, 2, 3, 4));

// 三点运算符，接受新参传过来的值
function sum2(...params: number[]): number {
    let sum = 0;
    for (var i = 0; i < params.length; i++) {
        sum += params[i];
    }
    return sum;
}
console.log(sum2(1, 2, 3, 4, 5, 6));

// 函数重载
// java中方法的重载，重载指的是两个或者两上个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况
// typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的
function getInfo5(name: string): string;
function getInfo5(age: number): number;
function getInfo5(str: any): any {
    if (typeof str === "string") {
        return "我叫：" + str;
    } else {
        return "年龄是：" + str;
    }
}
console.log(getInfo5(18));

function getInfo6(name: string): string;
function getInfo6(name: string, age: number): string;
function getInfo6(name: any, age?: any): any {
    if (age) {
        return "我叫：" + name + "，年龄：" + age;
    } else {
        return "我叫：" + name;
    }
}
console.log(getInfo6("赵志成", 18));

// 箭头函数
setTimeout(() => {
    console.log("setTimeout");
}, 1000);