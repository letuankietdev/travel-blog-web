export function handleSendMessage(message, user,sendMessage = ()=> {}) {
  
  if(message.content.trim().length > 0 || message.image !== null || message.video !== null) {
    const messageSend =  {
      isPartner: false,
      // usrId: user.id,
      ...message
    }

    sendMessage(messageSend);
  }
  
};

