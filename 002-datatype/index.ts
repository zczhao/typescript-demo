// ts 代码必须指定类型

// 布尔类型 boolean
var flag:boolean = true;

// 数字类型 number
var num:number = 123;

// 字符串类型 string
var str:string = "typescript";

// 数组类型 array
// 第一种定义数组的方式
var arr1:number[] = [11, 22, 33];
// 第二种定义数组的方式
var arr2:Array<number> = [11, 22, 33];

// 元组类型 tuple，属于数组的一种
let arr3:[number, string] = [123, "this is ts"];

// 枚举类型 enum
enum Flag {
	success = 1,
	error = 2
}

let s:Flag = Flag.success

// 任意类型 any
var anyType:any = 123;
anyType = "123";

// null 和 undefined，其他(never类型)数据类型的子类型
// let num2:number; 
// console.log(num2); // 输出：undefined，报错
// let num3:undefined;
// console.log(num3); // 输出：undefined，正确
// 定义未赋值就是undefined
let num4:number | undefined;
console.log(num4);

let num5:null;

// 一个元素可能是number类型，可能是null、undefined
let num6:number | null | undefined;

// void 类型：typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值
// 表示方法没有返回任何类型
function run():void {
	console.log("run");
}

// never 类型：是其他类型(包括 null 和 undefined )的子类型，代表从不会出现的值。这意味着声明never的变量只能被never类型所赋值
// 下面这两个变量只能赋值为undefined、null
var a:undefined;
var b:null;
var c:never;