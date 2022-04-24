import { Avatar, Paper } from '@material-ui/core';
import React from 'react';

import styledThemed from './styles';

function CreateFeed ({
  isBlog, 
  
}){

  const classes = styledThemed();

  return (
    <div className={classes.container}>
      <Paper className={classes.paperCreate}>
        <div className={classes.viewInput}>
          <Avatar />
          <div className={classes.viewEnterInput}>
            How do you feel today?
          </div>
        </div>
        
      </Paper>
    </div>
  )

}

export default CreateFeed;