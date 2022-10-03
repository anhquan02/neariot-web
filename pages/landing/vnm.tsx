import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import style from "./style";

const VisonAndMission = () => {
  return (
    <Box className={style.vnm.vnmBox}>
      <Grid container spacing={2} className={style.vnm.customGrid}>
        <Typography
          variant="h3"
          className={style.vnm.title}
          justifyContent="center"
          alignItems="center"
        >
          VISION AND MISSION
        </Typography>
      </Grid>
      <Grid container spacing={2} className={style.general.gridContainer}>
        <Grid item xs={6} md={4}></Grid>
        <Grid item xs={6} md={4}>
          <Box className={style.vnm.textBox}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
            >
              <Grid item xs={4}>
                <Typography
                  variant="h6"
                  className="text-[#e6e4ed] font-[RobotoSlab] text-[29.5px] content-center"
                  justifyContent="center"
                  alignItems="center"
                >
                  Share the idea
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="h6"
                  className="text-[#e6e4ed] font-[RobotoSlab] text-[29.5px] content-center"
                  justifyContent="center"
                  alignItems="center"
                >
                  Share the idea
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="h6"
                  className="text-[#e6e4ed] font-[RobotoSlab] text-[29.5px] content-center"
                  justifyContent="center"
                  alignItems="center"
                >
                  Share the idea
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="h6"
                  className="text-[#e6e4ed] font-[RobotoSlab] text-[29.5px] content-center"
                  justifyContent="center"
                  alignItems="center"
                >
                  Share the idea
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default VisonAndMission;
