import mongoose from "mongoose";
const schema = new mongoose.Schema({ 
    orderby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type:String,
        require:true
    },
    soluong: {
        type:Number,
        require:true
    },

    address: {
        type:String,
        require:true
    },

    phone: {
        type:Number,
        require:true
    },
    Status:{
        type:String,
        require:true
    }
},{timestamps:true});

const Order = mongoose.model('Order', schema);
export {Order}