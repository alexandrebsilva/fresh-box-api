import { generateToken } from "../helpers/login";
import { Credentials } from "../models/credentials";

export class AuthService {
  public async login(credentials: Credentials): Promise<string> {
    const token = generateToken(credentials);
    return token;
  }
}
