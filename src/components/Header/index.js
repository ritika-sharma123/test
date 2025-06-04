import React from 'react';
import logo from '../../images/logo.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  imageDiv:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh-100px)',
  },
  logo:{
    width:480,
    height:95
  }
})

const Header =()=>{

    const classes = useStyles();

    return(
        <div className={classes.imageDiv}>
          <img className={classes.logo} src={logo} alt='Logo'></img>
        </div>
    )
}

export default Header;