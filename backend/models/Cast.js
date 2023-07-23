const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Cast=new Schema({
    CastId:{
        unique:true,
        type:Number,
        required:true
    },
    Cast_name:{
        type:String,
        required:true
    },
    Cast_age:{
        type:Number,
        required:true
    },
    Movies_acted:[Number]
});
var Casts=mongoose.model("Cast",Cast);
module.exports=Casts;