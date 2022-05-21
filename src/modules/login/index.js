import { Grid } from "@material-ui/core";
import React from "react";
import LoginForm from "./loginForm";
import SlideLoginPage from "./slideLoginPage";
import Particles from "react-tsparticles";
import themedStyle from "./styles";
import AnimationParticles from "./animationParticles";


function LoginScreen() {
  const classes = themedStyle();
  
  return (
    <>
      <div className={classes.container}>
        <AnimationParticles />
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}  className={classes.content}>
            <div>
              <LoginForm />
            </div>
          </Grid>
          <Grid item xs={1} md={7} className={`${classes.content} ${classes.slideLoginPageSection}`}>
            <SlideLoginPage />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default LoginScreen;
