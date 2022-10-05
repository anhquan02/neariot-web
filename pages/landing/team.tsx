import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
// import style from "../../styles/landingStyle";

const style = {
  team: {
    avatarBox: "w-[250px] h-[290px] bg-[url('/landing/team-img-box.png')]",
    teamBox: "mr-auto ml-10 mb-20 w-full",
    memberName: {
      color: "#1b1a2d",
      fontSize: "17.5px",
      fontFamily: "Arial",
      fontWeight: "bold",
    },
    memberPosition: {
      color: "#1b1a2d",
      fontSize: "12px",
      fontFamily: "RobotoSlab",
    },
  },
};

interface MemberInfo {
  name: string;
  position: string;
  image: string;
}

const Team = () => {
  const generateMemberBox = (member: MemberInfo) => {
    return (
      <Grid
        item
        sx={{
          height: "290px",
          width: "250px",
        }}
      >
        <Box className={style.team.avatarBox}>
          <Typography
            variant="h6"
            className="text-[#1b1a2d]"
            align="center"
            alignItems="center"
            paddingTop={28}
            sx={style.team.memberName}
          >
            {member.name}
          </Typography>
          <Typography
            variant="body1"
            className="text-[#1b1a2d]"
            align="center"
            alignItems="center"
            sx={style.team.memberPosition}
          >
            {member.position}
          </Typography>
        </Box>
      </Grid>
    );
  };

  return (
    <Box className={style.team.teamBox}>
      <Grid container direction={"column"} marginLeft={25} paddingTop={5}>
        <Grid container spacing={50} sx={{ paddingBottom: 35 }} display="flex">
          {memberList.map((member) => generateMemberBox(member))}
        </Grid>
        <Grid container className="mt-20">
          <Grid item>
            <Typography
              variant="h2"
              display="flex"
              marginLeft={40}
              sx={{
                color: "#6e3cbc",
                fontSize: "78.5px",
                fontFamily: "Arial",
                fontWeight: "bold",
              }}
            >
              Team Work Company
            </Typography>
            <Typography
              variant="h6"
              display="flex"
              marginLeft={40}
              marginTop={2}
              align="center"
              className="w-[783px]"
              sx={{
                color: "#1b1a2d",
                fontSize: "25.5px",
                fontFamily: "RobotoSlab",
                fontWeight: "bold",
              }}
            >
              Teamwork has the incredible power to increase productivity, job
              satisfaction, and even each person&#39;s individual performance.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const memberList: MemberInfo[] = [
  {
    name: "Thuong Nguyen",
    position: "Chief Executive Officer",
    image: "/landing/team-img-box.png",
  },
  {
    name: "Hieu Pham",
    position: "Chief Technology Officer",
    image: "/landing/team-img-box.png",
  },
  {
    name: "Quan Le",
    position: "Full-stack Developer",
    image: "/landing/team-img-box.png",
  },
  {
    name: "Minh Hoang",
    position: "Designer",
    image: "/landing/team-img-box.png",
  },
];

export default Team;
