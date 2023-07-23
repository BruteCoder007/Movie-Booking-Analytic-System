const express =require('express');
const cors =require('cors');
// const mongoose =require('mongoose');

 const app =express();
 const host ='localhost';
 const port =5000;
 app.use(cors());
 app.use (express.json());
//  const url='mongodb://127.0.0.1:27017/MovieBookingAnalyticSystem';
//  const connect = mongoose.connect(url);
//  connect.then((db)=>{
//     console.log("Connected to the server\n");

//  });
// const  Create  =require("./routes/Create");
// const Read=require("./routes/Read");
// const Aggregate=require("./routes/Aggregate.js");
// const Update=require("./routes/Update.js");

// const Delete=require("./routes/Delete.js");



// app.use("/",Create);
// app.use("/Create",Create);
// app.use('/Update',Update);
// app.use("/Read",Read);
// app.use("/Aggregate",Aggregate);

// app.use("/Delete",Delete);

app.use('/message',(req,res)=>{
   res.json({message:"Hello , This is davis joshi jeramiah"});
});
app.listen(port,()=>{
   console.log(`Server running on port:${port}`);
});

