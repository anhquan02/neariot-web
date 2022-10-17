import { useRouter } from "next/router";
import StorageIcon from "@mui/icons-material/Storage";
import { DeveloperBoard } from "@mui/icons-material";
import CustomButton from "../../components/CustomButton";
import Carousel from "../../components/Carousel";
import SearchField from "../../components/Filter/SearchField";
import Filter from "../../components/Filter";
import ProjectContainer from "../../components/Container/ProjectContainer";
import RecomendContainer from "../../components/Container/RecomendContainer";

const Home = () => {
  const router = useRouter();


  return (
    // <div className="lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 px-8 ">
    <div className="pt-52 py-8 flex lg:px-16 flex-nowrap md:flex-row flex-col md:w-full md:px-12 px-8">
      <div className="md:w-8/12 md:mx-4 w-full pb-4">
        <Carousel />
        <SearchField />
        <Filter />
        <ProjectContainer />
      </div>
      <div className="md:w-4/12 bg-lightpurple h-full md:mx-4 w-full items-center rounded pb-4 md:block hidden">
        <div className="bg-purple rounded items-center w-full text-center h-16 flex">
          <label className="text-white align-middle font-semibold items-center text-xl mx-auto">
            Recommend
          </label>
        </div>
        <RecomendContainer />
      </div>
    </div>
  );
};

export default Home;
