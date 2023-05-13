import IUser from "./user.interface";

export interface IUserContext {
  user: IUser,
  handleLogin: (candidate: IUser) => void,
}