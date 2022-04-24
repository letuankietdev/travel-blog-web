import { makeStyles } from '@material-ui/core';
import { green, pink } from '@material-ui/core/colors';

const styledThemed = makeStyles({
  containerFeed: {
    backgroundColor:'#18191a',
    marginTop:16,
    padding: 16,
    height:'auto'
  },
  headerFeed:{
    display: 'flex',
  },
  online: {
    width:12,
    height:12,
    borderRadius: 9999,
    backgroundColor: green[500],
    position:'relative',
    top:-10,
    right: -30
  },
  info:{
    marginLeft: 16,
  },
  infoTime:{
    marginTop:4,
    color:'#bbb',
    fontWeight: 300,
    fontSize: 12,
  },
  infoName:{
    color:'#ddd',
    fontWeight: 500,
    fontSize: 14,
  },
  imageFeed: {
    width: '100%',
  },
  contentText: {
    color: '#e4e6eb',
    fontSize: 14,
  },
  
  viewLove:{
    display: 'flex',
    alignItems:'center',
    marginTop: 16,
    width: '100%',
    borderBottomStyle: 'solid',
    paddingBottom:5,
    borderBottomColor: "#aaa",
    borderBottomWidth: "thin",
  },

  buttonFeedView:{
    marginTop: 16,
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonFeed: {
    width: '100%',
    display:'grid',
    justifyContent:'center',
    alignItems:'center',
  },
  totalLove:{
    color: "#e4e6eb",
    fontSize: 12,
    marginLeft:5,
    fontWeight: 300,
  },
  textLove: {
    color: "#ccc",
    fontSize:12,
    fontWeight: 300,
    marginTop: 4,
  }
});

export default styledThemed;