import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import { useStyles } from './styles';

const ModalBasic = forwardRef(({
  ariaLabelledby,
  ariaDescribedby,
  renderHeaderModal,
  renderBodyModal,
  renderFooterModal,
  disableOnCloseOutSide
}, ref) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  useImperativeHandle(ref, () => ({
    handleControlModal(isOpen) {
      setOpen(isOpen)
    }
  }));

  
  function renderBody (){
    return (
      <div  className={classes.paper}>
        {renderHeaderModal ?  renderHeaderModal() : null}
        {renderBodyModal ? renderBodyModal() : null} 
        {renderFooterModal ? renderFooterModal() : null}
      </div>
    )
  }
  
  return (
    <div>
      <Modal
        open={open}
        onClose={disableOnCloseOutSide ? ()=> {} : handleClose}
        aria-labelledby={ariaLabelledby || "simple-modal-title"}
        aria-describedby={ariaDescribedby || "simple-modal-description"}
        style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
        
      >
        {renderBody()}  
      </Modal>
    </div>
  )
})

export default ModalBasic;


