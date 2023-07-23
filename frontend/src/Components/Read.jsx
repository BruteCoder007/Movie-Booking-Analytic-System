import React from 'react';
import Header from './Header';
import {useNavigate} from 'react-router-dom';
import Btn from './btn';
function Read(){
    const navigate = useNavigate();
    const navigatetosearchuser=()=>{
        navigate('/Read/UserSearchform');
    };
    const navigatetoserachmovie=()=>{
        navigate('/Read/MovieSearchform')
    };
    const navigatetosearchticket=()=>{
        navigate('/Read/TicketSearchform')
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
            <td>Search User</td>
            <td><Btn  label='Search' onClick={navigatetosearchuser}/></td>
        </tr>
        <tr>
            <td>Search Movie</td>
            <td><Btn   label='Search' onClick={navigatetoserachmovie}/></td>
        </tr>
        <tr>
            <td>Search Ticket</td>
            <td><Btn label='Search' onClick={navigatetosearchticket}/></td>
        </tr>
    
    </table>
    </div></div>)
}
export default Read;