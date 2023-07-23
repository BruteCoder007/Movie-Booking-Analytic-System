import React from 'react';
import TextField from '../../node_modules/@material-ui/core/TextField';
function Input(props){
    return (      <TextField id="outlined-basic" type={props.type} label={props.label}  name={props.name} onChange={props.onChange} variant={props.variant} />// standard , outlined, filled
    )
}
export default Input;