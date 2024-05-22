"use strict";
// function fn(a:number):number{
//     return a
// }
// 类型不明确，使用泛型
function fn(a) {
    return a;
}
fn(10); //不指定，看系统自己判定！
fn("hello"); // 可以自己定义！
function fn2(a, b) {
    return a;
}
