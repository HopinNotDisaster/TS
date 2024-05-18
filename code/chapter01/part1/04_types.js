var a;
a = {};
// 用来指定对象中包含哪些属性。
// 必须是一模一样的,多了不行,少了也不行. 但是有?就不一样了.
var b;
// ?表示属性可选!
b = { name: 'afaf' };
var c;
// 要有name      其他都可以!
c = { name: "asdgfa", asf: "安抚:" };
var d;
// 限定函数的参数和返回的类型!
d = function (a) {
    return a;
};
var e;
var f;
e = ["Afa", "Afaf"];
var g;
// 一个元组,长度与类型固定!
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var h;
h = {
    name: 'afa ',
    gender: Gender.Male
};
console.log(h.gender === Gender.Male);
