import * as React from 'react';
import Button from '../../node_modules/@material-ui/core/Button';

export default function Btn(props) {
  
  return (
   <div>
      <Button style={props.style} type={props.type} variant="contained" color={props.color} onClick={props.onClick}>
      {props.label}
      </Button>
      </div>
  );
}

  