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
}))

export default styledThemed;