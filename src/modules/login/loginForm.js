import { Button, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import themedStyle from './styles';
import { defaultValueOptionLogin, formLoginSchema } from './helper';
import InputForm from 'components/InputForm';
import { useState } from 'react';
import { handleRequestLogin } from './handler';
import { useDispatch } from 'react-redux';

function LoginForm () {
  const classes = themedStyle();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false)

  const formLogin = useForm({
    defaultValues: defaultValueOptionLogin,
    mode: 'onChange',
    resolver: yupResolver(formLoginSchema)
  });

  const handleLogin = async (values) => {
    console.log('value', values);
    setLoading(true);
    handleRequestLogin(values, navigation, () => {
      setLoading(false)
    }, dispatch);
  }

  const handleOnErrorSubmit = (errors) => {
    console.log('error', errors);
  }
  

  const {formState, control, handleSubmit, watch} = formLogin;
  return (
    <Paper className={classes.paperLogin}>
      <div className={classes.textWelcome}>Welcome To Travel-blog</div>
      <div className={classes.textMessageEnter}>Welcome back! Please enter your detail</div>
      <form form={formLogin} onSubmit={handleSubmit(handleLogin, handleOnErrorSubmit)}>
        <InputForm 
          control={control}
          id='username'
          name='username'
          variant='outlined'
          classNameInput={classes.inputLogin}
          error={formState?.errors?.username?.message}
        />
        <InputForm 
          control={control}
          id='password'
          name='password'
          variant='outlined'
          classNameInput={classes.inputLogin}
          type="password"
          error={formState?.errors?.password?.message}
        />
        <div className={classes.divButtonLogin}>
          <Button disabled={isLoading} type='submit' variant="contained" color="secondary" className={classes.buttonLogin}>
            <div>Sign in</div>
          </Button>
        </div>
      </form>
      {/* <TextField id="username" label="username" variant="outlined" className={classes.inputLogin} />
      <TextField id="password" label="password" variant="outlined" className={classes.inputLogin} type="password" />
      <div className={classes.divButtonLogin}>
        <Button onClick={handleLogin} variant="contained" color="secondary" className={classes.buttonLogin}>
          <div>Sign in</div>
        </Button>
      </div> */}
      <div className={classes.divRegister}>
        <div className={classes.textQuestion}>Dont have an account?</div>
        <div className={classes.buttonRegister}>Sign up for free</div>
      </div>
    </Paper>
  )
}

export default LoginForm;