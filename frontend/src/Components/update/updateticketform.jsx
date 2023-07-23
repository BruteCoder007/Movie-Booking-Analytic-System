import React from 'react';
import Input from '../input';
import '../../form.css'; 
import Btn from "../btn";
import Header from '../Header';
import axios from 'axios';
function UpdateTicketform(){
    const [ticketdetails,setticketdetails]=React.useState({searchid:'',userid:'',ticketid:'',movieid:'',theatreid:'',nooftickets:'',showtiming:'',ticketstatus:'',cost:'',message:''})
    function eventChange(event){
        const {value,name}=event.target;
        setticketdetails(prevValue=>{
                return {
                    ...prevValue,
                    [name]:value
                };
        })
    }
    const clickEvent=(event)=>{
        console.log(ticketdetails);
        event.preventDefault();
        const url=window.location.href;
        let val=url.split('?')[1];
       setticketdetails(prevValue=>{return{
        ...prevValue,
       ['searchid']:val
       };
    })      
        axios.post('http://localhost:5000/Update/updatebyticketid',ticketdetails)
        .then(res=>{console.log(res.data);
            setticketdetails(prevValue=>{return{
                ...prevValue,
               ['message']:'update successful'
               };
            }) ;})
        .catch(err=>console.log(err))
    }
    return(<div><Header text='Updated Ticket Details' classname='header'/><div id='parent-div' style={{left:'35%'}}><form id='child-div'>
       <Input type='number' label='User Id' name='userid' variant='filled' value={ticketdetails.userid} onChange={eventChange}/><br/>
       <Input type='number' label='Ticket Id' name='ticketid' variant='filled' value={ticketdetails.ticketid} onChange={eventChange}/><br/>
      <Input type='number' label='Movie Id' name='movieid' variant='filled' value={ticketdetails.movieid} onChange={eventChange}/><br/>
       <Input type='number' label='Theatre Id' name='theatreid' variant='filled' value={ticketdetails.theatreid} onChange={eventChange}/><br/>
       <Input type='number' label='No Of Tickets' name='nooftickets' variant='filled' value={ticketdetails.nooftickets} onChange={eventChange}/><br/>
       <Input type='number' label='Show Timing' name='showtiming' variant='filled' value={ticketdetails.showtiming} onChange={eventChange}/><br/>
       <Input type='text' label='Ticket Status' name='ticketstatus' variant='filled' value={ticketdetails.ticketstatus} onChange={eventChange}/><br/>
       <Input type='number' label='Cost' name='cost' variant='filled' value={ticketdetails.cost} onChange={eventChange}/><br/>

       <div style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
       <Btn  type='submit' label='Update' color='secondary' onClick={clickEvent}/>
       </div>
    </form></div><div style={{fontSize:'25px'}}>{ticketdetails.message}</div></div>)

}
export default UpdateTicketform;