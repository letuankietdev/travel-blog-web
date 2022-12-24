import React, { memo, useCallback, useRef } from 'react';
import ModalBasic from 'components/modalBasic';
import styledThemed from './styles';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { defaultValuePost } from './helper';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller } from 'react-hook-form';
import DropzoneFile from 'components/dropzoneFile';
import { Camera, Photo } from '@material-ui/icons';
import { Avatar, Button, Paper } from '@material-ui/core';
import { ROLE_POST } from 'constant/rolePost';

const WhiteBorderTextField = styled(TextField)`
  & label {
    color: #BBBBBB;
  }
  & .MuiOutlinedInput-root {
    &fieldset {
      border-color: #BBBBBB;
    }
  }
  & label.Mui-focused {
    color: #BBBBBB;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #BBBBBB;
    }
    color: #cccccc;
    font-size: 16px;
  }
  
`;

function ModalCreateFeed() {
  const refModalBasic = useRef();
  const classes = styledThemed()

  const formPost = useForm({
    defaultValues: defaultValuePost,
    mode: 'onChange',
  })
  const { formState, control, handleSubmit, watch, setValue, getValues, reset } = formPost;
  const watchAllFiled = watch();

  const handleOpenModal = useCallback(() => {
    reset({
      capStatus:'',
      file: null,
      privacy:'PUBLIC'
    })
    refModalBasic?.current?.handleControlModal?.(true)
  })

  const handleCloseModal = useCallback(() => {
    
    refModalBasic?.current?.handleControlModal?.(false)
  }, [])

  const handlePost = useCallback((values) => {
    console.log('values', values);
  }, [])

  const handleOnErrorSubmit = useCallback((errors) => {
    console.log('error', errors)
  }, [])

  function renderHeaderModal() {
    return (
      <div className={classes.headerModalCreateNewFeed}>
        <text className={classes.textCreatePost}>Create Post</text>
        <IconButton onClick={handleCloseModal}>
          <Close style={{ fontSize: 28, color: "#fff" }} />
        </IconButton>
      </div>
    )
  }

  function renderDropUI(getRootProps, getInputProps) {

    return (
      <>
        <div className={classes.viewDropFile} {...getRootProps()}>
          <input {...getInputProps()} />
          {
            watchAllFiled.file?.length > 0 ? (
              <div className={classes.viewFile}>
                {watchAllFiled.file.map((_file, index) => {
                  return (
                    <div>
                      <img
                        style={{ width: '100%', height: '100%'}}
                        src={ _file }
                        onLoad={() => { URL.revokeObjectURL(_file) }}
                        alt="file-uploads-post"
                      />
                    </div>
                  )
                })}
              </div>
            ) : <div>
            <IconButton>
              <Photo color='primary' fontSize='large' />
            </IconButton>
          </div>
          }
          
        </div>

      </>

    )
  }

  function renderBodyModal() {
    return (
      <div className={classes.bodyModalCreatePost}>
        
        <form form={formPost} onSubmit={handleSubmit(handlePost, handleOnErrorSubmit)}>
          <div className={classes.row} style={{justifyContent:'space-between', marginBottom: 20}}>
            {
              ROLE_POST.map((itemRole, indexRole ) => {
                return (
                  <Button onClick={()=>{setValue('privacy',itemRole)}} variant="contained" color={ watchAllFiled.privacy === itemRole ? "secondary" : "default"}>
                    <text>{itemRole}</text>
                  </Button>
                )
              })
            }
          </div>
          <Controller
            control={control}
            name={"capStatus"}
            render={({
              field: {
                onChange, onBlur, value, ref
              }
            }) => {
              return (
                <WhiteBorderTextField
                  ref={ref}
                  style={{
                    width: '100%',
                  }}
                  id="outlined-basic"
                  label="How are you feeling today?"
                  variant="outlined"
                  multiline
                  rows={3}
                  error={formState.errors.capStatus}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  
                />
              )
            }}
          />
          <DropzoneFile
            multiline={true}
            handleDropFile={(acceptedFile) => {
              const valueFile = getValues().file || [];
              setValue('file',valueFile.concat(acceptedFile.map((file) => {
                return URL.createObjectURL(file)
              })))
            }}
            renderDropFile={renderDropUI}
          />
          <div className={classes.row}>
            <Button type='submit' variant="contained" color="secondary">
              <div>POST</div>
            </Button>
          </div>
          
        </form>
      </div>
    )
  }

  return (
    <>
      <Paper className={classes.paperCreate}>
        <div className={classes.viewInput}>
          <Avatar />
          <div onClick={handleOpenModal} className={classes.viewEnterInput}>
            How do you feel today?
          </div>
        </div>

      </Paper>
      <ModalBasic
        ref={refModalBasic}
        ariaLabelledby={"Modal create new feed"}
        ariaDescribedby={"Modal create new feed"}
        renderHeaderModal={renderHeaderModal}
        renderBodyModal={renderBodyModal}
        disableOnCloseOutSide={true}
      />
    </>
  )
}

export default memo(ModalCreateFeed)