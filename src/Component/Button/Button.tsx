import React from 'react';
import { Button as Butt } from '@material-ui/core';
import './Button.css';

interface Props{
    lable: string;
    handleOnClick: ()=>void;
}
function Button(props:Props) {
    return (
        <div>
            <Butt variant="contained" color="primary" onClick = {props.handleOnClick}>{props.lable}</Butt>
        </div>

    )
}

export default Button