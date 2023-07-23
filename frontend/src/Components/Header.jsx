import React from 'react';
export default function Header(props)
{
    return(<div>
        <h1 className={props.classname} style={props.style}>
            {props.text}
        </h1>
    </div>)

}