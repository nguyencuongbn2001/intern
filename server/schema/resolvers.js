import { User } from '../models/User.Schema.js';
import { Clothes } from '../models/Clothes.Schema.js';
const resolvers = {
  Query: {
    getClothes: async () =>{ 
      const res = await Clothes.find({}); 
      return res
    },
    getDetailClothes: async (parent, args) =>{ 
      const ClothesId = args.clothesId;
      console.log("🚀 ~ file: resolvers.js:11 ~ getDetailClothes: ~ ClothesId:", ClothesId)
      const res = await Clothes.findById(ClothesId);
      return res
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)
      return user
    },
    addClothes: async (parent, args) => {
      const clothes =  new Clothes(args)
      await clothes.save()
      return clothes
    }
  }
};
export { resolvers }