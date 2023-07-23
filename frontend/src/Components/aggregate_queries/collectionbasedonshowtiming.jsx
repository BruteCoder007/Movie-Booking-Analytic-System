import React from 'react';
import axios from 'axios';
import Table from '../../../node_modules/@material-ui/core/Table';
import TableBody from '../../../node_modules/@material-ui/core/TableBody';
import TableCell from '../../../node_modules/@material-ui/core/TableCell';
import TableContainer from '../../../node_modules/@material-ui/core/TableContainer';
import TableHead from '../../../node_modules/@material-ui/core/TableHead';
import TableRow from '../../../node_modules/@material-ui/core/TableRow';
import Paper from '../../../node_modules/@material-ui/core/Paper';
import '../styles.css'; 
import Header from '../Header';
export default function Collectionbasedonshowtiming(){
    const[results,setresult]=React.useState([]);
    const Datafetch=async ()=>{
    const res=await axios.post("http://localhost:5000/Aggregate/totalcollectionbasedonshowtiming")
    console.log("Data Brought to Front End");
    console.log(res.data);
    setresult(res.data);
    };
    React.useEffect(()=>{
        Datafetch();
    },[]);
    return(<div>
     <Header text='Total Collection based on show timing' classname='header'/>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="right" style={{fontWeight:'900'}}>Show Timing</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Total Collection</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow
              key={results._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='right'>{result._id}</TableCell>
              <TableCell align="right">{result.TotalCollection}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>)
}
   