const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Theatre=new Schema({
    TheatreId:{
        type:Number,
        unique:true,
        required:true
    },
    Theatre_name:{
        type:String,
        rquired:true
    },
    Seating_capacity:{
        type:Number,
        required:true
    },
    No_of_screens:{
        type:Number,
        required:true
    },
    Boxoffice:{
        type:Number,
        required:true
    },
    Theatre_location:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
var Theatres=mongoose.model("Theatre",Theatre);
module.exports=Theatres;