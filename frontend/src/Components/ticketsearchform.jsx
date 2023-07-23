import React from 'react';
import Input from './input';
import {useNavigate} from 'react-router-dom';
import './styles.css'; 
import Btn from "./btn";
import Header from './Header';
function TicketSearchform(){
    const navigate =useNavigate();
    const [ticketid,setticketid]=React.useState('')
    function eventChange(event){
       const id=event.target.value
       setticketid(id);
    }
    const navigatetoticketsearchresult=()=>{
      navigate('/Read/TicketSearchform/ticketsearchresult'+'?'+ticketid)
  };
    const clickEvent=(event)=>{
            event.preventDefault();
            navigatetoticketsearchresult();  

    }
    return(<div><Header text='Search Ticket' classname='header'/><div id='parent-div' style={{left:'35%'}}>
    <form id='child-div'  >
       <Input type='Number' label='Enter Ticket Id' name='ticketid' variant='outlined' value={ticketid} onChange={eventChange}/><br/>
       <div style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
       <Btn  type='submit' label='Submit' color='secondary' onClick={clickEvent}/>
       </div>
    </form></div></div>)
}
export default TicketSearchform;
 