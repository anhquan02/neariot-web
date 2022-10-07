import React from "react";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";

const style = {
  team: {
    avatarBox: "bg-[url('/landing/team-img-box.png')]",
    teamBox: "w-full",
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
  title: {
    color: "#6e3cbc",
    fontSize: {
      xs: "1.5rem",
      sm: "3rem",
      md: "3.5rem",
      lg: "4rem",
      xl: "4.5rem",
    },
    fontFamily: "Arial",
    fontWeight: "bold",
    width: { xs: "17rem", md: "auto" },
  },
  subtitle: {
    color: "#1b1a2d",
    fontSize: { xs: "1rem", md: "25.5px" },
    fontFamily: "RobotoSlab",
    fontWeight: "bold",
    width: { xs: "20rem", md: "50rem" },
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
          height: { xs: "auto", md: "290px" },
          width: { xs: "auto", md: "250px" },
        }}
      >
        <Card
          sx={{
            // height: { xs: "auto", md: "290px" },
            width: { xs: "auto", md: "250px" },
            backgroundColor: "transparent",
            boxShadow: "none",
            borderRadius: "none",
            position: "absolute",
          }}
          className="object-fit: contain"
        >
          <CardMedia component="img" image="/landing/team-img-box.png" />
          <CardContent
            sx={{
              marginTop: { xs: -36, md: -38 },
            }}
          >
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
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <Box className={style.team.teamBox}>
      <Grid
        container
        direction={"column"}
        marginLeft={{
          xs: "4rem",
          md: 25,
        }}
        paddingTop={{ xs: 5, md: 20 }}
        spacing={{
          xs: 5,
          md: 12,
        }}
      >
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 38, md: 50 }}
        >
          {memberList.map((member) => generateMemberBox(member))}
        </Grid>
        <Grid
          container
          sx={{
            paddingTop: { xs: 45, md: 45 },
          }}
        >
          <Grid item>
            <Typography
              variant="h2"
              sx={style.title}
              marginLeft={{
                xs: 0,
                md: 45,
              }}
            >
              Team Work Company
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={style.subtitle}
              marginLeft={{
                xs: 0,
                md: 40,
              }}
              marginTop={{
                xs: 0,
                md: 3,
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
