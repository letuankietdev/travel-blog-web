import { makeStyles } from '@material-ui/core';

export const themedStyle = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    backgroundColor:'#0d0d0e',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionDesktopMenuLeft: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  }
}))