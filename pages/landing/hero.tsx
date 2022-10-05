import React from "react";
import { Box } from "@mui/system";
import { Button, Container, Grid, Typography } from "@mui/material";
import style from "./style";

const Hero = () => {
  return (
    <Box className={style.hero.heroBox}>
      <Container className="pt-40">
        <Typography
          variant="h1"
          sx={{
            color: "#6e3cbc",
            fontSize: "74.5px",
            fontFamily: "Arial",
          }}
        >
          Ideas are easy
          <br />
          Implementation is hard
        </Typography>
        <Typography
          variant="h4"
          paddingTop={2}
          sx={style.subtitle}
        >
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
            backgroundColor: "#5825f4",
            borderRadius: "50px",
            borderColor: "transparent",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#e2daf2",
              fontSize: "29.5px",
              fontFamily: "Arial",
            }}
          >
            Explore Now
          </Typography>
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
