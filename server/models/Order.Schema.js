import mongoose from "mongoose";
const schema = new mongoose.Schema({ 
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    clothes:[{
        type:String,
        require:true
    }],
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