import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';

const InputForm = ({
  id,
  control,
  name, 
  renderCustomInput,
  variant = 'outlined',
  classNameInput,
  type,
  error,
}) => {

  return (
    <Controller 
      control={control}
      name={name}
      render={({
        field: {
          onChange, onBlur, value, ref
        } 
      }) => {
        if(renderCustomInput){
          return renderCustomInput();
        }
        return (
          <TextField
            ref={ref}
            id={id} 
            label={name} 
            variant={variant} 
            className={classNameInput} 
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            type={type}
            helperText={error}
          />
        )
      }}
    />
  )
}

InputForm.propTypes = {
  control: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  renderCustomInput: PropTypes.func,
  onChange: PropTypes.func,
  onblur: PropTypes.func,
  onfocus: PropTypes.func,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default InputForm;