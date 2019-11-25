"use strict";
// es5函数定义方法
// 函数声明法
function run() {
    return "run";
}
// 匿名
var run2 = function () {
    return "run2";
};
// ts中定义函数的方法
// 函数声明法
function run3() {
    return "run3";
}
// 匿名
var run4 = function () {
    return 123;
};
// ts定义方法传参
function getInfo(name, age) {
    return name + " ---- " + age;
}
console.log(getInfo("zhicheng", 18));
var getInfo2 = function (name, age) {
    return name + " ---- " + age;
};
console.log(getInfo2("zhicheng", 20));
// 没有返回值的方法
function run5() {
    console.log("run5");
}
// 方法可选参数，注意：可选参数必须配置到参数的最后面
function getInfo3(name, age) {
    if (age) {
        return name + " ---- " + age;
    }
    else {
        return name + " ---- \u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getInfo3("zhicheng"));
// 默认参数
function getInfo4(name, age) {
    if (age === void 0) { age = 18; }
    return name + " ---- " + age;
}
console.log(getInfo4("zhicheng"));
// 剩余参数
function sum(a, b, c, d) {
    return a + b + c + d;
}
console.log(sum(1, 2, 3, 4));
// 三点运算符，接受新参传过来的值
function sum2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < params.length; i++) {
        sum += params[i];
    }
    return sum;
}
console.log(sum2(1, 2, 3, 4, 5, 6));
function getInfo5(str) {
    if (typeof str === "string") {
        return "我叫：" + str;
    }
    else {
        return "年龄是：" + str;
    }
}
console.log(getInfo5(18));
function getInfo6(name, age) {
    if (age) {
        return "我叫：" + name + "，年龄：" + age;
    }
    else {
        return "我叫：" + name;
    }
}
console.log(getInfo6("赵志成", 18));
// 箭头函数
setTimeout(function () {
    console.log("setTimeout");
}, 1000);
