import { Avatar, Container, IconButton, Paper } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import StatusOnline from 'components/statusOnline';
import React from 'react';
import themedStyle from './styles';

function HeaderBoxChat ({
  partner,
  roomId,
}) {

  const classes = themedStyle();

  return (
    <Paper className={classes.headerBoxChatContainer}>
      <Container className={classes.contentHeader}>
        <div>
          <Avatar />
          <StatusOnline  isOnline={partner?.isOnline}/>
        </div>
        <div className={classes.textHeaderBox}>Le Tuan Kiet</div>
      </Container>
      <IconButton>
        <Close style={{fontSize: 28, color: "#fff"}} />
      </IconButton>
    </Paper>
  )
}

export default HeaderBoxChat;

