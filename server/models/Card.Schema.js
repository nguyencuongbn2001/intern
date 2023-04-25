import mongoose from "mongoose";
const schema = new mongoose.Schema({ 
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    clothes:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Clothes'
    },
    soluong:{
        type: String,
        require:true
    }
},{timestamps:true});

const Card = mongoose.model('Card', schema);
export {Card}