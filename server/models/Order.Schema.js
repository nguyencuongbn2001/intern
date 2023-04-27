import mongoose from "mongoose";
const schema = new mongoose.Schema({ 
    
    orderbyid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    soluong: {
        type:Number,
        require:true
    },
    status:{
        type:String,
        require:true
    }
},{timestamps:true});

const Order = mongoose.model('Order', schema);
export {Order}