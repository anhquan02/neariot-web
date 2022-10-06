import { useRouter } from "next/router";
import Hero from "./hero";
import About from "./about";
import VisonAndMission from "./vnm";
import Team from "./team";
import { Grid } from "@mui/material";

const styles = {
  hero: {
    // tab: "w-full h-[1158px] bg-[url('/landing/hero-bg.png')]",
    tab: "w-full  ",
  },
  about: {
    // tab: "w-full h-[704px] bg-[url('/landing/about-bg.png')]",
    tab: "w-full ",
  },
  vnm: {
    // tab: "w-full h-[1104px] bg-[url('/landing/vnm-bg.png')]",
    tab: "w-full ",
  },
  team: {
    // tab: "w-full h-[700px] bg-[url('/landing/twc-bg.png')]",
    tab: "w-full ",
  },
};

const Landing = () => {
  const router = useRouter();
  return (
    <Grid container direction={"column"}>
      <Grid item className={styles.hero.tab}>
        <Hero />
      </Grid>
      <Grid item className={styles.about.tab}>
        <About />
      </Grid>
      <Grid item className={styles.vnm.tab}>
        <VisonAndMission />
      </Grid>
      <Grid item className={styles.team.tab}>
        <Team />
      </Grid>
      <Grid item>
        <div className="relative">          
          <img
            src="/landing/footer-bg.png"
            alt="..."
            className="w-full object-cover block "
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Landing;
