import mongoose from "mongoose";
const schema = new mongoose.Schema({ 
    email: {
        type:String,
        require:true
    },
    name: {
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
        type:Number,
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Clothes"
    },
    level:{
        type:String,
        require:true
    }
},{timestamps:true});

const User = mongoose.model('User', schema);
export {User}