export default class UserDto {
  constructor(user) {
    this.name = user.first_name;
    this.lastName = user.last_name;
    this.email = user.email;
    this.role = user.role ? user.role : "user_role";
    this.password = user.password;
  }
}
