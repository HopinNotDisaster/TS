"use strict";
(function () {
    // 我们不希望使用Animal来创建对象
    // 只希望该类被继承！
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayhello() {
            console.log("娃娃~");
        }
    }
    const dog = new Dog("旺财");
    dog.sayhello();
    // super  就是当前类的父类！
    // 调用父类的构造函数！
})();
