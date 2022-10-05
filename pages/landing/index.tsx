import { useRouter } from "next/router";
import Hero from "./hero";
import About from "./about";
import VisonAndMission from "./vnm";
import Team from "./team";

const styles = {
  hero: {
    tab: "w-full h-[1158px] bg-[url('/landing/hero-bg.png')]",
  },
  about: {
    tab: "w-full h-[704px] bg-[url('/landing/about-bg.png')]",
  },
  vnm: {
    tab: "w-full h-[1104px] bg-[url('/landing/vnm-bg.png')]",
  },
  team: {
    tab: "w-full h-[700px] bg-[url('/landing/twc-bg.png')]",
  },
};

const Landing = () => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.hero.tab}>
        <Hero />
      </div>
      <div className={styles.about.tab}>
        <About />
      </div>
      <div className={styles.vnm.tab}>
        <VisonAndMission />
      </div>
      <div className={styles.team.tab}>
        <Team />
      </div>
    </div>
  );
};

export default Landing;
