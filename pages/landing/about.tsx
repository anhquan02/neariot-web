import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import style from "../../styles/landingStyle";
import Image from "next/image";

const About = () => {
  return (
    <Box className={style.about.aboutBox}>
      <Grid container spacing={12} className={style.general.gridContainer}>
        <Grid item xs={6} md={5}>
          <Image
            height={"550px"}
            width={"578px"}
            src="/landing/about-img.png"
          />
        </Grid>
        <Grid item xs={8} md={7}>
          <Typography
            variant="h2"
            sx={{
              color: "#6e3cbc",
              fontSize: "74.5px",
              fontFamily: "Arial",
              fontWeight: "bold",
            }}
          >
            ABOUT WEB
          </Typography>
          <br />
          <Typography
            variant="h6"
            sx={style.subtitle}
            className={style.about.subtitle}
          >
            Neariot campaigns make ideas into reality. It&#39;s where creators
            share new visions for creative work with the communities that will
            come together to fund them.
          </Typography>
          <br />
          <Typography
            variant="h6"
            sx={style.subtitle}
            className={style.about.subtitle}
          >
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
