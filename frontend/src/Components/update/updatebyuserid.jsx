import React from 'react';
import Input from '../input';
import {useNavigate} from 'react-router-dom';
import '../../form.css'; 
import Btn from "../btn";
import Header from '../Header';
function UpdateUser(){
    const navigate =useNavigate();
    const [userid,setuserid]=React.useState('')
    function eventChange(event){
      
       const  id=event.target.value
       setuserid(id);
    }
    const navigatetouserupdateform=()=>{
      navigate('/Update/Updateuserbyid/updateuserform'+'?'+userid)
  };
    const clickEvent=(event)=>{
            event.preventDefault();
            navigatetouserupdateform();  

    }
    return(<div><Header text='Update User' classname='header'/><div id='parent-div' style={{left:'35%'}}>
    <form id='child-div'  >
       <Input type='text' label='Enter User Id' name='userid' variant='outlined' value={userid} onChange={eventChange}/><br/>
       <div style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
       <Btn  type='submit' label='Submit' color='secondary' onClick={clickEvent}/>
       </div>
     
    </form></div></div>)
}
export default UpdateUser;
 