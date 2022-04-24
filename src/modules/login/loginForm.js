import { Button, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import themedStyle from './styles';

function LoginForm () {
  const classes = themedStyle();
  const navigation = useNavigate();

  function handleLogin () {
    navigation('/home');
  }

  return (
    <Paper className={classes.paperLogin}>
      <div className={classes.textWelcome}>Welcome To Travel-blog</div>
      <div className={classes.textMessageEnter}>Welcome back! Please enter your detail</div>
      <TextField id="username" label="username" variant="outlined" className={classes.inputLogin} />
      <TextField id="password" label="password" variant="outlined" className={classes.inputLogin} type="password" />
      
      <div className={classes.divButtonLogin}>
        <Button onClick={handleLogin} variant="contained" color="secondary" className={classes.buttonLogin}>
          <div>Sign in</div>
        </Button>


      </div>
      
      <div className={classes.divRegister}>
        <div className={classes.textQuestion}>Dont have an account?</div>
        <div className={classes.buttonRegister}>Sign up for free</div>
      </div>
    </Paper>
  )
}

export default LoginForm;