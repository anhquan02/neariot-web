import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";

const style = {
  team: {
    avatarBox: "w-[250px] h-[290px] bg-[url('/landing/team-img-box.png')]",
    teamBox: "mb-20 w-full ",
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
  const generateMemberBox = (member: MemberInfo, index: any) => {
    return (
      <Grid
        key={index}
        item
        sx={{
          height: "290px",
          width: "250px",
          margin: "10px 20px",
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
    <div className="pb-40">
      {/* <img
        src="/landing/twc-bg.png"
        alt="..."
        className="w-full object-cover block "
      /> */}
      <Box className={style.team.teamBox}>
        <Grid container direction={"column"}>
          <Grid container display="flex" justifyContent={"center"}>
            {memberList.map((member, index) =>
              generateMemberBox(member, index)
            )}
          </Grid>
          <Grid container className="mt-20">
            <Grid item className="flex w-full ">
              <div className="">
                <Typography
                  variant="h2"
                  display="flex"
                  className="w-full flex justify-center"
                  sx={{
                    color: "#6e3cbc",
                    fontSize: "5vw",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                  }}
                >
                  Team Work Company
                </Typography>
                <Typography
                  variant="h6"
                  display="flex"
                  className="w-full flex justify-center mx-auto items-center text-center px-[20%] "
                  sx={{
                    color: "#1b1a2d",
                    fontSize: "2vw",
                    fontFamily: "RobotoSlab",
                    fontWeight: "bold",
                  }}
                >
                  Teamwork has the incredible power to increase productivity,
                  job satisfaction, and even each person&#39;s individual
                  performance.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
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
