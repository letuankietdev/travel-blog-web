import { Container, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  CardTravelSharp,
  CardTravelTwoTone,
  Home,
  Restaurant,
  VideoLibraryRounded,
} from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Message from "@material-ui/icons/Message";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import themedStyle from "./styles";

export default function HeaderBlog() {
  const classes = themedStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Message />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div style={{ zIndex: 9999, position: "relative" }}>
      <div className={classes.grow}>
        <AppBar position="static" style={{ background: "#000" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <CardTravelSharp />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Travel-Blog
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.sectionDesktop}>
              <Container>
                <Grid container spacing={3}>
                  <Grid item sx={3}>
                    <IconButton
                      className={classes.iconButton}
                      aria-label="Home"
                      color="inherit"
                    >
                      <Home fontSize="inherit" />
                    </IconButton>
                  </Grid>
                  <Grid item sx={3}>
                    <IconButton
                      className={classes.iconButton}
                      aria-label="Video"
                      color="inherit"
                    >
                      <VideoLibraryRounded fontSize="inherit" />
                    </IconButton>
                  </Grid>
                  <Grid item sx={3}>
                    <IconButton
                      className={classes.iconButton}
                      aria-label="Restaurant"
                      color="inherit"
                    >
                      <Restaurant fontSize="inherit" />
                    </IconButton>
                  </Grid>
                  <Grid item sx={3}>
                    <IconButton
                      className={classes.iconButton}
                      aria-label="Travel"
                      color="inherit"
                    >
                      <CardTravelTwoTone fontSize="inherit" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Container>
            </div>
            <div className={classes.grow} />
            <div
              className={classes.sectionDesktop}
            >
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Message />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    </div>
  );
}
