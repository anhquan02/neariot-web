import { useRouter } from "next/router";
import StorageIcon from "@mui/icons-material/Storage";
import { DeveloperBoard } from "@mui/icons-material";
import CustomButton from "../../components/CustomButton";
import Carousel from "../../components/Carousel";

const Home = () => {
  const router = useRouter();

  const onClickSandbox = () => {
    router.push("/sandbox");
  };

  const onClickStorage = () => {
    router.push("/storage");
  };

  return (
    // <div className="lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 px-8 ">
    <div className="pt-52 py-8 flex lg:px-16 flex-nowrap md:flex-row flex-col md:w-full md:px-12 px-8">
      <div className="md:w-8/12 mx-4 w-full pb-4">
        <Carousel />
      </div>
      <div className="md:w-4/12 bg-lightpurple h-screen mx-4 w-full items-center rounded pb-4">
        <div className="bg-purple rounded items-center w-full text-center">
          <label className="text-white align-middle font-semibold items-center text-lg">
            Recommend
          </label>
        </div>
      </div>
    </div>
  );
};

export default Home;
