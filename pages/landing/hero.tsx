import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import style from "./style";

const Hero = () => {
  return (
    <Box className={style.hero.heroBox}>
      <Grid container spacing={12} className={style.general.gridContainer}>
        <Grid item xs={6} md={8}>
          <Typography variant="h3" className={style.hero.title}>
            Ideas are easy Implementation is hard
          </Typography>
          <Typography variant="h6" className={style.hero.subtitle}>
            Don’t worry about failure you only have to be right one
          </Typography>
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "226px",
              height: "54px",
              textTransform: "none",
              backgroundImage: `url(${"/landing/button-bg.png"})`,
              backgroundColor: "transparent",
              borderRadius: "50px",
              borderColor: "red",
            }}
          >
            <Typography variant="h6" className={style.hero.buttonText}>
              Start a Project
            </Typography>
          </Button>
        </Grid>
        {/* <Grid item xs={12} md={5}> */}
        {/* <img src={myteam} alt="My Team" className={classes.largeImage} /> */}
        {/* </Grid> */}
      </Grid>
    </Box>
  );
};

export default Hero;
