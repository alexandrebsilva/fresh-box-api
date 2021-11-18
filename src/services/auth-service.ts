import jwt from "jsonwebtoken";
import { UnauthorizedError } from "routing-controllers";
import { Credentials } from "../models/auth/credentials";
import { JwtSignature } from "../models/auth/jwt-signature";

export class AuthService {
  public getJwtPyaload(token: string): JwtSignature {
    const payload = jwt.decode(token) as JwtSignature;
    return payload;
  }

  public validateAndDecodeToken(token: string): JwtSignature {
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_PRIVATE_KEY as string
      ) as JwtSignature;
      return decoded;
    } catch (err) {
      throw new UnauthorizedError("Invalid Credentials");
    }
  }

  public generateToken(data: any): string {
    const token = jwt.sign(data, process.env.JWT_PRIVATE_KEY as string, {
      expiresIn: process.env.NODE_ENV === "local" ? 0 : "20m",
    });
    return token;
  }

  public async login(credentials: Credentials): Promise<string> {
    const token = this.generateToken(credentials);
    return token;
  }
}
