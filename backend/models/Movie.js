const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Movie=new Schema({
    MovieId:{
        unqiue:true,
        required:true,
        type:Number
    },
    Movie_name:{
        type:String,
        required:true,
    },
   Release_date:{
    type:Date,
    required:true
   } ,
    Cast:[Number],
    Production_company:{
        type:Number,
        required:true
    },
    Genre:{
        type:String,
        required:true
    },
    Movie_budget:{
        type:Number,
        required:true
    },
    Boxoffice:{
        type:Number,
        required:true
    }
},{timestamps:true});
var Movies=mongoose.model("Movie",Movie);
module.exports=Movies;