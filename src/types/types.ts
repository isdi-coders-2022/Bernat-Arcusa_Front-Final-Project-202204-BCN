export interface ILogInForm {
  username: string;
  password: string;
}

export interface ILoginResponse {
  data: string;
}

export interface IRegisterInfo {
  username: string;
  password: string;
  fullname: string;
  email: string;
}

export interface IRegisterResponse {
  user: string;
}

export interface ITattoo {
  _id: string;
  title: string;
  image: string;
  imageBackup: string;
  creator: string;
  creationDate: string;
  tags: string[];
}

export interface ITattooCreate {
  title: string;
  image: string;
  creator: string;
  creationDate: string;
}

export interface ITokenInfo {
  username: string;
}

export interface IUserState {
  username: string;
  logged: boolean;
}

export interface IUserInfo {
  username: string;
}
