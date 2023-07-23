const router=require("express").Router();
let User=require("../models/User");
let Ticket=require("../models/Ticket");
let Movie=require("../models/Movie");
let Production=require("../models/Production");
let Theatre=require("../models/Theatre");
let Cast=require("../models/Cast");
router.route('/bookingbyeveryuser').post((req,res)=>{
    Ticket.aggregate([{$lookup:{from:"users",localField:'UserId',foreignField:'UserId',as:'UserDetails'}},{$group:{_id:{userID:'$UserId',username:"$UserDetails.Name"},TotalCost:{$sum:'$Cost'}}}]).exec((err,result)=>{
        console.log("Entered the server side\n");
        if(err){
            console.log("Error Occured in Aggregate");
            return res.send(err)
        }
        else if(result)
        {
            console.log(result);
            return res.send(Array.from(new Set(result)));
        }
    })
})
router.route('/totalcollectionintheatre').post((req,res)=>{
    Ticket.aggregate([{$lookup:{from:'Theatre',localField:'TheatreId',foreignField:'TheatreId',as:'TheatreDetails'}},{$group:{_id:{theatreID:'$TheatreId',TheatreName:'$TheatreDetails.Theatre_name'},TotalCost:{$sum:'$Cost'}}}]).exec((err,result)=>{
        if(err){
            conosle.log("error occured in aggregate")
            return res.send(err)
        }
        else if(result){
            console.log(result);
            return res.send(Array.from(new Set(result)));
        }
    })
})
router.route('/totalusersfromeverystate').post((req,res)=>{
    Ticket.aggregate([{$lookup:{from:'Theatre',localField:'TheatreId',foreignField:'TheatreId',as:'TheatreDetails'}},{$group:{_id:'$TheatreId',TheatreName:'$TheatreDetails.Theatre_name',TotalCost:{$sum:'$Cost'}}}]).exec((err,result)=>{
        if(err){
            return res.send(err)
        }
        else if(result){
            return res.send(Array.from(new Set(result)));
        }
    })
})
router.route('/amountbymoviesofparticularcast').post((req,res)=>{
    Cast.aggregate([{$lookup:{from:'movies',localField:'Movies_acted',foreignField:'MovieId',as:'MovieDetails'}},{$unwind:"$MovieDetails"},{$group:{_id:'$CastId',Castname:'$Cast_name',TotalCollection:{$sum:'$MovieDetails.Boxoffice'}}}]).exec((err,result)=>{
        if(err){
            
            console.log("error occured in aggregate");
           return res.send(err)
        }
        else if(result){
            console.log(result);
            return res.send(Array.from(new Set(result)));
        }
    })
})
router.route('/totalcollectionofmovie').post((req,res)=>{
    Ticket.aggregate([{$lookup:{from:'movies',localField:'MovieId',foreignField:'MovieId',as:'MovieDetails'}},{$group:{_id:{MovieID:'$MovieId',MovieName:'$MovieDetails.Movie_name'},TotalCollection:{$sum:'$Cost'}}}]).exec((err,result)=>{
        if(err){
            console.log("error occured in aggregate");
           return res.send(err)
        }
        else if(result){
            console.log(result);
            return res.send(Array.from(new Set(result)));
        }
    })
})
router.route('/totalrevenuebasedongenre').post((req,res)=>{
    Ticket.aggregate([{$lookup:{from:'movies',localField:'MovieId',foreignField:'MovieId',as:'MovieDetails'}},{$group:{_id:'$MovieDetails.Genre',TotalCollection:{$sum:'$Cost'}}}]).exec((err,result)=>{
        console.log("Entered the server side\n");
        if(err){
            console.log("Error Occured in Aggregate");
           return res.send(err)
        }
        else if(result){
            console.log(result);
            return res.send(Array.from(new Set(result)));
        }
    })
})
router.route('/totalcollectionbasedonshowtiming').post((req,res)=>{
    Ticket.aggregate([{$group:{_id:'$Show_timing',TotalCollection:{$sum:'$Cost'}}}]).exec((err,result)=>{
        if(err){
            console.log("error occured in aggregate");
           return res.send(err)
        }
        else if(result){
            console.log(result);
            return res.send(Array.from(new Set(result)));
        }
    })
})
router.route('/ticketssoldbasedonstatesforaparticularmovie').post((req,res)=>{
    Ticket.aggregate([{$lookup:{from:"users",localField:'UserId',foreignField:'UserId',as:'UserDetails'}},{$group:{_id:{MovieId:'$MovieId',States:"$UserDetails.Address.State"},TotalCollection:{$sum:'$Cost'}}}]).exec((err,result)=>{
        if(err){
            console.log("error occured in aggregate");
           return res.send(err)
        }
        else if(result){
            console.log(result);
            return res.send(Array.from(new Set(result)));
        }
    })
})
module.exports=router;




// tickets.aggregate([{$lookup:{from:'Movies',localField:'MovieId',foreignField:'MovieId',as:'MovieDetails'}},{$group:{_id:'$MovieDetails.Genre',TotalCollection:{$sum:'$Cost'}}}])
// tickets.aggregate([{$group:{_id:'$show_timing',TotalCollection:{$sum:'$Cost'}}}])