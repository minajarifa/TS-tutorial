"use strict";
const userForm = document.querySelector('.user-form');
console.log(userForm);
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
console.log(userEmail);
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
    };
    console.log(data);
});
