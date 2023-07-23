import React from 'react';
import axios from 'axios';
import Table from '../../node_modules/@material-ui/core/Table';
import TableBody from '../../node_modules/@material-ui/core/TableBody';
import TableCell from '../../node_modules/@material-ui/core/TableCell';
import TableContainer from '../../node_modules/@material-ui/core/TableContainer';
import TableHead from '../../node_modules/@material-ui/core/TableHead';
import TableRow from '../../node_modules/@material-ui/core/TableRow';
import Paper from '../../node_modules/@material-ui/core/Paper';
import './styles.css'; 
import Header from './Header';
export default function TicketSearchResult(){
    const[ticketid,setticketid]=React.useState('');
    const[tickets,setticket]=React.useState([]);
    const Datafetch=async ()=>{
    const url=window.location.href;
    setticketid(url.split('?')[1]);
    const res=await axios.post("http://localhost:5000/Read/ticketid",{ticketid})
    console.log("Data Brought to Front End");
    console.log(res.data);
    setticket(res.data);
    };
    React.useEffect(()=>{
        Datafetch();
    },[ticketid]);
    return(<div>
     <Header text='Ticket Search Result' classname='header'/>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="right" style={{fontWeight:'900'}}>User Id</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Ticket Id</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Movie Id</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Theatre Id</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>No of Seats</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Show Timing</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Total Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow
              key={ticket.details}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='right'>{ticket.UserId}</TableCell>
              <TableCell align="right">{ticket.TicketId}</TableCell>
              <TableCell align="right">{ticket.MovieId}</TableCell>
              <TableCell align="right">{ticket.TheatreId}</TableCell>
              <TableCell align="right">{ticket.No_of_tickets}</TableCell>
              <TableCell align="right">{ticket.Show_timing}</TableCell>
              <TableCell align="right">{ticket.Cost}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>)
}
   