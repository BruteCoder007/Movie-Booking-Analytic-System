const router=require("express").Router();
let User=require("../models/User");
let Ticket=require("../models/Ticket");
let Movie=require("../models/Movie");
let Production=require("../models/Production");
let Theatre=require("../models/Theatre");
let Cast=require("../models/Cast");

router.route('/updatebyuserid').post((req,res)=>{
User.findOneAndUpdate({UserId:req.body.searchid},{UserId:req.body.userid,Name:req.body.username,Age:req.body.age,Address:{City:req.body.city,State:req.body.state}},{new:true},(err,result)=>{
        console.log("Entered Update \n");
        if(err){
            console.log(err);
            return res.json(err);
        }
        else{
            // res.json(result);
            console.log("update successful");
            return res.json("Update Successfully done");
        }
    })
});
router.route('/updatebyticketid').post((req,res)=>{
    Ticket.findOneAndUpdate({TicketId:req.body.searchid},{TicketId:req.body.ticketid,MovieId:req.body.movieid,TheatreId:req.body.theatreid,No_of_tickets:req.body.nooftickets,Show_timing:req.body.showtiming,Ticket_status:req.body.ticketstatus,Cost:req.body.cost},{new:true},(err,result)=>{
            console.log("Entered Update \n");
            if(err){
                console.log(err);
                return res.json(err);
            }
            else{
                console.log("update succesful");
                // res.json(result);
                return res.json("Update Successfull");
            }
        })
    });
    module.exports=router;

