import * as React from 'react';
import Card from '../../node_modules/@material-ui/core/Card';
import CardContent from '../../node_modules/@material-ui/core/CardContent';
import CardMedia from '../../node_modules/@material-ui/core/CardMedia';
import Typography from '../../node_modules/@material-ui/core/Typography';
import pic from '../assets/movie.avif'
var output='The Result of the Aggregation is 1000'
export default function MediaCard(props) {
  return (<div style={{paddingTop:'200px',paddingLeft:'200px'}}>
    <Card  style={{width:500}}sx={{ maxWidth: 100 }}>
      <CardMedia
        component="img"
        height="140"
        image={pic}
        alt="Movie image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Result
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {output}
        </Typography>
      </CardContent>
   
    </Card>
    </div>
  );
}
