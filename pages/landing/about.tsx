import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const style = {
  general: {
    gridContainer: "",
  },
  about: {
    aboutBox: "mr-auto pl-10 mt-[92px] w-full absolute top-0",
    largeImage: "object-fill h-50 w-50",
    title: "text-[#6e3cbc] text-[74.5px] font-[Arial] font-black",
    subtitle: "mt-auto align-left w-[80%]",
  },
  subtitle: {
    color: "#1b1a2d",
    fontSize: "1.5vw",
    fontFamily: "RobotoSlab",
  },
};

const About = () => {
  return (
    <div className="relative pb-20">
      <img
        src="/landing/about-bg.png"
        alt="..."
        className="w-full object-cover block "
      />
      <Box className={style.about.aboutBox}>
        <Grid container spacing={12} className={style.general.gridContainer}>
          <Grid item xs={6} md={5}>
            <div className="w-full h-full">
              {/* <Image
                layout="fill"
                objectFit="cover"
                src="/landing/about-img.png"
              /> */}
              <img
                src="/landing/about-img.png"
                alt="..."
                className="w-[80%] object-cover block "
              />
            </div>
          </Grid>
          <Grid item xs={8} md={7}>
            <Typography
              variant="h2"
              sx={{
                color: "#6e3cbc",
                fontSize: "5vw",
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
    </div>
  );
};

export default About;
