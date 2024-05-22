// function fn(a:number):number{
//     return a

// }

// 类型不明确，使用泛型


function fn<T>(a:T):T{
    return a;
}
fn(10) //不指定，看系统自己判定！
fn<string>("hello") // 可以自己定义！

function fn2<T,K>(a:T,b:K):T{
    return a
}



