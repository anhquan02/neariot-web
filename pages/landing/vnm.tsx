import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
// import style from "../../styles/landingStyle";

const style = {
  general: {
    gridContainer: "h-1/2",
  },
  vnm: {
    vnmBox: " w-full h-full absolute top-0",
    textBox:
      "w-full h-full bg-no-repeat bg-cover bg-center bg-[url('/landing/vm-img.png')] rounded-lg",
    customGrid:
      "w-1/2  mb-20 pt-20 justify-center display-grid grid-cols-2 grid-rows-2 ",
    largeImage: "object-fill h-[534px] w-[534px]",
    title: {
      color: "#6e3cbc",
      fontSize: "5vw",
      fontFamily: "Arial",
      fontWeight: "bold",
    },
    subtitle: {
      color: "#372660",
      fontSize: "1.5vw",
      fontFamily: "RobotoSlab",
    },
    imageText: {
      fontSize: "2vw",
      fontFamily: "RobotoSlab",
    },
  },
  subtitle: {
    color: "#1b1a2d",
    fontSize: "2vw",
    fontFamily: "RobotoSlab",
  },
};

const VisonAndMission = () => {
  return (
    <div className="relative mb-20">
      <img
        src="/landing/vnm-bg.png"
        alt="..."
        className="w-full object-cover block "
      />
      <Box className={style.vnm.vnmBox}>
        <Grid container spacing={2} className={style.vnm.customGrid}>
          <Typography
            variant="h2"
            justifyContent="center"
            alignItems="center"
            sx={style.vnm.title}
          >
            VISION AND MISSION
          </Typography>
        </Grid>
        <Grid container className={style.general.gridContainer}>
          <Grid item xs={6} md={4}>
            <Grid
              container
              direction={"column"}
              justifyContent="flex-end"
              alignItems="flex-end"
              style={{ height: "100%" }}
            >
              <Grid
                item
                xs={6}
                className="flex items-center justify-center h-full "
              >
                <Typography
                  variant="h6"
                  className=" w-3/4"
                  display="flex"
                  align="left"
                  alignItems="center"
                  paddingLeft={10}
                  sx={style.vnm.subtitle}
                >
                  Starup can share infomation about their project to impress
                  investors
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                className="flex items-center justify-center h-full "
              >
                <Typography
                  variant="h6"
                  className=" w-3/4"
                  display="flex"
                  align="left"
                  alignItems="center"
                  paddingLeft={10}
                  sx={style.vnm.subtitle}
                >
                  Pledge to the project and get the benefit by buying an Offer
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box className={style.vnm.textBox}>
              <Grid container sx={{ height: "50%" }}>
                <Grid
                  item
                  xs={6}
                  className="flex items-center justify-center lg:px-12 px-8"
                >
                  <Typography
                    variant="h4"
                    className="text-[#e6e4ed] text-center "
                    sx={style.vnm.imageText}
                  >
                    Share the Idea
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  className="flex items-center justify-center lg:px-12 px-8"
                >
                  <Typography
                    variant="h4"
                    className="text-[#6e3cbc] text-center "
                    sx={style.vnm.imageText}
                  >
                    Easy to Analysis
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ height: "50%" }}>
                <Grid
                  item
                  xs={6}
                  className="flex items-center justify-center lg:px-12 px-8"
                >
                  <Typography
                    variant="h4"
                    className="text-[#6e3cbc] text-center "
                    sx={style.vnm.imageText}
                  >
                    Crownfunding
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  className="flex items-center justify-center lg:px-12 px-8"
                >
                  <Typography
                    variant="h4"
                    className="text-[#e6e4ed] text-center "
                    sx={style.vnm.imageText}
                  >
                    Build Measure Learn
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid
              container
              direction={"column"}
              justifyContent="flex-end"
              alignItems="flex-end"
              style={{ height: "100%" }}
            >
              <Grid
                item
                xs={6}
                className="flex items-center justify-center h-full "
              >
                <Typography
                  variant="h6"
                  className=" w-3/4"
                  display="flex"
                  align="left"
                  alignItems="center"
                  paddingRight={10}
                  sx={style.vnm.subtitle}
                >
                  Help investors easier to find the best fit project with
                  transparent data
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                className="flex items-center justify-center h-full "
              >
                <Typography
                  variant="h6"
                  className=" w-3/4"
                  display="flex"
                  align="left"
                  alignItems="center"
                  paddingRight={10}
                  sx={style.vnm.subtitle}
                >
                  Approach with the lean startup methodology with Test and
                  Voting features
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default VisonAndMission;
