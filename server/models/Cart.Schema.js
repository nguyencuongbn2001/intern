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
        type: Number,
        require:true
    }
},{timestamps:true});

const Cart = mongoose.model('Cart', schema);
export {Cart}