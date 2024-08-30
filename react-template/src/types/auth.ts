export interface AuthStore {
  signup: SignUp;
  login: Login;
}

export type SignUp = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type Login = {
  email: string;
  password: string;
};
