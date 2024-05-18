var a;
a = 10;
// a = 'hello';
var b;
b = '123';
// 如果声明和赋值是同时执行的，ts会自动识别该参数的类型。
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
