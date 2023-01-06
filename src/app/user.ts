export const userList = [];

export const addUser = (user) => {
  userList.push(user);
};

export const updateUserList = (users) => {
  userList.splice(0, userList.length);
  users.map((user) => {
    userList.push(user);
  });
};

export const getUsers = (user) => {
  return userList;
};

export class User {
  constructor(
    public name: string = '',
    public email: string = '',
    public age: number = 0,
    public course: string = 'default'
  ) {}
}
