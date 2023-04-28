const typeDefs = `#graphql
  type User{
     email:String!,
     password:String!,
     name:String,
     address:String,
     phone:Int,
     level:String!,
     Token:String,
     RefreshToken:String
  },
  type Clothes{
     _id: ID,
     name:String!,
     chatlieu:String!,
     xuatxu:String!,
     soluong:Int!,
     giatien:Int!,
     theloai:String!,
     hinhanh:String!,
     mathang:String!
  },
  type Order{
    user:User,
    clothes:[Clothes]
    soluong:Int!,
    status:String!
  },
  type Cart{
     user:User,
     clothes:[Clothes],
     soluong:Int
  },
  type Query{
    getClothes(giatien:Int,mathang:String,theloai:String):[Clothes],
    getDetailClothes(clothesId: String!):Clothes,
    getCart:[Cart],
    getSoluongCart:Cart,
    getUser(firstname:String,lastname:String,phone:Int,address:String):User
  },
  type Mutation{
    addUser(email:String!, password:String!):User, 
    addClothes( name:String!,chatlieu:String!,xuatxu:String!, soluong:Int!, giatien:Int!,theloai:String!,hinhanh:String!, mathang:String!):Clothes
    login(email:String!, password:String!):User,
    addCart(clothesId:ID!,soluong:Int!):Cart 
  }
`;
export { typeDefs }