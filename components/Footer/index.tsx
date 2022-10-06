import { Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import { memo } from "react";

interface TextContainer {
  title: string;
  image: string;
  url: string;
}

const Footer = memo((props: any) => {
  const generateContainer = (title: string, content: TextContainer[]) => {
    return (
      <div>
        <Typography
          variant="h6"
          className="text-[#6e3cbc]"
          sx={{ fontWeight: "bold", fontSize: "25.5px", fontFamily: "Arial" }}
          marginBottom={2}
        >
          {title}
        </Typography>
        {content.map((item, index) => {
          return (
            <div key={index}>
              <Grid container spacing={1}>
                {item.image !== "" && (
                  <Grid item xs={3} marginTop="10px">
                    <Image width={"24px"} height={"20px"} src={item.image} />
                  </Grid>
                )}
                <Grid item xs={9}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "25.5px",
                      fontFamily: "RobotoSlab",
                      textDecoration: "none",
                    }}
                    component={Link}
                  >
                    <Link href={item.url} underline="none" color="#1b1a2d">
                      {item.title}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <footer className={"w-full h-[542px] bg-[url('/landing/footer-bg.png')]"}>
      <Grid container spacing={1}>
        <Grid item xs marginTop={25}>
          <div className="ml-40">
            {generateContainer("DEVPOST", devpostContainer)}
          </div>
        </Grid>
        <Grid item xs marginTop={25}>
          <div className="ml-20">
            {generateContainer("PORTFOLIO", portfolioContainer)}
          </div>
        </Grid>
        <Grid item xs marginTop={25}>
          <div className="ml-5">
            {generateContainer("HACKATHON", hackathonContainer)}
          </div>
        </Grid>
        <Grid item xs={4} marginTop={25}>
          <div className="ml-60 w-1/3 mb-10">
            {generateContainer("CONNECT", connectContainer)}
          </div>
        </Grid>
      </Grid>
      <span className="text-xl text-gray-500 sm:text-center dark:text-gray-400 ml-20 pt-20">
        © 2022{" "}
        <a href="#" className="hover:underline">
          Neariot
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
});

const devpostContainer: TextContainer[] = [
  {
    title: "About",
    image: "",
    url: "https://google.com",
  },
  {
    title: "Careers",
    image: "",
    url: "",
  },
  {
    title: "Contact",
    image: "",
    url: "",
  },
  {
    title: "Help",
    image: "",
    url: "",
  },
];

const portfolioContainer: TextContainer[] = [
  {
    title: "Your projects",
    image: "",
    url: "",
  },
  {
    title: "Your hackathons",
    image: "",
    url: "",
  },
  {
    title: "Settings",
    image: "",
    url: "",
  },
];

const hackathonContainer: TextContainer[] = [
  {
    title: "Browse hackathons",
    image: "",
    url: "",
  },
  {
    title: "Explore projects",
    image: "",
    url: "",
  },
  {
    title: "Host a hackathon",
    image: "",
    url: "",
  },
  {
    title: "Hackathon guides",
    image: "",
    url: "",
  },
];

const connectContainer: TextContainer[] = [
  {
    title: "Discord",
    image: "/landing/discord-logo.png",
    url: "",
  },
  {
    title: "Youtube",
    image: "/landing/youtube-logo.png",
    url: "",
  },
  {
    title: "Telegram",
    image: "/landing/telegram-logo.png",
    url: "",
  },
  {
    title: "Twitter",
    image: "/landing/twitter-logo.png",
    url: "",
  },
];

Footer.displayName = "footer";

export default Footer;
