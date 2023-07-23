import React from 'react';
import Input from './input';
import '../form.css'; 
import Btn from "./btn";
import Header from './Header';
import axios from 'axios';
function Movieform(){
    const [moviedetails,setmoviedetails]=React.useState({movieid:'',moviename:'',releasedate:'',actor:'',actress:'',productioncompany:'',cost:'',genre:'',moviebudget:'',boxoffice:''})
    function eventChange(event){
        const {value,name}=event.target;
        setmoviedetails(prevValue=>{
                return {
                    ...prevValue,
                    [name]:value
                };
        })
    }
    const clickEvent=(event)=>{
       console.log(moviedetails);
        event.preventDefault();
        axios.post('http://localhost:5000/Create/Movie',moviedetails)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    return(<div><Header text='Movie Details' classname='header'/><div id='parent-div' style={{left:'35%'}}><form id='child-div' action='/Movie' method='post'>
       <Input type='number' label='Movie  Id' name='movieid' variant='standard' value={moviedetails.movieid} onChange={eventChange}/><br/>
       <Input type='text' label=' Movie Name' name='moviename' variant='standard' value={moviedetails.moviename} onChange={eventChange}/><br/>
       <Input type='date' label='' name='releasedate' variant='standard' value={moviedetails.releasedate} onChange={eventChange}/><br/>
       <Input type='number' label='Actor' name='cast1' variant='standard' value={moviedetails.cast1} onChange={eventChange}/><br/>
       <Input type='number' label='Actress' name='cast2' variant='standard' value={moviedetails.cast2} onChange={eventChange}/><br/>
       <Input type='number' label='Production Company' name='productioncompany' value={moviedetails.productioncompany} variant='standard' onChange={eventChange}/><br/>
       <Input type='text' label='Genre' name='genre' variant='standard' value={moviedetails.genre} onChange={eventChange}/><br/>
      <Input type='number' label='Movie Budget' name='moviebudget' value={moviedetails.moviebudget} variant='standard' onChange={eventChange}/><br/>
       <Input type='number' label='Box Office' name='boxoffice' value={moviedetails.boxoffice} variant='standard' onChange={eventChange}/><br/>
       <div style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
       <Btn  type='submit' label='Submit' onClick={clickEvent}  color='secondary'/>
       </div>
    </form></div></div>)

}
export default Movieform;