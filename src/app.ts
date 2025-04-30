let userInfo1:()=>void;
let userInfo2:(name:string)=>void;
let userInfo3:(name:string,age:number)=>string;
userInfo1=()=>{
console.log("Hi, I am Arifa Islam")
}
userInfo2=(name:string)=>{
console.log(`Hi, I am ${name}`)
}
userInfo3=(name:string,age:number)=>{
return(`Hi, I am ${name},${age}`)
}
userInfo1()
userInfo2("Arifa the boro Apu")
userInfo3("Arifa the boro Apu",20)