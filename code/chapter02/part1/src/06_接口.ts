
// 接口用来定义类的结构！
// 接口只定义结构！
// 可以重复定义，属性叠加！

// 接口的东西就默认全是抽象的！
(function () {


    interface myInter {

        name: string
    }


    class Myclass implements myInter {

        name: string

        constructor(name: string) {
            this.name = name
        }
    }

})()