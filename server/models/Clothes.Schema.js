import mongoose from "mongoose";
const schema = new mongoose.Schema({ 
    name: {
        type:String,
        require:true
    },
    chatlieu: {
        type:String,
        require:true
    },
    xuatxu: {
        type:String,
        require:true
    },

    soluong: {
        type:Number,
        require:true
    },

    giatien: {
        type:Number,
        require:true
    }
},{timestamps:true});

const Clothes = mongoose.model('Clothes', schema);
export {Clothes}