import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import style from "./style";

const VisonAndMission = () => {
  return (
    <Box className={style.vnm.vnmBox}>
      <Grid container spacing={2} className={style.vnm.customGrid}>
        <Typography
          variant="h2"
          className={style.vnm.title}
          justifyContent="center"
          alignItems="center"
          paddingRight={10}
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
                className="text-[#372660] font-[RobotoSlab] py-[80px] w-3/4"
                display="flex"
                align="left"
                alignItems="center"
                paddingLeft={20}
              >
                Starup can share infomation about their project to impress
                investors
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                className="text-[#372660] font-[RobotoSlab] py-[80px] w-3/4"
                display="flex"
                align="left"
                alignItems="center"
                paddingLeft={20}
              >
                Pledge to the project and get the benefit by buying an Offer
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box className={style.vnm.textBox}>
            <Grid
              container
              spacing={6}
              rowSpacing={1}
              paddingLeft={7}
            >
              <Grid item xs={4} className="py-70 px-50 ml-10">
                <Typography
                  variant="h4"
                  className="text-[#e6e4ed] font-[RobotoSlab] py-20"
                  align="center"
                  alignItems="center"
                  display="flex"
                >
                  Share the Idea
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="h4"
                  className="text-[#6e3cbc] font-[RobotoSlab] py-[80px]"
                  display="flex"
                  align="center"
                  alignItems="center"
                  paddingLeft={13}
                >
                  Easy to Analysis
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  variant="h4"
                  className="text-[#6e3cbc] font-[RobotoSlab] py-[120px]"
                  display="flex"
                  align="center"
                  alignItems="center"
                  marginTop={1}
                  paddingLeft={4}
                >
                  Crownfunding
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="h4"
                  className="text-[#e6e4ed] font-[RobotoSlab] py-[80px]"
                  display="flex"
                  align="center"
                  alignItems="center"
                  paddingLeft={20}
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
                className="text-[#372660] font-[RobotoSlab] py-[80px] w-3/4"
                display="flex"
                align="left"
                alignItems="center"
                paddingLeft={20}
              >
                Help investors easier to find the best fit project with
                transparent data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                className="text-[#372660] font-[RobotoSlab] py-[80px] w-3/4"
                display="flex"
                align="left"
                alignItems="center"
                paddingLeft={20}
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
