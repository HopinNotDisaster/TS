// 类似常量
let A:10

let B : "male"| "female"

// let c : boolean  | string


// c = 'sgjkdja'

// 一个变量设置类型为any后相当于关闭了ts的类型检测！
// let d :any


// // let e ;
// // 这样就是相当于隐式any

// let e :unknown
// 赋值时先看类型后看值
e='sdg'

// c = e
// unknown 就是一个类型安全的any   不能将值赋给别人
if (typeof e ==='string'){
    c = e
}


// 类型断言
c = e as string 
c = <string>e



// void 表示返回空值
function fn():void{

    ;  
}


// 没有 什么都没有   
function fun():never{
    throw new Error('报错了！')
      
}
