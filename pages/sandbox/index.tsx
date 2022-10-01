import { memo, useCallback, useEffect, useState } from "react";
import Card from "../../components/Card";
import CreateCard from "../../components/Card/CreateCard";
import SearchIcon from "@mui/icons-material/Search";
import Explore from "../../components/Explore";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Notify from "../../components/Notify";

const Sandbox = memo((props: any) => {
  const [data, setData] = useState<any[]>();
  const router = useRouter();
  const wallet = useSelector((statex: any) => statex.wallet);
  const w3storage = useSelector((statex: any) => statex.w3storage);
  const [openLoading, setOpenLoading] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [snackMsg, setSnackMsg] = useState("");

  useEffect(() => {
    const { contract, walletConnection } = wallet;

    if (!walletConnection.isSignedIn) {
      setData([]);
    }
    setData([]);

    // (async () => {
    //   await contract
    //     ?.get_clusters()
    //     .then((res: any) => {
    //       setData(res);
    //     })
    //     .catch((error: any) => {
    //       console.log(error);
    //     });
    // })();
  }, [openLoading]);

  const handleClickDetail = (id: any) => {
    // router.push(`/storage/detail?id=${id}`);
  };

  const onRequestConnectWallet = () => {
    const { nearConfig, walletConnection } = wallet;
    walletConnection?.requestSignIn?.(nearConfig?.contractName);
  };

  const handleCreateProject = useCallback(async () => {
    const { walletConnection, contract } = wallet;
    const userId = walletConnection.getAccountId();
    if (userId === "") {
      onRequestConnectWallet();
      return;
    }
    await contract.join({}, 50000000000000);
    router.push("/sandbox/create");
  }, []);

  const onCloseSnack = () => {
    setOpenSnack(false);
  };

  const Project = useCallback(() => {
    if (data?.length == 0) {
      return (
        <>
          <div className="mx-auto my-auto py-24 w-full">
            <div className="bg-white flex flex-wrap border shadow-lg rounded-xl mx-auto my-2 py-2 cursor-pointer lg:w-3/12 md:w-4/12 sm:w-6/12 items-center w-full">
              <div className=" mx-auto items-center align-middle justify-center px-2 py-4">
                <button
                  className="mx-auto justify-center items-center"
                  onClick={handleCreateProject}
                >
                  You dont have any project, lets start?
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="md:w-auto w-full grid md:grid-cols-3 sm:grid-cols-2 gap-8 grid-rows-1 mx-10 md:mx-auto">
          {data?.map((item, index) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                create_at={item.create_at}
                onClickCard={(id) => {
                  handleClickDetail(id);
                }}
              />
            );
          })}
        </div>
      </>
    );
  }, [data]);

  return (
    <>
      <Notify
        openLoading={openLoading}
        openSnack={openSnack}
        alertType={alertType}
        snackMsg={snackMsg}
        onClose={onCloseSnack}
      />
      <div className="lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 sm:px-8 px-4 sm:mx-auto">
        <CreateCard
          label="Start new Project"
          welcome="Sandbox"
          onCreate={() => handleCreateProject()}
        />
        <div className="w-full flex pb-12 md:px-2 justify-between">
          <div className="">
            <span className="align-middle items-center text-lg  text-slate-800">
              Manage your Projects
            </span>
          </div>
          <div className="">
            <form className="">
              <div className="items-stretch flex-row flex-wrap">
                <SearchIcon className="z-10 h-full absolute leading-snug font-normal text-center bg-transparent rounded-xl text-base items-center justify-center w-8 ml-3 my-3" />
                <input
                  type="text"
                  placeholder="Find your storage with id"
                  className="border-0 px-3 py-3 placeholder-slate-400 text-slate-600 bf-white rounded-xl text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10 relative"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex items-center">{Project()}</div>
      </div>
    </>
  );
});

Sandbox.displayName = "sandbox_screen";

export default Sandbox;
