import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const themedStyle = makeStyles((theme) => ({
  containerBox: {
    width: 340,
    position: "absolute",
    bottom: 0,
    height: 450,
    background: "#242526",
    right: 26,
    zIndex: 999,
  },
  headerBoxChatContainer: {
    width: "100%",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    background: "#242526",
    height: 60,
    alignItems: "center",
    marginTop: 5,
    display: "flex",
    justifyContent: "space-between",
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  textHeaderBox: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 15,
    cursor: "pointer",
  },

  containerInputBoxChat: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },
  inputBoxChat: {
    backgroundColor: "#ddd",
    borderRadius: 24,
    marginLeft: 8,
    width: "100%",
    height: 40,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: "0px",
        height: 40,
      },
      "&.Mui-focused fieldset": {
        borderWidth: "0px",
        height: 40,
      },
      "& .MuiOutlinedInput-input": {
        padding:"10px 14px",
      }
    },
  },
  containerListChat: {
    overflow: 'scroll',
    overflowX: 'hidden',
    height: 290,
    padding: 16,
    marginBottom: 15,
    
  },

  itemChat: {
    maxWidth:'100%',
    marginBottom: 16,
    display: 'flex',
    flexDirection: "column",
  },

  contentMessage: {
    maxWidth:'85%',
    width: 'auto',
    padding: 8,
    borderRadius: 8,
    color: "#fff",
  },
  leftMessage: {
    backgroundColor: "#8a8d91",
  },
  rightMessage: {
    backgroundColor: blue[500],
  },
  imageMessage:{
    maxWidth:"85%",
    objectFit: 'cover',
    marginTop: 8,
    borderRadius: 4,
  },
  contentList: {
    display: 'block',
  }
}));

export default themedStyle;
