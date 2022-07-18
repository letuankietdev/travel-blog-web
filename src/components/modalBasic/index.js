import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import { useStyles } from './styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ModalBasic = forwardRef(({
  ariaLabelledby,
  ariaDescribedby,
  renderHeaderModal,
  renderBodyModal,
  renderFooterModal,
}, ref) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(true);

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
        Modal 
      </div>
    )
  }

  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={ariaLabelledby || "simple-modal-title"}
        aria-describedby={ariaDescribedby || "simple-modal-description"}
      >
        {renderBody()}
        {/* {renderHeaderModal?.()}
        {renderBodyModal?.()}
        {renderFooterModal?.()} */}
      </Modal>
    </div>
  )
})

export default ModalBasic;


