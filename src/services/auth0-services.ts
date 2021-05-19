import { Config } from 'react-native-config';
import Auth0, {
  CreateUserResponse,
  PasswordRealmResponse,
} from 'react-native-auth0';
import { ResponseAuthError } from '../types';

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  email: string;
  password: string;
  confirmPassword: string;
}

class Auth0Service {
  private auth0: Auth0;

  constructor() {
    this.auth0 = new Auth0({
      domain: Config.AUTH0_DOMAIN,
      clientId: Config.AUTH0_CLIENT_ID,
    });
  }

  async signIn({
    email,
    password,
  }: ISignIn): Promise<PasswordRealmResponse | ResponseAuthError> {
    const passwordRealm = await this.auth0.auth.passwordRealm({
      username: email,
      password: password,
      realm: Config.AUTH0_DB_CONNECTION,
      audience: Config.AUTH0_AUDIENCE,
    });

    return passwordRealm;
  }

  async signUp({ email, password }: ISignUp): Promise<CreateUserResponse> {
    const createdUser = await this.auth0.auth.createUser({
      email: email,
      username: email,
      password: password,
      connection: Config.AUTH0_DB_CONNECTION,
    });

    return createdUser;
  }

  async refreshToken() {}
}

export default new Auth0Service();
