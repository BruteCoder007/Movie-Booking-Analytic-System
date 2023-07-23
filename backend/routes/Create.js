const router=require("express").Router();
let User=require("../models/User");
let Ticket=require("../models/Ticket");
let Movie=require("../models/Movie");
router.route('/Movie').post((req,res)=>{
    console.log("Entered the post requests");
    const MovieId=req.body.movieid;
    const Movie_name=req.body.moviename;
    const Release_date=req.body.releasedate;
    const Cast=[req.body.cast1,req.body.cast2];
    const Production_company=req.body.productioncompany;
    const Genre=req.body.genre;
    const Movie_budget=req.body.moviebudget;
    const Boxoffice=req.body.boxoffice;

    const newMovie=new Movie({
        
        MovieId,
        Movie_name,
        Release_date,
        Cast,
        Production_company,
        Genre,
        Movie_budget,
        Boxoffice
    });
    newMovie.save()
    .then(()=>{res.json("Movie Added to  the DataBase");})
    .catch(err=>res.status(400).json("Error:"+err));
});

router.route('/User').post((req,res)=>{
    console.log("entered the user router");
    const UserId=req.body.userid;
    const Name=req.body.username;
    const Age=req.body.age;
    const Email=req.body.email;
    const Address={City:req.body.city,State:req.body.state};
    const No_of_tickets_booked=req.body.noofticketsbooked;
    
    const newUser=new User({
        UserId,
        Name,
        Age,
        Email,
        Address,
        No_of_tickets_booked,
        
    });
    newUser.save()
    .then(()=>{res.json("User Added to  the DataBase");console.log("User added to the database")})
    .catch(err=>res.status(400).json("Error:"+err));
});
router.route('/Ticket').post((req,res)=>{
    console.log("Entered Ticket");
    const UserId=req.body.userid;
    const TicketId=req.body.ticketid;
    const MovieId=req.body.movieid;
    const TheatreId=req.body.theatreid;
    const No_of_tickets=req.body.nooftickets;
    const Show_timing=req.body.showtiming;
    const Ticket_status=req.body.ticketstatus;
    const Cost=req.body.cost;
    
    const newTicket=new Ticket({
        UserId,
        TicketId,
        MovieId,
        TheatreId,
        No_of_tickets,
        Show_timing,
        Ticket_status,
        Cost
        
    });
    newTicket.save()
    .then(()=>res.json("Ticket Added to  the DataBase"))
    .catch(err=>res.status(400).json("Error:"+err));
});
module.exports=router;