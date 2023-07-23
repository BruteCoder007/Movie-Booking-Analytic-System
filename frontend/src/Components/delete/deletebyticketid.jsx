import React from 'react';
import Input from '../input';
import {useNavigate} from 'react-router-dom';
import '../../form.css'; 
import Btn from "../btn";
import Header from '../Header';
import axios from 'axios';
function DeleteTicket(){
    const [ticketid,setticketid]=React.useState('');
    const [message,setmessage]=React.useState('');
    function eventChange(event){
      
       const  id=event.target.value
       setticketid(id);
    }
    
    const clickEvent=(event)=>{
            event.preventDefault();
            axios.post('http://localhost:5000/Delete/ticketid',{ticketid})
            .then(res=>{console.log('Delete successful');console.log(res.data);
            setmessage("Delete Succesful")
        })
            .catch(err=>console.log(err))

    }
    return(<div><Header text='Delete Ticket' classname='header'/><div id='parent-div' style={{left:'35%'}}>
    <form id='child-div'  >
       <Input type='text' label='Enter Ticket Id' name='ticketid' variant='outlined' value={ticketid} onChange={eventChange}/><br/>
       <div style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
       <Btn  type='submit' label='Submit' color='secondary' onClick={clickEvent}/>
       </div>
     
    </form></div><div style={{fontSize:'25px'}}>{message}</div></div>)
}
export default DeleteTicket;
 