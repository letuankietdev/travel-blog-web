import { Avatar, Container, List, ListItem } from '@material-ui/core';
import React from 'react';
import themedStyle from './styles';

function ChatList({
  dataChatList = [],
}){
  const classes = themedStyle();
  return (
    <Container>
      <List>
        {dataChatList?.map((item,  index) => {
          return (
            <ListItem button className={classes.containerItemUserChat}>
              <div style={{display: 'grid'}}>
                <Avatar src={item.avatar} />
                <div className={classes.online}/>
              </div>
              <div className={classes.nameText}>{item.name}</div>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}

export default ChatList;