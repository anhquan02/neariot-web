import { useRouter } from "next/router";
import Hero from "./hero";
import About from "./about";
import styles from "./style";
import VisonAndMission from "./vnm";

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.root}>
      <Hero />
      <About />
      <VisonAndMission />
    </div>
  );
};



export default Home;
