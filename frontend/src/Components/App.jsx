// import React from "react";
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import Crud from './Crud.jsx';
// import Create from './Create';
// import Read from './Read';
// import Delete from './Delete';
// import Aggregate from './Aggregate';
// import Userform from  './userform';
// import Ticketform from  './Ticketform';
// import Movieform from  './movieform';
// import MovieSearchform from  './moviesearchform';
// import TicketSearchform from  './ticketsearchform';
// import UserSearchform from  './usersearchform';
// import MovieSearchResult from  './moviesearchresult';
// import TicketSearchResult from  './ticketsearchresult';
// import UserSearchResult from  './usersearchresult';
// import Bookingbyeveryuser from './aggregate_queries/bookingbyeveryuser';
// import Collectionineverytheatre from './aggregate_queries/collectionineverytheatre';
// import Usersfromeverystate from './aggregate_queries/usersfromeverystate';
// import Collectionofparticularcastmovies from './aggregate_queries/collectionofparticularcastmovies';
// import Collectionofeverymovies from './aggregate_queries/collectionofeverymovies';
// import Collectionbasedongenres from './aggregate_queries/collectionbasedongenres';
// import UpdateUser from './update/updatebyuserid';
// import  UpdateUserform from './update/updateuserform';
// import UpdateTicket from './update/updatebyticketid';
// import  UpdateTicketform from './update/updateticketform';
// import Update from './Update';
// import DeleteUser from './delete/deletebyuserid';
// import DeleteTicket from './delete/deletebyticketid';
// import Collectionbasedonshowtiming from "./aggregate_queries/collectionbasedonshowtiming.jsx";




// function App(){
//     return (
//         <Router>
//             <Routes>
//                 <Route path='/' element ={<Crud/>}/>
//                 <Route path='*' element ={<div style={{fontSize:'50px'}}>Enter Relavant URL</div>}/>
//                 <Route path="/Create" element={<Create />} /> 
//                 <Route path="/Read" element={<Read/>} />
//                 <Route path="/Update" element={<Update/>} />
//                 <Route path="/Delete" element={<Delete/>} />
//                 <Route path="/Aggregate" element={<Aggregate/>} />
//                 <Route path="/Create/Userform" element={<Userform/>} />
//                 <Route path="/Create/Ticketform" element={<Ticketform/>} />
//                 <Route path="/Create/Movieform" element={<Movieform/>} />
//                 <Route path="/Read/UserSearchform" element={<UserSearchform/>} />
//                 <Route path="/Read/MovieSearchform" element={<MovieSearchform/>} />
//                 <Route path="/Read/TicketSearchform" element={<TicketSearchform/>} />
//                 <Route path="/Read/MovieSearchform/moviesearchresult" element={<MovieSearchResult/>} />
//                 <Route path="/Read/TicketSearchform/ticketsearchresult" element={<TicketSearchResult/>} />
//                 <Route path="/Read/UserSearchform/usersearchresult" element={<UserSearchResult/>} />
//                 <Route path='/Aggregate/bookingbyeveryuser' element ={<Bookingbyeveryuser/>}/>
//                 <Route path='/Aggregate/collectionineverytheatre' element ={<Collectionineverytheatre/>}/>
//                 <Route path='/Aggregate/usersfromeverystate' element ={<Usersfromeverystate/>}/>
//                 <Route path='/Aggregate/collectionofparticularcastmovies' element ={<Collectionofparticularcastmovies/>}/>
//                 <Route path='/Aggregate/collectionofeverymovies' element ={<Collectionofeverymovies/>}/>
//                 <Route path='/Aggregate/collectionbasedongenres' element ={<Collectionbasedongenres/>}/>
//                 <Route path='/Update' element={<Update/>}/>
//                 <Route path='/Update/updateuserbyid' element={<UpdateUser/>}/>
//                 <Route path='/Update/updateuserbyid/updateuserform' element={<UpdateUserform/>}/>
//                 <Route path='/Update/updateticketbyid' element={<UpdateTicket/>}/>
//                 <Route path='/Update/updateticketbyid/updateTicketform' element={<UpdateTicketform/>}/>
//                 <Route path='/Delete/deleteuserbyid' element={<DeleteUser/>}/>
//                 <Route path='/Delete/deleteticketbyid' element={<DeleteTicket/>}/>
//                 <Route path='/Aggregate/collectionbasedonshowtiming' element={<Collectionbasedonshowtiming/>}/>
//           </Routes>
//         </Router>)
 
// }







// export default App;

import React ,{useState,useEffect} from 'react';
export default function App(){
    const [message,setMessage]=useState("");
    useEffect(()=>{
        fetch("http://localhost:5000/message")
        .then((res)=>res.json())
        .then((data)=>setMessage(data.message));
    },[]);
    return(
        <div>
            <h1>{message}</h1>
        </div>
    );
}