import { Box, Container, Grid } from "@material-ui/core";
import HeaderBlog from "components/headerBlog";
import MenuLeft from "components/menuLeft";
import StorySwiper from "components/storySwiper";
import React from "react";
import {DATA_CHAT_LIST, STORY_DATA} from 'fakeData';

import { themedStyle } from "./styles";
import CreateFeed from "components/createFeed";
import FeedBlock from "./feedBlog";

import {FEED_DATA} from "fakeData";
import ChatList from "components/chatList";
import BoxChat from "components/boxChat";


function HomePage(props) {

  const classes = themedStyle();

  return (
    <div className={classes.container}>
      <HeaderBlog />
      
      <Grid container spacing={3} >
        <Grid item xs={3}>
          <Container>
            <MenuLeft />
          </Container>
          
        </Grid>

        <Grid item xs={6} style={{paddingTop: 26, height:'100vh', overflow:'scroll', paddingBottom: 64}}>
          <Box  flexDirection="column" display="flex" height="100%">
            <StorySwiper data={STORY_DATA} />
            <CreateFeed />
            <FeedBlock data={FEED_DATA}/>
          </Box>
          
          
        </Grid>
        
        <Grid item xs={3} style={{paddingTop: 26, height:'100vh', overflow:'scroll'}}>
          <ChatList dataChatList={DATA_CHAT_LIST} />
        </Grid>
      </Grid>
      <BoxChat />
    </div>
  );
}

export default HomePage;
