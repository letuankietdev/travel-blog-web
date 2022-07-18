import React, { memo, useRef } from 'react';
import ModalBasic from 'components/modalBasic';

function ModalCreateFeed () {
  const refModalBasic = useRef();


  return (
    <ModalBasic 
      ref={refModalBasic}
      ariaLabelledby={"Modal create new feed"}
      ariaDescribedby={"Modal create new feed"}
      
    />
  )
}

export default memo(ModalCreateFeed)