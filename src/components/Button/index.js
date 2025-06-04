import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    buttonDiv:{
       textAlign:'center !important'
    },
  buttonCss:{
    width:100,
    height:40,
    border:'1px solid transparent',
    borderRadius:2,
  }
});

const Button = ({backgroundColor , text}) =>{

    const classes = useStyles();

    return(
        <div className={classes.buttonDiv}>
          <button style={{backgroundColor:backgroundColor , color:'white' , fontSize:14}} className={classes.buttonCss}>
            {text}
          </button>
        </div>
    )
}

export default Button;