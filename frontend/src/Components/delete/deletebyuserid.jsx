import React from 'react';
import Input from '../input';
import {useNavigate} from 'react-router-dom';
import '../../form.css'; 
import Btn from "../btn";
import Header from '../Header';
import axios from 'axios';
function DeleteUser(){
    const [userid,setuserid]=React.useState('');
    const [message,setmessage]=React.useState('');
    function eventChange(event){
      
       const  id=event.target.value
       setuserid(id);
    }
    
    const clickEvent=(event)=>{
            event.preventDefault();
            axios.post('http://localhost:5000/Delete/userid',{userid})
            .then(res=>{console.log('Delete successful');console.log(res.data);
            setmessage("Delete Succesful")
        })
            .catch(err=>console.log(err))

    }
    return(<div><Header text='Delete User' classname='header'/><div id='parent-div' style={{left:'35%'}}>
    <form id='child-div'  >
       <Input type='text' label='Enter User Id' name='userid' variant='outlined' value={userid} onChange={eventChange}/><br/>
       <div style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
       <Btn  type='submit' label='Submit' color='secondary' onClick={clickEvent}/>
       </div>
     
    </form></div><div style={{fontSize:'25px'}}>{message}</div></div>)
}
export default DeleteUser;
 