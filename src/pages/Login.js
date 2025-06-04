import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

const useStyles = makeStyles({
    loginCardContainer:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:'10%',
        position:'relative',
    },
    loginCard:{
        width:460,
        padding:'15px 30px 15px 30px',
        backgroundColor:'#082340',
        color:'#FFFFFF',
        fontFamily:'Roboto',
        borderRadius:8,
        '&>h3':{
            textAlign:'center',
            fontWeight:'500',
            fontSize:30,
            margin:0,
            marginBottom:10
        },
        '&>div':{
            marginBottom: 10
        },
        '&>p':{
            fontSize:14
        }
    },
    inputDiv:{
        display:'flex',
        flexDirection:'column',
        gap:10,
        '&>input':{
            padding:5
        }
    },
    signupText:{
        color:'#FF7A45',
        borderBottom:'1px solid #FF7A45',
    },
    signupTextDiv:{
       textAlign:'center',
       fontSize:14
    }
  });


const LoginPage = ( ) =>{

    const classes = useStyles();
    return (
      <div className={classes.loginCardContainer}>
           <div className={classes.loginCard}>
            <h3>Log In</h3>
             <div>
                <p>Please Select Your Role</p>
                <div>
                <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                >
                    <FormControlLabel 
                    value="end" 
                    control={<Radio sx={{
                            color: 'white',
                            '&.Mui-checked': {
                                color: 'blue'
                            },
                            '& .MuiSvgIcon-root': {
                                fontSize: 20,
                              },
                     }}/>} 
                     label="Administrator" 
                     InputLabelProps={{
                        style: {
                            fontSize: 14,
                        }
                   }}
                     />
                     
                    <FormControlLabel 
                    value="end1" 
                    control={<Radio  sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'blue'
                        },
                        '& .MuiSvgIcon-root': {
                            fontSize: 20,
                        },
                 }}/>} 
                    label="Employee" />
                </RadioGroup>
                </div>
             </div>
             {/* <div className={classes.inputDiv}>
              <Label text='Username'/>
              <Input />
             </div>
             <div className={classes.inputDiv}>
             <Label text='Password'/>
             <Input />
             </div>
             <Button text='Continue' backgroundColor='#FF7A45'/>
             <div className={classes.signupTextDiv}>
                <span className={classes.signupText}>Forget Password</span>
             </div>
             <div className={classes.signupTextDiv}>
                <span>Do you have an account?<span className={classes.signupText}>Sign Up Here.</span></span>
             </div> */}
            </div>
      </div>
     
    )
};

export default LoginPage;