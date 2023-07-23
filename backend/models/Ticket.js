const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Ticket=new Schema({
    UserId:{
        type:Number,
        required:true
    },
    TicketId:{
        unique:true,
        required:true,
        type:Number
    },
    MovieId:{type:Number,
    required:true},
    TheatreId:{
        type:Number,
        required:true
    },
    No_of_tickets:{
        type:Number,
        required:true
    },
    Show_timing:{
        type:Number,
        required:true
    },
    Ticket_status:{
        type:String,
        required:true
    },
    Cost:{
       type:Number,
       required:true
    }
});
var Tickets=mongoose.model("Ticket",Ticket);
module.exports=Tickets;
