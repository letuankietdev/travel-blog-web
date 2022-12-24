import { colors, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 450,
    backgroundColor: '#18191a',
    borderRadius: 4,
  }
}))