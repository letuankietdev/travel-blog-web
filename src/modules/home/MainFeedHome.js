import React, { memo } from 'react';
import { Box } from "@material-ui/core";
import StorySwiper from "components/storySwiper";
import CreateFeed from "components/createFeed";
import FeedBlock from "./feedBlog";
import {STORY_DATA} from 'fakeData';
import {FEED_DATA} from "fakeData";

function MainFeedHome(props) {

  return (
    <Box flexDirection="column" display="flex" height="100%">
      <StorySwiper data={STORY_DATA} />
      <CreateFeed />
      <FeedBlock data={FEED_DATA} />
    </Box>
  )
}

export default memo(MainFeedHome);