import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React from 'react';

const themedStyle = makeStyles((theme) => ({
  containerStatusOnline: {
    width:12,
    height: 12,
    position:'relative',
    borderRadius: 999,
    zIndex: 111,
    top: -10,
    right: -25
  },
  online: {
    backgroundColor: green[500]
  },
  offline: {
    backgroundColor: "gray"
  }
}))

function StatusOnline ({isOnline}) {
  const classes = themedStyle();
  return (
    <div  className={`${classes.containerStatusOnline} ${isOnline ? classes.online : classes.offline }`}/>
  )
}

export default StatusOnline;