import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import style from "./style";

const About = () => {
  return (
    <Box className={style.about.aboutBox}>
      <Grid container spacing={12} className={style.general.gridContainer}>
        <Grid item xs={6} md={5}>
          <img
            src="/landing/about-img.png"
            // alt="My Team"
            // className={style.about.largeImage}
          />
        </Grid>
        <Grid item xs={8} md={7}>
          <Typography variant="h2" className={style.about.title}>
            ABOUT WEB
          </Typography>
          <br />
          <Typography variant="h6" className={style.about.subtitle}>
            Neariot campaigns make ideas into reality. It’s where creators share
            new visions for creative work with the communities that will come
            together to fund them.
          </Typography>
          <br />
          <Typography variant="h6" className={style.about.subtitle}>
            No matter what, creators always control how the work comes
            together—no 100-page grant applications, no donors demanding you
            modify your message, no last-minute edits from investors. When
            backers chip in funding and help spread the word, they too become
            part of these independent works
          </Typography>
          <br />
          <br />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
