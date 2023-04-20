import LoginForm from "./login-form.interface";

export default interface IUser extends LoginForm {
  description?: string;
  id: number;
}