import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config()
const verifyToken =  (token) =>{
    try {
        return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET
		);
      } catch(error) {
        console.log(`Error in decode access token: ${error}`);
        return null;
      }
}
export {verifyToken}