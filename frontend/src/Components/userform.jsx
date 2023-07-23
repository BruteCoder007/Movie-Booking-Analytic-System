import React from 'react';
import Input from './input';
import '../form.css'; 
import Btn from "./btn";
import Header from './Header';
import axios from 'axios';
function Userform(){
    const [userdetails,setuserdetails]=React.useState({userid:'',username:'',age:'',email:'',city:'',state:'',noofticketsbooked:''});
    function eventChange(event){
        const {value,name}=event.target;
        setuserdetails(prevValue=>{
                return {
                    ...prevValue,
                    [name]:value
                };
        })
    }
    const clickEvent=(event)=>{
       console.log(userdetails);
        event.preventDefault();
        axios.post('http://localhost:5000/Create/User',userdetails)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    return(<div><Header text='User Details' classname='header'/><div id='parent-div' style={{left:'35%'}}><form id='child-div' action='/User' method='post'>
       <Input type='number' label='User Id' name='userid' variant='outlined' value={userdetails.userid} onChange={eventChange}/><br/>
       <Input type='text' label='Name' name='username' variant='outlined' value={userdetails.username} onChange={eventChange}/><br/>
       <Input type='number' label='Age' name='age' variant='outlined' value={userdetails.age} onChange={eventChange}/><br/>
       <Input type='mail' label='Email ' name='email' variant='outlined' value={userdetails.email} onChange={eventChange}/><br/>
       <Input type='text' label='City' name='city' variant='outlined' value={userdetails.city} onChange={eventChange}/><br/>
       <Input type='text' label='State' name='state' variant='outlined' value={userdetails.state} onChange={eventChange}/><br/>
       <Input type='number' label='No of tickets booked' name='noofticketsbooked' value={userdetails.noofticketsbooked} variant='outlined' onChange={eventChange}/><br/>
       <div style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
       <Btn  type='submit' label='Submit' color='secondary' onClick={clickEvent}/>
       </div>
    </form></div></div>)
   
       
}
export default Userform;