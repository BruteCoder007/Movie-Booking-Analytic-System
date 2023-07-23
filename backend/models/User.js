const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const address=new Schema({
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    }
});
const User=new Schema({
    UserId:{
        type:Number,
        unique:true,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true        
    },
Email:{
    type:String,
    required:true
},
Address:address
,
No_of_tickets_booked:{
    type:Number,
    required:true
}},{timestamps:true}
);
var Users=mongoose.model("User",User);
module.exports=Users;