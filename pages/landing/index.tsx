import { useRouter } from "next/router";
import Hero from "./hero";
import About from "./about";
import VisonAndMission from "./vnm";
import Team from "./team";
import { Grid } from "@mui/material";

const styles = {
  hero: {
    tab: "bg-[url('/landing/hero-bg.png')] w-full",
  },
  about: {
    tab: "bg-[url('/landing/about-bg.png')] w-full",
  },
  vnm: {
    tab: "bg-[url('/landing/vnm-bg.png')] w-full",
  },
  team: {
    tab: "bg-[url('/landing/twc-bg.png')] w-full",
  },
};

const Landing = () => {
  return (
    <Grid container direction={"column"} columns={{ xs: 4, sm: 6, md: 8 }}>
      <Grid
        item
        className={styles.hero.tab}
        sx={{
          height: { xs: "100vh", md: "1158px" },
        }}
      >
        <Hero />
      </Grid>
      <Grid
        item
        className={styles.about.tab}
        sx={{
          height: { xs: "100vh", md: "704px" },
        }}
      >
        <About />
      </Grid>
      <Grid
        item
        className={styles.vnm.tab}
        sx={{
          height: { xs: "100vh", md: "1104px" },
        }}
      >
        <VisonAndMission />
      </Grid>
      <Grid
        item
        className={styles.team.tab}
        sx={{
          height: { xs: "full", md: "700px" },
          paddingBottom: { xs: 20, md: 0 },
        }}
      >
        <Team />
      </Grid>
    </Grid>
  );
};

export default Landing;
