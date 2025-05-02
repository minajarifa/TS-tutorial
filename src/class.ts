interface IUserFormater {
  formateUser: () => string;
}
class User implements IUserFormater {
  fullName: string;
  age: number;
  constructor(fullName: string, age: number) {
    this.fullName = fullName;
    this.age = age;
  }
  formateUser = () => {
    return `name ${this.fullName}, Age${this.age}`;
  };
}
let user = new User("Arifa Apu", 20);
console.log(user);