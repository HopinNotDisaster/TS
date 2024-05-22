"use strict";
// private 只能在类内访问！
// protected 当前类和当前类的子类中有效！   类中！
(function () {
    class C1 {
        constructor(nam, age) {
            this.nam = nam;
            this.age = age;
        }
    }
    const c = new C1("123", 13);
})();
