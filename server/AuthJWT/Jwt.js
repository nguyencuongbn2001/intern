import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config()
const verifyToken =  (token) =>{
    try {
        return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET
		);
      } catch(error) {
        return null;
      }
}
export {verifyToken}