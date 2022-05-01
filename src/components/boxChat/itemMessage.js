import { Paper } from '@material-ui/core';
import React from 'react';
import themedStyle from './styles';

function ItemMessage ({
  message,
  key,
}) {
  const classes = themedStyle();
  console.log('item',message);
  return (
    <div key={key} className={classes.itemChat} style={{alignItems: message.isPartner ? 'flex-start' : 'flex-end' }}>
      <Paper className={`${classes.contentMessage} ${message.isPartner ? classes.leftMessage : classes.rightMessage}`}>{message.content}</Paper>
      <img src={message.image} style={{float: message.isPartner ? 'left' : 'right' }} alt={message.id} className={classes.imageMessage}/> 
      
    </div>

  )
}

export default ItemMessage;