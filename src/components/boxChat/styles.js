import {makeStyles} from '@material-ui/core';

const themedStyle = makeStyles((theme) => ({
  containerBox: {
    width: 320,
    position:'absolute',
    bottom: 0,
    height: 350,
    background:'#242526',
    right: 26,
    zIndex: 999,

  },
  headerBoxChatContainer: {
    width:'100%',
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    background:'#242526',
    height: 60,
    alignItems:'center',
    marginTop:5,
    display: 'flex',
    justifyContent:'space-between'
  },
  contentHeader: {
    display: 'flex',
    alignItems:'center',
    width: '100%',
    marginTop:10,
  },
  textHeaderBox: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 15,
    cursor: 'pointer'
  }
}));

export default themedStyle;