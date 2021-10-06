import { generateToken } from "../helpers/login";
import { Credentials } from "../models/auth/credentials";

export class AuthService {
  public async login(credentials: Credentials): Promise<string> {
    const token = generateToken(credentials);
    return token;
  }
}
