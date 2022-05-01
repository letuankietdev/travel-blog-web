import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import { Box, Icon, IconButton } from "@material-ui/core";
import themedStyle from "./styles";
import { Image, Send, SendTwoTone } from "@material-ui/icons";
import { green, red } from "@material-ui/core/colors";
import { handleSendMessage } from "./handler";

function InputBoxChat({ user, sendMessage }) {
  const classes = themedStyle();
  const [message, setMessage] = useState({
    content: "",
    image: null,
    video: null,
  });

  return (
    <Box className={classes.containerInputBoxChat}>
      {/* <TextField /> */}
      <TextField
        placeholder="Enter your message..."
        value={message.content}
        id="inputBoxChat"
        variant="outlined"
        className={classes.inputBoxChat}
        onChange={(e) => {
          setMessage({
            ...message,
            content: e.target.value
          })
        }}
      />
      <IconButton>
        <Image style={{ color: green[500] }} />
      </IconButton>
      <IconButton 
        onClick={() => {
          handleSendMessage(message, user, (massageSend) => {
            sendMessage(massageSend);
            setMessage({
              content: "",
              image: null,
              video: null,
            })
          });
        }}
      >
        <SendTwoTone style={{ color: red[500] }} />
      </IconButton>
    </Box>
  );
}

export default InputBoxChat;
