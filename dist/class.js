"use strict";
class User {
    constructor(fullName, age) {
        this.formateUser = () => {
            return `name ${this.fullName}, Age${this.age}`;
        };
        this.fullName = fullName;
        this.age = age;
    }
}
let user = new User("Arifa Apu", 20);
console.log(user);
