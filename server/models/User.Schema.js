import mongoose from "mongoose";
const schema = new mongoose.Schema({ 
    email: {
        type:String,
        require:true
    },
    firstname: {
        type:String,
    },
    lastname: {
        type:String,
    },
    password: {
        type:String,
        require:true
    },
    address: {
        type:String,
    },
    phone: {
        type:String,
    },
    level:{
        type:String,
        require:true
    },
    refreshToken:{
        type:String,
        require:true
    }
},{timestamps:true});

const User = mongoose.model('User', schema);
export {User}