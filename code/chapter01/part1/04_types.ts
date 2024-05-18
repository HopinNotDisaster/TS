let a: object;

a = {};

// 用来指定对象中包含哪些属性。
// 必须是一模一样的,多了不行,少了也不行. 但是有?就不一样了.
let b: { name: string, age?: number };
// ?表示属性可选!


b = { name: 'afaf' };



let c: { name: string, [propName: string]: any };
// 要有name      其他都可以!
c = { name: "asdgfa", asf: "安抚:" }


let d: (a: number, b?: number) => number;
// 限定函数的参数和返回的类型!

d = function (a: number) {
    return a
}


let e: string[]
let f: Array<string>
e = ["Afa", "Afaf"]


let g: [string: string]
// 一个元组,长度与类型固定!

enum Gender {

    Male,
    Female

}


let h: { name: string, gender: Gender }

h = {
    name: 'afa ',
    gender: Gender.Male
}
console.log(h.gender === Gender.Male);


type mytype = 1 | 2 | 3