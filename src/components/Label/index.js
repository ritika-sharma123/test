import { makeStyles } from '@mui/styles';
import React from 'react';
const useStyles = makeStyles({
    label:{
        fontSize:'14px'
    }
 });

const Label =({text='text' }) =>{
    const classes = useStyles();

    return(
        <>
          <label className={classes.label}>{text}</label>
        </>
    )
}

export default Label;