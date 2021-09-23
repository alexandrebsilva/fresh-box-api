import { Credentials } from "../models/credentials";
import jwt from "jsonwebtoken";

export function generateToken(credentials: Credentials): string {
  const token = jwt.sign(
    { foo: "bar" },
    process.env.JWT_PRIVATE_KEY as string,
    {
      expiresIn: process.env.NODE_ENV === "local" ? 0 : "20m",
    }
  );
  return token;
}
