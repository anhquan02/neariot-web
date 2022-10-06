import React from "react";
import { Box } from "@mui/system";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

const style = {
  hero: {
    heroBox: "ml-auto w-1/2 h-auto absolute top-40 right-20",
    title: "text-[#6e3cbc] text-[74.5px] font-[Arial]",
    subtitle: "text-[#1b1a2d] text-[25.5px] font-[RobotoSlab] pl-1",
    buttonText: "text-[#e2daf2] text-[29.5px] font-[Arial]",
  },
  subtitle: {
    color: "#1b1a2d",
    fontSize: "2vw",
    fontFamily: "RobotoSlab",
  },
};

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <img
        src="/landing/hero-bg.png"
        alt="..."
        className="w-full object-cover block "
      />
      <Box className={style.hero.heroBox}>
        <Container className="">
          <Typography
            variant="h1"
            sx={{
              color: "#6e3cbc",
              fontSize: "5vw",
              fontFamily: "Arial",
            }}
          >
            Ideas are easy
            <br />
            Implementation is hard
          </Typography>
          <Typography variant="h4" paddingTop={2} sx={style.subtitle}>
            Don&#39;t worry about failure you only have to be right one
          </Typography>
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "226px",
              height: "54px",
              textTransform: "none",
              backgroundColor: "#5825f4",
              borderRadius: "50px",
              borderColor: "transparent",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#e2daf2",
                fontSize: "29.5px",
                fontFamily: "Arial",
              }}
              onClick={() => {
                router.push("/home");
              }}
            >
              Explore Now
            </Typography>
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
