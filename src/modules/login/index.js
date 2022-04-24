import { Grid, Paper } from "@material-ui/core";
import React from "react";
import LoginForm from "./loginForm";
import SlideLoginPage from "./slideLoginPage";
import Particles from "react-tsparticles";
import themedStyle from "./styles";
import { loadFull } from "tsparticles";

function LoginScreen() {
  const classes = themedStyle();
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <div className={classes.container}>
        <Particles
          className={classes.particles}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen:{
              enable: true,
              zIndex: 1, 
            },
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#242526",
              },
              links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Grid container spacing={3}>
          <Grid item xs={5} className={classes.content}>
            <div>
              <LoginForm />
            </div>
          </Grid>
          <Grid item xs={7} className={classes.content}>
            <SlideLoginPage />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default LoginScreen;
