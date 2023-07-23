const router=require("express").Router();
let User=require("../models/User");
let Ticket=require("../models/Ticket");
let Movie=require("../models/Movie");
router.route('/username').post((req,res)=>{
    User.find({Name:req.body.username},(err,result)=>{
        console.log("Fetch Succesful\n",result);
        if(err){
            console.log(err);
            return res.json(err);
        }
        else{
            console.log("The Result:\n",result);
            // res.json(result);
            return res.send(Array.from(new Set(result)));
        }
    })
})
router.route('/moviename').post((req,res)=>{
    Movie.find({Movie_name:req.body.moviename},{_id:0},(err,result)=>{
        console.log("Fetch Succesful\n",result);
        if(err){
            console.log(err);
            return res.json(err);
        }
        else{
            console.log("The Result:\n",result);
            return res.send(Array.from(new Set(result)));
        }
    })
})
router.route('/ticketid').post((req,res)=>{
    console.log(req.body)
    Ticket.find({TicketId:req.body.ticketid},{_id:0},(err,result)=>{
        if(err){
            console.log(err);
            return res.json(err);
        }
        else{
            console.log("The Result:\n",result);
            // return res.send(Array.from(new Set(result)));
            return res.send(Array.from(new Set (result)));
        }
    })
})
module.exports=router;