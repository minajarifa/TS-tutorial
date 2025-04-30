const userForm = document.querySelector('.user-form')as HTMLFormElement;
console.log(userForm);
const userName= document.querySelector("#name")as HTMLFormElement;
const userEmail= document.querySelector("#email")as HTMLFormElement;
console.log(userEmail);
userForm.addEventListener("submit",(event:Event)=>{
    event.preventDefault();
    const data={
        userName:userName.value,
        userEmail:userEmail.value,
    }
    console.log(data);
})