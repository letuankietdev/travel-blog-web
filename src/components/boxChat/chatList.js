import { FAKE_DATA_ROOM_CHAT } from "fakeData";
import { cloneDeep } from 'lodash'
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import ItemMessage from "./itemMessage";
import themedStyle from "./styles";

function ChatList({...props},ref) {
  const classes = themedStyle();

  const [dataChatList, setDataChatList] = useState([]);

  useImperativeHandle(ref, ()=> ({
    handleChangeDataList(message, isDeleteAll, isDeleteForMe,){
      if(message){
        const dataChatListNew = cloneDeep(dataChatList);
        dataChatListNew.push(message);
        console.log('dataChatListNew', dataChatListNew);
        setDataChatList(dataChatListNew)
      }
    }
  }))

  useEffect(() => {
    setDataChatList(FAKE_DATA_ROOM_CHAT);
  }, []);
  return (
    <div className={classes.containerListChat}>
      <div className={classes.contentList}>
      {dataChatList?.map((item, index) => {
        return <ItemMessage message={item} key={item.id + "RoomChat"} />;
      })}
      </div>
    </div>
  );
}

export default forwardRef(ChatList);
