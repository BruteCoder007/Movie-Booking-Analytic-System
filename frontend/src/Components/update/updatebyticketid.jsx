import React from 'react';
import Input from '../input';
import {useNavigate} from 'react-router-dom';
import '../../form.css'; 
import Btn from "../btn";
import Header from '../Header';
function UpdateTicket(){
    const navigate =useNavigate();
    const [ticketid,setticketid]=React.useState('')
    function eventChange(event){
      
       const  id=event.target.value
       setticketid(id);
    }
    const navigatetoticketupdateform=()=>{
      navigate('/Update/Updateticketbyid/updateticketform'+'?'+ticketid)
  };
    const clickEvent=(event)=>{
            event.preventDefault();
            navigatetoticketupdateform();  

    }
    return(<div><Header text='Update Ticket' classname='header'/><div id='parent-div' style={{left:'35%'}}>
    <form id='child-div'  >
       <Input type='text' label='Enter Ticket Id' name='ticketid' variant='outlined' value={ticketid} onChange={eventChange}/><br/>
       <div style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
       <Btn  type='submit' label='Submit' color='secondary' onClick={clickEvent}/>
       </div>
     
    </form></div></div>)
}
export default UpdateTicket;
 