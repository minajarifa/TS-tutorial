"use strict";
let userInfo1;
let userInfo2;
let userInfo3;
userInfo1 = () => {
    console.log("Hi, I am Arifa Islam");
};
userInfo2 = (name) => {
    console.log(`Hi, I am ${name}`);
};
userInfo3 = (name, age) => {
    return (`Hi, I am ${name},${age}`);
};
userInfo1();
userInfo2("Arifa the boro Apu");
userInfo3("Arifa the boro Apu", 20);
