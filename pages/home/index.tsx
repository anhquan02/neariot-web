import { useRouter } from "next/router";
import StorageIcon from "@mui/icons-material/Storage";
import { DeveloperBoard } from "@mui/icons-material";
import CustomButton from "../../components/CustomButton";

const Home = () => {
  const router = useRouter();

  const onClickSandbox = () => {
    alert("Sandbox");
  };

  const onClickStorage = () => {
    router.push("/storage");
  };

  return (
    <div className="lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 px-8 ">
      <div className="lg:w-4/12 md:w-6/12 px-4  w-full ml-auto py-2 lg:mr-5">
        <CustomButton
          label="Go to your sandbox"
          onClickButton={onClickSandbox}
          _icon={DeveloperBoard}
          icon_size="large"
          className_box="px-2 py-4"
          className_button="py-4"
        />
      </div>
      <div className="lg:w-4/12 md:w-6/12 px-4 mr-auto w-full py-2 lg:ml-5">
        <CustomButton
          label="Go to your storages"
          onClickButton={onClickStorage}
          _icon={StorageIcon}
          icon_size="large"
          className_box="px-2 py-4"
          className_button="py-4"
        />
        
      </div>
    </div>
  );
};

export default Home;
