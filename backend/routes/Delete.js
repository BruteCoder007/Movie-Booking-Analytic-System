const router=require("express").Router();
let User=require("../models/User");
let Ticket=require("../models/Ticket");
let Movie=require("../models/Movie");
router.route('/userid').post((req,res)=>{
    User.remove(({ UserId:req.body.userid }), function (err) {
        if (err){
            console.log(err)
            return res.json(err);

        }
        else{
            console.log("User Deleted");
            return res.json("Delete Successfully done");

        }
     });
})
router.route('/movieid').post((req,res)=>{
    Movie.remove(({ MovieId:req.body.movieid }), function (err) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Movie Deleted");
        }
     });
})
router.route('/ticketid').post((req,res)=>{
    Ticket.remove(({ TicketId:req.body.ticketid }), function (err) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Ticket Deleted");
            return res.json("Delete Successfully done");

        }
     });
})
module.exports=router;
