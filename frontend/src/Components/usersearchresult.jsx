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
export default function UserSearchResult(){
    const[username,setusername]=React.useState('');
    const[users,setuser]=React.useState([]);
    const Datafetch=async ()=>{
    const url=window.location.href;
    setusername(url.split('?')[1]);
    const res=await axios.post("http://localhost:5000/Read/username",{username})
    console.log("Data Brought to Front End");
    console.log(res.data);
    setuser(res.data);
    };
    React.useEffect(()=>{
        Datafetch();
    },[username]);
    return(<div>
     <Header text='User Search Result' classname='header'/>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="right" style={{fontWeight:'900'}}>User Id</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Name</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Age</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Email</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>State</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.details}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{user.UserId}</TableCell>
              <TableCell align="right">{user.Name}</TableCell>
              <TableCell align="right">{user.Age}</TableCell>
              <TableCell align="right">{user.Email}</TableCell>
              <TableCell align="right">{user.Address.State}</TableCell>
              <TableCell align="right">{user.Address.City}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>)
}
   