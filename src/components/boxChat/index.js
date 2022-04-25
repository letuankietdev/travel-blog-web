import { Paper } from '@material-ui/core';
import React from 'react';
import HeaderBoxChat from './headerBoxChat';

import themedStyle from './styles';

function BoxChat() {

  const classes = themedStyle();

  return (
    <Paper className={classes.containerBox}>
      <HeaderBoxChat />
    </Paper>
  )
}

export default BoxChat;