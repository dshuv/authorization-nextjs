import {createContext} from "react";
import {IUserContext} from "../../interface/user-context.interface";
import IUser from "../../interface/user.interface";


export const defaultUser :IUser = {
  username: '',
  id: 0,
  description: '',
  password: '',
};

const context: IUserContext = {
  user: defaultUser,
  handleLogin: (candidate) => {
  }
};

const AppContext = createContext(context);

export default AppContext;