import { Avatar, Fade, Paper } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import { Comment, Favorite } from "@material-ui/icons";
import React from "react";
import styledThemed from "./styles";

function Feed({ feed, index }) {
  const classes = styledThemed();
  console.log("feed", feed);
  return (
    <Paper className={classes.containerFeed}>
      <div className={classes.headerFeed}>
        <div>
          <Avatar src={feed.user.avatar} />
          <div className={classes.online} />
        </div>
        <div className={classes.info}>
          <div className={classes.infoName}>{feed.user.name}</div>

          <div className={classes.infoTime}>{"4h"}</div>
        </div>
      </div>

      <div className={classes.contentText}>{feed.content.statusContent}</div>
      {feed.content.image && (
        <Fade in={true} style={{ width: "100%", marginTop: 16 }}>
          <img src={feed.content.image} alt={feed.user.id} />
        </Fade>
      )}

      <div className={classes.viewLove}>
        <Favorite style={{ color: pink[500], fontSize: 18 }} />
        <div className={classes.totalLove}>{feed.content.totalLove}</div>
      </div>

      <div className={classes.buttonFeedView}>
        <div className={classes.buttonFeed}>
          <Favorite
            style={{
              color: feed.content.liked ? pink[500] : "white",
              fontSize: 24,
            }}
          />
          <div className={classes.textLove}>Love</div>
        </div>
        <div className={classes.buttonFeed}>
          <Comment style={{ color: "white", fontSize: 24, marginLeft: 15 }} />
          <div className={classes.textLove}>Comment</div>
        </div>
      </div>
    </Paper>
  );
}

export default Feed;
