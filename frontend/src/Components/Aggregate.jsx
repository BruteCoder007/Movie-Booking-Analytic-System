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



export default function Aggregate(props) {
  const navigate=useNavigate();
  const navigatetobookingbyeveryuser=()=>{
    navigate('/Aggregate/bookingbyeveryuser');
  };
  const navigatetocollectionineverytheatre=()=>{
    navigate('/Aggregate/collectionineverytheatre');
  };
  const navigatetousersfromeverystate=()=>{
    navigate('/Aggregate/usersfromeverystate');
  };
  const navigatetocollectionofmoviesofparticularcast=()=>{
    navigate('/Aggregate/collectionofparticularcastmovies');
  };
  const navigatetocollectionofeverymovies=()=>{
    navigate('/Aggregate/collectionofeverymovies');
  };
  const navigatetocollectionbasedongenre=()=>{
    navigate('/Aggregate/collectionbasedongenres');
  };
  const navigatetocollectionbasedonshowtiming=()=>{
    navigate('/Aggregate/collectionbasedonshowtiming');
  };
  function createData(description, color,functions) {
    return { description, color ,functions};
  }
  const rows = [
    createData('Total Booking by every user', 'secondary',navigatetobookingbyeveryuser),
    createData('Total Collection in every Theatre','secondary',navigatetocollectionineverytheatre),
    // createData('Total Users from every state', 'secondary',navigatetousersfromeverystate),
    // createData('Total Amount earned by movies of a particular cast', 'secondary',navigatetocollectionofmoviesofparticularcast),
    createData('Total Collection of every movies', 'secondary',navigatetocollectionofeverymovies),
    createData('Total Collection based on genre', 'secondary',navigatetocollectionbasedongenre),
    createData('Total Collection based on show timing','secondary',navigatetocollectionbasedonshowtiming)
  //   createData('Aggregate', 'secondary'),
  //   createData('Aggregate', 'secondary'),
  //   createData('Aggregate', 'secondary'),
  ];
  return (
    <div>
         <Header text='Aggregate Queries' classname='header'/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell style={{fontWeight:'900'}}>Functions</TableCell>
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
              <TableCell align="right"><Btn color={row.color} label='Aggregate' onClick={row.functions}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
