(function () {

    // 我们不希望使用Animal来创建对象
    // 只希望该类被继承！

    abstract class Animal {

        name: string;

        constructor(name: string) {
            this.name = name
        }

        // sayhello(){
        //     console.log("动物叫！");
            
        // }

        // 希望该方法被重写！
        abstract sayhello():void;
    }




    class Dog extends Animal{
        sayhello(): void {
            console.log("娃娃~");
            
        }
    }

    const dog = new  Dog("旺财")
    dog.sayhello();



    // super  就是当前类的父类！
    // 调用父类的构造函数！
})()