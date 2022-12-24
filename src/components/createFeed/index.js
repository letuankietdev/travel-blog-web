import React from 'react';
import ModalCreateFeed from './modalCreateFeed';

import styledThemed from './styles';

function CreateFeed ({
  isBlog, 
  
}){

  const classes = styledThemed();

  return (
    <div className={classes.container}>
      
      <ModalCreateFeed />
    </div>
  )

}

export default CreateFeed;