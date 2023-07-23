import React from 'react';
import Header from './Header';
import {useNavigate} from 'react-router-dom';
import '../crudstyle.css'; 
// import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom';
import Btn from './btn';
function Create(){
    const navigate = useNavigate();
    const navigatetouserform=()=>{
        console.log("navigated to create");
        navigate('/Create/Userform');
    };
    const navigatetomovieform=()=>{
        navigate('/Create/Movieform')
    };
    const navigatetoticketform=()=>{
        navigate('/Create/Ticketform')
    };
    return (<div>
        <Header classname='header' text='Create Operations'/>
    <div id='parent-div' style={{width:'400px',height:'400px',backgroundColor:'lightyellow'}}>
<table cellSpacing='20px' style={{fontFamily:"Arial",fontSize:'5',position:'relative',top:'25%',left:'20%'}}>
        <tr>
        <th>Description</th>
        <th>Button</th>
        </tr>
        <tr>
            <td>Create User</td>
            <td><Btn  label='Create' onClick={navigatetouserform}/></td>
        </tr>
        <tr>
            <td>Add Movie</td>
            <td><Btn style={{paddingLeft:"15px",paddingRight:'45px'}}  label='Add' onClick={navigatetomovieform}/></td>
        </tr>
        <tr>
            <td>Ticket</td>
            <td><Btn style={{paddingLeft:"15px",paddingRight:'45px'}} label='Add' onClick={navigatetoticketform}/></td>
        </tr>
       
    </table>
    </div></div>)
}
export default Create;