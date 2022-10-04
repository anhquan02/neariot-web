import { useRouter } from "next/router";
import Hero from "./hero";
import About from "./about";
import styles from "./style";
import VisonAndMission from "./vnm";
import Team from "./team";

const Home = () => {
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

export default Home;
