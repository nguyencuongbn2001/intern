const typeDefs = `#graphql
  type User{
     email:String!,
     password:String!,
     name:String,
     address:String,
     phone:Int,
     level:String!,
     order:[Order]
     cart:[Cart]
  },
  type Clothes{
     _id: ID,
     name:String!,
     chatlieu:String!,
     xuatxu:String!,
     soluong:Int!,
     giatien:Int!,
     theloai:String!,
     hinhanh:String!
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
    getClothes:[Clothes],
    getDetailClothes(clothesId: String!):Clothes
  },
  type Mutation{
    addUser(email:String!, password:String!,level:String!):User, 
    addClothes( name:String!,chatlieu:String!,xuatxu:String!, soluong:Int!, giatien:Int!,theloai:String!,hinhanh:String!):Clothes
  }
`;
export { typeDefs }