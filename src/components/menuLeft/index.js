import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { pink, red } from "@material-ui/core/colors";
import { Favorite, PeopleAltTwoTone } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { RouteLeftMenu } from "routes/routes";

function MenuLeft({ items }) {
  return (
    <List>
      {RouteLeftMenu.map((item, index) => {
        return (
            <ListItem button key={index}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText style={{color:'#e4e6eb', fontSize:14, }}>
                {item.nameScreen}
                {item.nameScreen.includes("My") || item.nameScreen.includes("Favorite")  ? <Favorite style={{ color: pink[500], marginLeft:5, fontSize: 16}}/> : null}
              </ListItemText>
            </ListItem>
        );
      })}
    </List>
  );
}

export default MenuLeft;
