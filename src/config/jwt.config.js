import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET_KEY;
export const ACCESS_TOKEN_EXPIRE_TIME = process.env.ACCESS_TOKEN_EXPIRE_TIME;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET_KEY;
export const REFRESH_TOKEN_EXPIRE_TIME = process.env.REFRESH_TOKEN_EXPIRE_TIME;

export const generateToken = (userId, phoneNumber) => {
  return jwt.sign(
    { userId, phoneNumber },
    ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRE_TIME } 
  );
};
