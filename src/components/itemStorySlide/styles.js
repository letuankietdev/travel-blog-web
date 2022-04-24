import {makeStyles} from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import { Opacity } from '@material-ui/icons';

const themedStyle = makeStyles((theme) => ({
  container: {
    height: 300,
    borderRadius: 16,
    backgroundColor:'#000',
    width: '100%',
  },
  imageSlide: {
    height:'100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: 16, 
  },
  avatarView: {
    position: 'absolute',
    left: 10,
    top: 16,
  },
  viewInfo: {
    width:'100%',
    position:'absolute',
    bottom: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor:'#000',
    opacity:0.7,
  },
  textName: {
    color: yellow[500],
    fontSize: 16,
    fontWeight: 600,
    padding: 5,
  },
  textContent: {
    color:'#fff',
    fontSize: 12,
    marginTop: 4,
    fontWeight: 600,
    padding: 5,
  }
}))

export default themedStyle;