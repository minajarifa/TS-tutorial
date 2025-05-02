interface IUser {
  id: number;
  name: string;
  age: number;
}
let users: IUser[] = [];
let user1: IUser = {
  id: 1,
  name: "arifa",
  age: 20,
};
let user2: IUser = {
  id: 2,
  name: "ayma",
  age: 27,
};
users.push(user1, user2);
const printUserInfo = (user: IUser) => {
  console.log(`${user.name},${user.age},${user.id}`);
};
console.log(users);
users.forEach((user) => printUserInfo(user));
