import { makeStyles } from '@mui/styles';
import React from 'react';
import './index.css';


const Input =({type='text' ,customClass}) =>{

    const useStyles = makeStyles({
        ...customClass
     });
    
    const classes = useStyles();

    return(
        <>
          <input className={`input ${classes.customClass}`} type={type}></input>
        </>
    )
}

export default Input;