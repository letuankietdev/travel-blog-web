import {makeStyles} from '@material-ui/core';


const styledThemed = makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginTop: 24,
  },
  paperCreate: {
    width:'100%',
    padding: 16,
    backgroundColor:'#18191a'
  },
  viewInput: {
    display:'flex',
    alignItems:'center',
  },
  viewEnterInput: {
    marginLeft: 16,
    padding: 16,
    backgroundColor: '#b0b3b8',
    borderRadius: 32,
    width:'100%',
    color:'#fff',
    opacity:0.7,
  },
  headerModalCreateNewFeed: {
    height: 30,
    width: '100%',
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
  },
  textCreatePost: {
    color:"#ffffff",
    textAlign:'center',
    fontSize: 18,
    fontWeight: "700",
    width:"100%",
  },
  bodyModalCreatePost: {
    padding: 16,
  },
  row:{
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 20,
  },
  viewDropFile: {
    maxHeight: 200,
    marginTop:20,
    border: '1px solid #ccc',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  viewFile: {
    display:'flex',
    flexWrap: "wrap",
    height: 200,
    overflowY: 'hidden',
  },
  file:{
    width: '100%',
    height: 100,
  }
}))

export default styledThemed;