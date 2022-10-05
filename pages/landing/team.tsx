import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import style from "./style";

const Team = () => {
  return (
    <Box className={style.team.teamBox}>
      <Grid container direction={"column"} marginLeft={25} paddingTop={10}>
        <Grid container spacing={16}>
          <Grid item>
            <Box className={style.team.avatarBox}>
              <Typography
                variant="h6"
                className="text-[#1b1a2d]"
                align="center"
                alignItems="center"
                display="flex"
                marginLeft={7}
                paddingTop={28}
                sx={style.team.memberName}
              >
                Thuong Nguyen
              </Typography>
              <Typography
                variant="body1"
                className="text-[#1b1a2d]"
                align="center"
                alignItems="center"
                display="flex"
                marginLeft={8}
                sx={style.team.memberPosition}
              >
                Chief Executive Officer
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box className={style.team.avatarBox}>
              <Box className={style.team.avatarBox}>
                <Typography
                  variant="h6"
                  className="text-[#1b1a2d]"
                  align="center"
                  alignItems="center"
                  display="flex"
                  marginLeft={10}
                  paddingTop={28}
                  sx={style.team.memberName}
                >
                  Hieu Pham
                </Typography>
                <Typography
                  variant="body1"
                  className="text-[#1b1a2d]"
                  align="center"
                  alignItems="center"
                  display="flex"
                  marginLeft={8}
                  sx={style.team.memberPosition}
                >
                  Chief Technology Officer
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box className={style.team.avatarBox}>
              <Box className={style.team.avatarBox}>
                <Typography
                  variant="h6"
                  className="text-[#1b1a2d]"
                  align="center"
                  alignItems="center"
                  display="flex"
                  marginLeft={11}
                  paddingTop={28}
                  sx={style.team.memberName}
                >
                  Quan Le
                </Typography>
                <Typography
                  variant="body1"
                  className="text-[#1b1a2d]"
                  align="center"
                  alignItems="center"
                  display="flex"
                  marginLeft={9}
                  sx={style.team.memberPosition}
                >
                  Full-stack Developer
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box className={style.team.avatarBox}>
              <Box className={style.team.avatarBox}>
                <Typography
                  variant="h6"
                  className="text-[#1b1a2d]"
                  align="center"
                  alignItems="center"
                  display="flex"
                  marginLeft={10}
                  paddingTop={28}
                  sx={style.team.memberName}
                >
                  Minh Hoang
                </Typography>
                <Typography
                  variant="body1"
                  className="text-[#1b1a2d]"
                  align="center"
                  alignItems="center"
                  display="flex"
                  marginLeft={13}
                  sx={style.team.memberPosition}
                >
                  Designer
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container className="mt-20">
          <Grid item>
            <Typography
              variant="h2"
              className="text-[#6e3cbc]"
              align="center"
              alignItems="center"
              display="flex"
              marginLeft={50}
            >
              Team Work Company
            </Typography>
            <Typography
              variant="h6"
              className="text-[#1b1a2d] w-1/2"
              align="center"
              alignItems="center"
              display="flex"
              marginLeft={41}
            >
              Teamwork has the incredible power to increase productivity, job
              satisfaction, and even each person's individual performance.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Team;
