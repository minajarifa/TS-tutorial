const userForm = document.querySelector('.user-form')as HTMLFormElement;
const userName= document.querySelector("#name")as HTMLFormElement;
const userEmail= document.querySelector("#email")as HTMLInputElement;
const userCountry= document.querySelector("#country")as HTMLSelectElement;
console.log(userCountry);
// console.log(userEmail);
userForm.addEventListener("submit",(event:Event)=>{
    event.preventDefault();
    const data={
        userName:userName.value,
        userEmail:userEmail.value,
        userCountry:userCountry.value,
    }
    console.log(data);
})