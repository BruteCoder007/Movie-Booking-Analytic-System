import React from 'react';
import Input from './input';
import {useNavigate} from 'react-router-dom';
import '../form.css'; 
import Btn from "./btn";
import Header from './Header';
function MovieSearchform(){
    const navigate =useNavigate();
    const [moviename,setmoviesearch]=React.useState('')
    function eventChange(event){
      
       const name=event.target.value
       setmoviesearch(name);
    }
    const navigatetomoviesearchresult=()=>{
      navigate('/Read/MovieSearchform/moviesearchresult'+'?'+moviename)
  };
    const clickEvent=(event)=>{
            event.preventDefault();
            navigatetomoviesearchresult();  

    }
    return(<div><Header text='Search Movie' classname='header'/><div id='parent-div' style={{left:'35%'}}>
    <form id='child-div'  >
       <Input type='text' label='Enter Movie Name' name='moviename' variant='outlined' value={moviename} onChange={eventChange}/><br/>
       <div style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
       <Btn  type='submit' label='Submit' color='secondary' onClick={clickEvent}/>
       </div>
     
    </form></div></div>)
}
export default MovieSearchform;
 