import { Paper } from '@material-ui/core';
import Feed from 'components/feed';
import { FEED_DATA } from 'fakeData';
import React from 'react';
import styledThemed from './styleFeedBlog';

function FeedBlock ({
  data = [],
}) {
  console.log('data', data);
  const classes = styledThemed()

  return (
    <div className={classes.containerFeed}>
      {data.map((item, index) => {
        return (
          <Feed feed={item}/>
        )        
      })}
    </div>
  )
}

export default FeedBlock;