import { useRouter } from "next/router";
import StorageIcon from "@mui/icons-material/Storage";
import { DeveloperBoard } from "@mui/icons-material";
import CustomButton from "../../components/CustomButton";
import Carousel from "../../components/Carousel";
import SearchField from "../../components/Filter/SearchField";
import Filter from "../../components/Filter";
import ProjectContainer from "../../components/Container/ProjectContainer";
import RecomendContainer from "../../components/Container/RecomendContainer";
import NewsContainer from "../../components/Container/NewsContainer";
import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Notify from "../../components/Notify";

const Home = () => {
  const router = useRouter();
  const wallet = useSelector((state: any) => state.wallet);
  const web3storage = useSelector((statex: any) => statex.w3storage);
  const [openLoading, setOpenLoading] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [snackMsg, setSnackMsg] = useState("");
  const [listRecommend, setListRecommend] = useState<any[]>([]);

  const onRequestConnectWallet = () => {
    const { nearConfig, walletConnection } = wallet;
    walletConnection?.requestSignIn?.(nearConfig?.contractName);
  };

  const onCloseSnack = () => {
    setOpenSnack(false);
  };

  const onShowResult = ({ type, msg }: any) => {
    setOpenSnack(true);
    setOpenLoading(false);
    setAlertType(type);
    setSnackMsg(msg);
  };

  const handleCreateProject = useCallback(async (e: any) => {
    e.preventDefault();
    const { walletConnection, contract } = wallet;
    const userId = walletConnection.getAccountId();
    if (userId === "") {
      onRequestConnectWallet();
      return;
    }
    setOpenLoading(true);
    const project = await contract
      ?.get_user_projects_created(
        {
          id: userId,
        },
        50000000000000
      )
      .catch((error: any) => {
        onShowResult({
          type: "error",
          msg: String(error),
        });
      });

    if (project?.id) {
      router.push(`/sandbox/project/${project.id}`);
      return;
    }
    router.push("/sandbox/create");
  }, []);

  useEffect(() => {
    onLoadRecommend();
  }, []);

  const onLoadRecommend = async () => {
    const { contract } = wallet;
    const { web3Connector } = web3storage;
    await contract
      ?.get_rcm_projects()
      .then((res: any[]) => {
        let list: any[] = [];
        res.forEach(async (item: any) => {
          // Get metadata from web3storage
          const cid = item.metadata;
          const metadata = await web3Connector?.getData(cid);
          let descriptions = 'There is no description for this project';
          let name = 'There is no name for this project';
          let img = "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=1380";
          // if (metadata) {
          //   descriptions = metadata.description;
          // }
          list.push({
            id: res.indexOf(item) + 1,
            owner: item.owner,
            name: name,
            img: img,
            type: "0",
            descriptions: descriptions,
            pledgers: item.total_pledge,
            backers: item.pledgers.length,
            avg_rate: item.avg_rate,
          });
        });
        if (list.length) {
          setListRecommend(list);
        }
      })
      .catch((error: any) => {
        onShowResult({
          type: "error",
          msg: String(error),
        });
      });
  };

  return (
    // <div className="lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 px-8 ">
    <>
      <Notify
        openLoading={openLoading}
        openSnack={openSnack}
        alertType={alertType}
        snackMsg={snackMsg}
        onClose={onCloseSnack}
      />
      <div className="pt-52 py-8 flex lg:px-16 flex-nowrap md:flex-row flex-col md:w-full md:px-12 px-8">
        <div className="md:w-8/12 md:mx-4 w-full pb-4">
          <Carousel
            btnText="Start a Project"
            btnOnclick={handleCreateProject}
          />
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
      <div className="w-full flex pb-20 lg:px-16 md:px-12 px-8">
        <div className="md:mx-4 w-full">
          <NewsContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
