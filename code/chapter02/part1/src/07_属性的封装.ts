// private 只能在类内访问！

// protected 当前类和当前类的子类中有效！   类中！
(function () {


    class C1 {

        nam:string;
        age:number;


        constructor( nam: string,  age: number) {
            this.nam=nam;
            this.age=age;

        }

    }

    const c = new C1("123", 13);

})()
