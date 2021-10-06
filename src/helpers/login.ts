import jwt from "jsonwebtoken";

export function generateToken(data: any): string {
  const token = jwt.sign(data, process.env.JWT_PRIVATE_KEY as string, {
    expiresIn: process.env.NODE_ENV === "local" ? 0 : "20m",
  });
  return token;
}

export function validateToken(token: string): any {
  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY as string);
    return decoded;
  } catch (err) {
    return false;
  }
}
