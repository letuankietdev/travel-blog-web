import { makeStyles } from '@material-ui/core';

const themedStyle = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    height: '100vh',
    backgroundColor: '#242526', 
  },
  content: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    height: '100vh',
    width:'100%',
    zIndex: 9999,

  },
  paperLogin: {
    padding: theme.spacing(2),
    width: '100%',
    backgroundColor: '#ffffff',
    zIndex:9999,
  },
  inputLogin: {
    width:'100%',
    marginTop: 16,
  },
  divButtonLogin: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginTop: 16,
  },
  buttonLogin: {
    width: '100%',
    height: 48,
    backgroundColor: '#000000',
  },
  divRegister: {
    marginTop: 24,
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  textQuestion: {
    fontSize: 16,
    color: "#828282",
  },
  buttonRegister: {
    marginLeft: 5,
    fontWeight:'600',
    fontSize: 16,
  },
  textWelcome: {
    fontWeight: '600',
    fontSize: 28,
  },
  textMessageEnter: {
    fontSize: 14,
    color: "#828282",
    marginTop: 12,
    marginBottom: 18,
  },
  slideItem:{
    width: '100%',
    height: '100vh',
  },
  imageSlide :{
    width: '100%',
    height: '100vh',
    display: 'block',
    objectFit: 'cover',
    transition: 'width 2s',
  },
  slideFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerSlide: {
    height: 100,
    padding: 24,
    backgroundColor:'#000',
    opacity: 0.4,
  },
  titleSlide:{
    color: '#ffffff',
    fontWeight: '900',
    fontSize: 24,
  },
  textContent:{
    color: '#ffffff',
    fontSize: 18,
    marginTop: 20
  },
  ratingView: {
    marginTop: 8,
  },
  particles: {
    position: 'fixed',
  }
}))


export default themedStyle;