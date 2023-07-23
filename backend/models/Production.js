const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Production=new Schema({
    CompanyId:{
        unique:true,
        required:true,
        type:Number
    },
    Company_name:{
        type:String,
        required:true
    },
    Movies_released:[Number]
});
var Productions=mongoose.model("Production",Production);
module.exports=Productions;
