import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
// import style from "../../styles/landingStyle";

const style = {
  general: {
      gridContainer: "",
  },
  vnm: {
      vnmBox: "mr-auto ml-10 mb-20 w-full",
      textBox: "mb-20 w-[534px] h-[534px] bg-[url('/landing/vm-img.png')]",
      customGrid: "w-1/2 mr-20 mb-20 pt-40 justify-center display-grid grid-cols-2 grid-rows-2 gap-10",
      largeImage: "object-fill h-[534px] w-[534px]",
      title: {
          color: "#6e3cbc",
          fontSize: "74.5px",
          fontFamily: "Arial",
          fontWeight: "bold",
      },
      subtitle: {
          color: "#372660",
          fontSize: "25.5px",
          fontFamily: "RobotoSlab",
      },
      imageText: {
          fontSize: "29.5px",
          fontFamily: "RobotoSlab",
      }
  },
  subtitle: {
      color: "#1b1a2d",
      fontSize: "25.5px",
      fontFamily: "RobotoSlab",
  }
};

const VisonAndMission = () => {
  return (
    <Box className={style.vnm.vnmBox}>
      <Grid container spacing={2} className={style.vnm.customGrid}>
        <Typography
          variant="h2"
          justifyContent="center"
          alignItems="center"
          paddingRight={10}
          sx={style.vnm.title}
        >
          VISION AND MISSION
        </Typography>
      </Grid>
      <Grid container spacing={2} className={style.general.gridContainer}>
        <Grid item xs={6} md={4}>
          <Grid container direction={"column"}>
            <Grid item>
              <Typography
                variant="h6"
                className="py-[80px] w-3/4"
                display="flex"
                align="left"
                alignItems="center"
                paddingLeft={20}
                sx={style.vnm.subtitle}
              >
                Starup can share infomation about their project to impress
                investors
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                className="py-[80px] w-3/4"
                display="flex"
                align="left"
                alignItems="center"
                paddingLeft={20}
                sx={style.vnm.subtitle}
              >
                Pledge to the project and get the benefit by buying an Offer
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box className={style.vnm.textBox}>
            <Grid container spacing={6} rowSpacing={1} paddingLeft={7}>
              <Grid item xs={4} className="py-70 px-50 ml-10">
                <Typography
                  variant="h4"
                  className="text-[#e6e4ed] py-20"
                  align="center"
                  alignItems="center"
                  display="flex"
                  sx={style.vnm.imageText}
                >
                  Share the Idea
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="h4"
                  className="text-[#6e3cbc] py-[80px]"
                  display="flex"
                  align="center"
                  alignItems="center"
                  paddingLeft={13}
                  sx={style.vnm.imageText}
                >
                  Easy to Analysis
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  variant="h4"
                  className="text-[#6e3cbc] py-[130px]"
                  display="flex"
                  align="center"
                  alignItems="center"
                  marginTop={1}
                  paddingLeft={6}
                  sx={style.vnm.imageText}
                >
                  Crownfunding
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="h4"
                  className="text-[#e6e4ed] py-[100px]"
                  display="flex"
                  align="center"
                  alignItems="center"
                  paddingLeft={21}
                  sx={style.vnm.imageText}
                >
                  Build Measure Learn
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Grid container direction={"column"}>
            <Grid item>
              <Typography
                variant="h6"
                className="py-[80px] w-3/4"
                display="flex"
                align="left"
                alignItems="center"
                paddingLeft={20}
                sx={style.vnm.subtitle}
              >
                Help investors easier to find the best fit project with
                transparent data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                className="py-[80px] w-3/4"
                display="flex"
                align="left"
                alignItems="center"
                paddingLeft={20}
                sx={style.vnm.subtitle}
              >
                Approach with the lean startup methodology with Test and Voting
                features
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VisonAndMission;
