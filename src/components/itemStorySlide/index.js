import { Avatar, Box, Fade, Paper } from '@material-ui/core';
import React from 'react';
import themedStyle from './styles';

function ItemStorySlide ({item}) {
  const classes = themedStyle();

  const content = item.content?.length > 90 ? item.content.slice(0, 90) + " ..." : item.content;  

  return (
    <Paper className={classes.container}>
      <Avatar 
        src={item.avatar}
        className={classes.avatarView}
      />
      <Fade in={true} >
        <img src={item.image} className={classes.imageSlide}/>
      </Fade>
      
      
      <div className={classes.viewInfo}>
        <div className={classes.textName}>{item.name}</div>
        <div className={classes.textContent}>{content}</div>
      </div>
    </Paper>
  )
}

export default ItemStorySlide;