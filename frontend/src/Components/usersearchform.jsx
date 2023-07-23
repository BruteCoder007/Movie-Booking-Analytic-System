import React from 'react';
import Input from './input';
import {useNavigate} from 'react-router-dom';
import '../form.css'; 
import Btn from "./btn";
import Header from './Header';
function UserSearchform(){
    const navigate =useNavigate();
    const [username,setusername]=React.useState('')
    function eventChange(event){
      
       const name=event.target.value
       setusername(name);
    }
    const navigatetousersearchresult=()=>{
      navigate('/Read/UserSearchform/usersearchresult'+'?'+username)
  };
    const clickEvent=(event)=>{
            event.preventDefault();
            navigatetousersearchresult();  

    }
    return(<div><Header text='Search User' classname='header'/><div id='parent-div' style={{left:'35%'}}>
    <form id='child-div'  >
       <Input type='text' label='Enter User Name' name='username' variant='outlined' value={username} onChange={eventChange}/><br/>
       <div style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
       <Btn  type='submit' label='Submit' color='secondary' onClick={clickEvent}/>
       </div>
     
    </form></div></div>)
}
export default UserSearchform;
 