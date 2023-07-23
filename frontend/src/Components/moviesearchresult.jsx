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
export default function MovieSearchResult(){
    const[moviename,setmoviename]=React.useState('');
    const[movies,setmovie]=React.useState([]);
    const Datafetch=async ()=>{
    const url=window.location.href;
    setmoviename(url.split('?')[1]);
    const res=await axios.post("http://localhost:5000/Read/moviename",{moviename})
    console.log("Data Brought to Front End");
    console.log(res.data);
    setmovie(res.data);
    };
    React.useEffect(()=>{
        Datafetch();
    },[moviename]);
    return(<div>
     <Header text='Movie Search Result' classname='header'/>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell style={{fontWeight:'900'}}>Id</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Name</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Release Date</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Genre</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Budget</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Actor</TableCell>
            <TableCell align="right" style={{fontWeight:'900'}}>Actress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow
              key={movie.details}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='right'>{movie.MovieId}</TableCell>
              <TableCell align="right">{movie.Movie_name}</TableCell>
              <TableCell align="right">{movie.Release_date}</TableCell>
              <TableCell align="right">{movie.Genre}</TableCell>
              <TableCell align="right">{movie.Movie_budget}</TableCell>
              <TableCell align="right">{movie.Cast[0]}</TableCell>
              <TableCell align="right">{movie.Cast[1]}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>)
}
   