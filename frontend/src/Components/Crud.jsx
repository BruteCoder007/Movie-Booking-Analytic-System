import React from "react";
import {useNavigate} from 'react-router-dom';
import Btn from "./btn";
import Header from './Header';
import '../crudstyle.css'; 
function Crud(){
 
    const navigate = useNavigate();
    const navigatetocreate=()=>{
        console.log("navigated to create");
        navigate('/Create');
    };
    const navigatetoread=()=>{
        navigate('/Read')
    };
    const navigatetoupdate=()=>{
        navigate('/Update')
    };
    const navigatetodelete=()=>{
        navigate('/Delete')
    };
    const navigatetoaggregate=()=>{
        navigate('/Aggregate')
    };
    return( 
        <div>
        <Header  classname='header' text='Movie Booking Analytic System'/>
    <div id='parent-div' style={{backgroundColor:'lightyellow',height:'400px',width:'400px',left:'38%'}}>
    <Header style={{backgroundColor:'grey'}} classname='inner-header' text='CRUD Operations'/>
<div id='child-div' >
            <Btn label='Create' color='secondary' onClick={navigatetocreate}/><br/>
            <Btn label='Read ' style={{paddingRight:'35px'}} color='secondary' onClick={navigatetoread}/><br/>
            <Btn label='Update' color='secondary' onClick={navigatetoupdate}/><br/>
            <Btn label='Delete' color='secondary' onClick={navigatetodelete}/><br/> 
            <Btn label='Aggreg' color='secondary' onClick={navigatetoaggregate}/><br/> 

           
    </div></div></div>)
   
}
export default Crud;
