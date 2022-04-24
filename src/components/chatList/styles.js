import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const themedStyle = makeStyles((theme) => ({
  containerItemUserChat: {
    display: 'flex',
    width:'100%',
  },
  online: {
    width: 12,
    height:12,
    position:'relative',
    zIndex: 999,
    borderRadius: 999,
    backgroundColor: green[500],
    bottom: 10,
    right: -25,
  },
  nameText:{
    color: "#e4e6eb",
    marginBottom: 15,
    marginLeft: 15,
  }
}))

export default themedStyle;