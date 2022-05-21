import { Box, Container, Grid } from "@material-ui/core";
import HeaderBlog from "components/headerBlog";
import MenuLeft from "components/menuLeft";
import React from "react";
import {DATA_CHAT_LIST} from 'fakeData';

import { themedStyle } from "./styles";

import ChatList from "components/chatList";
import BoxChat from "components/boxChat";
import MainFeedHome from "./MainFeedHome";

function HomePage(props) {

  const classes = themedStyle();

  return (
    <div className={classes.container}>
      <HeaderBlog />
      
      <Grid container spacing={3} >
        <Grid item xs={4} md={3}  className={classes.sectionDesktopMenuLeft}>
          <Container>
            <MenuLeft />
          </Container>
          
        </Grid>

        <Grid item xs={12} md={6} style={{paddingTop: 26, height:'100vh', overflow:'scroll', paddingBottom: 64}}>
          
          <MainFeedHome />
        </Grid>
        
        <Grid item md={3} style={{paddingTop: 26, height:'100vh', overflow:'scroll'}} className={classes.sectionDesktop}>
          <ChatList dataChatList={DATA_CHAT_LIST} />
        </Grid>
      </Grid>
      <div className={classes.sectionDesktop}>
        <BoxChat />
      </div>
      
    </div>
  );
}

export default HomePage;
