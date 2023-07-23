import React from 'react';
import Input from '../input';
import '../../form.css'; 
import Btn from "../btn";
import Header from '../Header';
import axios from 'axios';
function UpdateUserform(){
    const [userdetails,setuserdetails]=React.useState({searchid:'',userid:'',username:'',age:'',email:'',city:'',state:'',noofticketsbooked:'',message:''});
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
        event.preventDefault();
        const url=window.location.href;
        let val=url.split('?')[1];
       setuserdetails(prevValue=>{return{
        ...prevValue,
       ['searchid']:val
       };
    })       
    console.log(userdetails);
        axios.post('http://localhost:5000/Update/updatebyuserid',userdetails)
        .then(res=>{console.log('Update successful');console.log(res.data);
        setuserdetails(prevValue=>{return{
            ...prevValue,
           ['message']:'update successful'
           };
        }) ;
    })
        .catch(err=>console.log(err))
    }
    return(<div><Header text='User Updated Details' classname='header'/><div id='parent-div' style={{left:'35%'}}><form id='child-div' action='/User' method='post'>
       <Input type='number' label='User Id' name='userid' variant='outlined' value={userdetails.userid} onChange={eventChange}/><br/>
       <Input type='text' label='Name' name='username' variant='outlined' value={userdetails.username} onChange={eventChange}/><br/>
       <Input type='number' label='Age' name='age' variant='outlined' value={userdetails.age} onChange={eventChange}/><br/>
       <Input type='mail' label='Email ' name='email' variant='outlined' value={userdetails.email} onChange={eventChange}/><br/>
       <Input type='text' label='City' name='city' variant='outlined' value={userdetails.city} onChange={eventChange}/><br/>
       <Input type='text' label='State' name='state' variant='outlined' value={userdetails.state} onChange={eventChange}/><br/>
       <Input type='number' label='No of tickets booked' name='noofticketsbooked' value={userdetails.noofticketsbooked} variant='outlined' onChange={eventChange}/><br/>
       <div style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
       <Btn  type='submit' label='Update' color='secondary' onClick={clickEvent}/>
       </div>
    </form></div><div style={{fontSize:'25px'}}>{userdetails.message}</div></div>)
       
}
export default UpdateUserform;