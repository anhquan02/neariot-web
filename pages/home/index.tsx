import { useRouter } from "next/router";
import StorageIcon from "@mui/icons-material/Storage";
import { DeveloperBoard } from "@mui/icons-material";

const Home = () => {
  const router = useRouter();

  const onClickSandbox = () => {
    alert("Sandbox");
  };

  const onClickStorage = () => {
    router.push("/storage")
  };

  return (
    <div className="pt-32 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full">
      <div className="lg:w-3/12 md:w-6/12 px-4 w-full ml-auto py-2 lg:mr-5">
        <div className=" bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 hover:shadow-cyan-500/40 text-white rounded-lg border-0 px-2 py-4 w-full  items-center h-full">
          <button
            className="w-full align-middle my-auto h-full bg-transparent font-semibold px-1 py-4"
            onClick={onClickSandbox}
          >
            <DeveloperBoard
              className=" mr-4 align-middle items-center"
              fontSize="large"
            />
            Go to your sandbox
          </button>
        </div>
      </div>
      <div className="lg:w-3/12 md:w-6/12 px-4 mr-auto w-full py-2 lg:ml-5">
        <div className=" bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 hover:shadow-cyan-500/40 text-white rounded-lg border-0 px-2 py-4 w-full  items-center h-full">
          <button
            className="w-full align-middle my-auto h-full bg-transparent font-semibold px-1 py-4"
            onClick={onClickStorage}
          >
            <StorageIcon
              className=" mr-4 align-middle items-center"
              fontSize="large"
            />
            Go to your storages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
