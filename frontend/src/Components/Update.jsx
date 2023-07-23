import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Btn from './btn.jsx';
import Table from '../../node_modules/@material-ui/core/Table';
import TableBody from '../../node_modules/@material-ui/core/TableBody';
import TableCell from '../../node_modules/@material-ui/core/TableCell';
import TableContainer from '../../node_modules/@material-ui/core/TableContainer';
import TableHead from '../../node_modules/@material-ui/core/TableHead';
import TableRow from '../../node_modules/@material-ui/core/TableRow';
import Paper from '../../node_modules/@material-ui/core/Paper';
import Header from './Header';
import './styles.css'; 



export default function Update(props) {
  const navigate=useNavigate();
  const navigatetoupdateuser=()=>{
    navigate('/Update/updateuserbyid');
  };
  const navigatetoupdateticket=()=>{
    navigate('/Update/updateticketbyid');
  };

  function createData(description, color,functions) {
    return { description, color ,functions};
  }
  const rows = [
    createData('Update User', 'secondary',navigatetoupdateuser),
    createData('Update Ticket','secondary',navigatetoupdateticket),

  //   createData('Aggregate','secondary'),
  //   createData('Aggregate', 'secondary'),
  //   createData('Aggregate', 'secondary'),
  //   createData('Aggregate', 'secondary'),
  ];
  return (
    <div>
         <Header text='Update ' classname='header'/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell style={{fontWeight:'900'}}>Update</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Button</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.description}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="right"><Btn color={row.color} label='Update' onClick={row.functions}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
