import { User } from '../models/User.Schema.js';
import { Clothes } from '../models/Clothes.Schema.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
const saltRounds = 10;
import { GraphQLError } from 'graphql';
import validator from 'validator';
import * as dotenv from 'dotenv';
dotenv.config()
const resolvers = {
  Query: {
    getClothes: async (parent, args) =>{ 
      const query = await Clothes.find();
      if(args.mathang){
        query.where('mathang').equals(`${args.mathang}`)
      }
      if(args.theloai){
        query.where('theloai').equals(`${args.theloai}`)
      }
      if(args.giatien){
        if(args.giatien === 50000){
          query.find().where('giatien').gt(49999).lt(100001);
       }else if(args.giatien === 100000){
          query.find().where('giatien').gt(99999).lt(499999);
       }else{
          query.find().where('giatien').gt(499999).lt(1000000);
       }
      }
      return query
    },
    getDetailClothes: async (parent, args) =>{ 
      const ClothesId = args.clothesId;
      const res = await Clothes.findById(ClothesId);
      return res
    },
    getCart: async (parent, args, context)=>{
      const query =  Cart.find().where('email').equals(context.email)
      return query
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      let data = [];
      if(validator.isEmail(args.email) ===  false){
        throw new GraphQLError('Vui lòng nhập lại email đúng định dạng ',{ extensions: {
          code: 'BAD_USER_INPUT',
        },})
      }
      const Email = await User.find().where('email').equals(`${args.email}`)
      if(Email.length !== 0){
        throw new GraphQLError('Email is exist',{ extensions: {
          code: 'BAD_USER_INPUT',
        },})
      }
      if(args.password.length < 6){
        throw new GraphQLError('Password is short',{ extensions: {
          code: 'BAD_USER_INPUT',
        },})
      }
      const salt = bcrypt.genSaltSync(saltRounds);
      const passwordhash = bcrypt.hashSync(args.password, salt);
      let token = generateAccessToken(args.email,'user');
      let RefreshToken = generateRefreshToken(args.email,'user');
      const res = new User({email:args.email,password:passwordhash,refreshToken:RefreshToken,level:'user'})
      await res.save()
      data.Token = token;
      data.RefreshToken = RefreshToken;
     if(data) return data
    },
    addClothes: async (parent, args) => {
      const clothes =  new Clothes(args)
      await clothes.save()
      return clothes
    },
    login: async (parent, args) => {
      let data =[];
        if(validator.isEmail(args.email) ===  false){
          throw new GraphQLError('Vui lòng nhập lại email đúng định dạng ',{ extensions: {
            code: 'BAD_USER_INPUT',
          },})
        }
      const query = await User.find().where('email').equals(`${args.email}`)
      if(!query[0]){
        
        throw new GraphQLError('Vui lòng nhập lại email ',{ extensions: {
          code: 'BAD_USER_INPUT',
        },})  
      }
      let check_password = await bcrypt.compare(args.password,query[0].password);   
      if(check_password === false){
        throw new GraphQLError('Vui lòng nhập lại mật khẩu ',{ extensions: {
          code: 'BAD_USER_INPUT',
        },})
      }
        let token = generateAccessToken(args.email,'user');
        data.Token = token;
        data.RefreshToken = query[0].refreshToken;
        if(data) return data
    },
    addCart: async (parent, args, context)=>{
      
    }
     
  }
};
let  generateAccessToken = (email,role) =>{
  return jwt.sign({email:email,role:role}, process.env.ACCESS_TOKEN_SECRET,{
      algorithm: 'HS256',
      expiresIn: process.env.ACCESS_TOKEN_LIFE,
  });
}
let  generateRefreshToken = (email,role) =>{
  return jwt.sign({email:email,role:role}, process.env.REFRESH_TOKEN_SECRET,{
      algorithm: 'HS256'
  });
}
export { resolvers }