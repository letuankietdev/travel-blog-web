import { Paper } from '@material-ui/core';
import React, { useRef } from 'react';
import ChatList from './chatList';
import HeaderBoxChat from './headerBoxChat';
import InputBoxChat from './inputBoxchat';

import themedStyle from './styles';

function BoxChat() {

  const classes = themedStyle();
  const chatListRef = useRef();

  return (
    <Paper className={classes.containerBox}>
      <HeaderBoxChat />
      <ChatList ref={chatListRef} />
      <InputBoxChat 
        sendMessage={(messageSend) => {
          console.log('chatListRef', chatListRef);
          chatListRef?.current?.handleChangeDataList?.(messageSend)
        }}
      />
    </Paper>
  )
}

export default BoxChat;