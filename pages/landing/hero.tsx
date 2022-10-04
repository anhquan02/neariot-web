import React from "react";
import { Box } from "@mui/system";
import { Button, Container, Grid, Typography } from "@mui/material";
import style from "./style";

const Hero = () => {
  return (
    <Box className={style.hero.heroBox}>
      <Container className="pt-40">
        <Typography variant="h1" className={style.hero.title}>
          Ideas are easy
          <br />
          Implementation is hard
        </Typography>
        <Typography variant="h4" className={style.hero.subtitle}>
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
            borderColor: "transparent",
          }}
        >
          <Typography variant="h6" className={style.hero.buttonText}>
            Start a Project
          </Typography>
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
