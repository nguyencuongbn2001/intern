
const typeDefs = `#graphql
  type User{
     email:String!,
     password:String!,
     firstname:String,
     lastname:String,
     address:String,
     phone:String,
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
    getUser:User,
    getOrder:[Order]
  },
  type Mutation{
    addUser(email:String!, password:String!):User, 
    addClothes(name:String!,chatlieu:String!,xuatxu:String!, soluong:Int!, giatien:Int!,theloai:String!,hinhanh:String!, mathang:String!):Clothes
    login(email:String!, password:String!):User,
    addCart(clothesId:ID!,soluong:Int!):Cart,
    updateUser(firstname:String,lastname:String,phone:String,address:String):User,
    deleteCart(clothesId:ID!):Cart,
    order:Order
  }
`;
export { typeDefs }