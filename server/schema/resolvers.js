import { User } from '../models/User.Schema.js';
import { Clothes } from '../models/Clothes.Schema.js';
import { Cart } from '../models/Cart.Schema.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
const saltRounds = 10;
import { GraphQLError } from 'graphql';
import validator from 'validator';
import * as dotenv from 'dotenv';
dotenv.config()
const resolvers = {
  Query: {
    getClothes: async (parent, args) => {
      const query = Clothes.find();

      if (args.mathang) {
        query.where('mathang').equals(`${args.mathang}`)
      }
      if (args.theloai) {
        query.where('theloai').equals(`${args.theloai}`)
      }
      if (args.giatien) {
        if (args.giatien === 50000) {
          query.find().where('giatien').gt(49999).lt(100001);
        } else if (args.giatien === 100000) {
          query.find().where('giatien').gt(99999).lt(499999);
        } else {
          query.find().where('giatien').gt(499999).lt(1000000);
        }
      }
      return query
    },
    getDetailClothes: async (parent, args) => {
      const ClothesId = args.clothesId;
      const res = await Clothes.findById(ClothesId);
      return res
    },
    getCart: async (parent, args, context) => {
      if (!context.email) {
        throw new GraphQLError('Vui lòng đăng nhập để sử dụng chức năng này', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        })
      }
      const query = await User.find().where('email').equals(`${context.email}`)
      const res = await Cart.find().where('user').equals(query[0]._id);
      console.log("🚀 ~ file: resolvers.js:48 ~ getCart: ~ query:", query)
      return res
    },
    getSoluongCart: async (parent, args, context) => {
      let data = [];
      if (!context.email) {
        data.soluong = 0
      } else {
        const query = await User.find().where('email').equals(`${context.email}`);
        const res = await Cart.find().where('user').equals(query[0]._id);
        if (res.length > 0) {
          await Cart.aggregate([{ $match: { user: query[0]._id } }, { $group: { _id: query[0]._id, soluong: { $sum: "$soluong" } } }]).exec()
            .then(results => {
              data.soluong = results[0].soluong
            })
            .catch(error => {
              console.error(error);
            });
        }
        else {
          data.soluong = 0
        }
      }
      if (data) return data
    },
    getUser: async (parent, args, context)=>{
      let data = [];
      const query = await User.find().where('email').equals(`${context.email}`)
      if (!query) {
        throw new GraphQLError('Có lỗi xảy ra', {
          extensions: {
            code: 'BAD_USER',
          },
        })
      }
      if(args.phone)
      {
        if(validator.isMobilePhone(String(args.phone),['vi-VN']) === false){
          throw new GraphQLError('Số điện thoại không hợp lệ', {
            extensions: {
              code: 'BAD_USER_INPUT',
            },
          })
        }
      }
      
       
    }

  },
  Cart: {
    clothes: async (parent, args, context) => {
      const clothes = await Clothes.findById(parent.clothes);
      return [clothes]
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      let data = [];
      if (validator.isEmail(args.email) === false) {
        throw new GraphQLError('Vui lòng nhập lại email đúng định dạng ', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        })
      }
      const Email = await User.find().where('email').equals(`${args.email}`)
      if (Email.length !== 0) {
        throw new GraphQLError('Email is exist', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        })
      }
      if (args.password.length < 6) {
        throw new GraphQLError('Password is short', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        })
      }
      const salt = bcrypt.genSaltSync(saltRounds);
      const passwordhash = bcrypt.hashSync(args.password, salt);
      let token = generateAccessToken(args.email, 'user');
      let RefreshToken = generateRefreshToken(args.email, 'user');
      const res = new User({ email: args.email, password: passwordhash, refreshToken: RefreshToken, level: 'user' })
      await res.save()
      data.Token = token;
      data.RefreshToken = RefreshToken;
      if (data) return data
    },
    addClothes: async (parent, args) => {
      const clothes = new Clothes(args)
      await clothes.save()
      return clothes
    },
    login: async (parent, args) => {
      let data = [];
      if (validator.isEmail(args.email) === false) {
        throw new GraphQLError('Vui lòng nhập lại email đúng định dạng ', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        })
      }
      const query = await User.find().where('email').equals(`${args.email}`)
      if (!query[0]) {

        throw new GraphQLError('Vui lòng nhập lại email ', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        })
      }
      let check_password = await bcrypt.compare(args.password, query[0].password);
      if (check_password === false) {
        throw new GraphQLError('Vui lòng nhập lại mật khẩu ', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        })
      }
      let token = generateAccessToken(args.email, 'user');
      data.Token = token;
      data.RefreshToken = query[0].refreshToken;
      if (data) return data
    },
    addCart: async (parent, args, context) => {
      if (!context.email) {
        throw new GraphQLError('Vui lòng đăng nhập để sử dụng chức năngn này', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        })
      }
      const query = await User.find().where('email').equals(`${context.email}`)
      if (!query) {

        throw new GraphQLError('Có lỗi xảy ra', {
          extensions: {
            code: 'BAD_USER',
          },
        })
      }
      const queryuser = await Cart.find().where('user').equals(query[0]._id);
      if (queryuser.length > 0) {
        const data = await Cart.find().where('user').equals(query[0]._id).where('clothes').equals(args.clothesId)
        if (data.length !== 0) {
          let soluongnew = parseInt(data[0].soluong) + parseInt(args.soluong);
          await Cart.findByIdAndUpdate(data[0]._id, { soluong: soluongnew })
        }
        else {
          const res = new Cart({ user: query[0]._id, soluong: args.soluong, clothes: args.clothesId });
          await res.save();
        }
      }
      else {
        const res = new Cart({ user: query[0]._id, soluong: args.soluong, clothes: args.clothesId });
        await res.save();
      }
      const success = 'done'
      return success
    }

  }
};
let generateAccessToken = (email, role) => {
  return jwt.sign({ email: email, role: role }, process.env.ACCESS_TOKEN_SECRET, {
    algorithm: 'HS256',
    expiresIn: process.env.ACCESS_TOKEN_LIFE,
  });
}
let generateRefreshToken = (email, role) => {
  return jwt.sign({ email: email, role: role }, process.env.REFRESH_TOKEN_SECRET, {
    algorithm: 'HS256'
  });
}
export { resolvers }