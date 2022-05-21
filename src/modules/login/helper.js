import * as yub from 'yup';

// default value form login 
export const defaultValueOptionLogin = {
  username: '',
  password: '',
}

export const formLoginSchema = yub.object().shape({
  username: yub.string().trim().required('Username is required'),
  password: yub.string().trim().required('Password is required').min(8, 'Password need more than 8 characters')
})