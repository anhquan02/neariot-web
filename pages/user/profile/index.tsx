import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileProject from "../../../components/Card/ProfileProject";
import Notify from "../../../components/Notify";
import { utils } from "near-api-js";
import { useRouter } from "next/router";

const ProfileScreen = () => {
  const [tab, setTab] = useState(0);
  const [openLoading, setOpenLoading] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [snackMsg, setSnackMsg] = useState("");
  const [listPledgeProjects, setListPledgeProjects] = useState<any[]>([]);
  const [listSaveProjects, setListSaveProjects] = useState<any[]>([]);

  const wallet = useSelector((state: any) => state.wallet);
  const web3storage = useSelector((statex: any) => statex.w3storage);
  const router = useRouter();

  const handleCancelPledge = (id: string) => {
    console.log("cancel pledge", id);
  };

  const handleRemove = async (id: string) => {
    const { walletConnection, contract } = wallet;
    setOpenLoading(true);
    await contract
      .remove_from_watchlist({
        id: id,
      })
      .then((res: any) => {
        setOpenLoading(false);
        router.reload();
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleRate = (id: string) => {
    console.log("rate", id);
  };

  const handleReward = (id: string) => {
    console.log("reward", id);
  };

  const handleDisburse = (id: string) => {
    console.log("disburse", id);
  };

  const onRequestConnectWallet = () => {
    const { nearConfig, walletConnection } = wallet;
    walletConnection?.requestSignIn?.(nearConfig?.contractName);
  };

  const onCloseSnack = () => {
    setOpenSnack(false);
  };

  useEffect(() => {
    const { walletConnection, contract } = wallet;
    const userId = walletConnection.getAccountId();
    if (userId === "") {
      onRequestConnectWallet();
      return;
    }
    setOpenLoading(true);
    onLoadPledgedProject();
    onLoadSavedProject();
  }, []);

  const onLoadSavedProject = async () => {
    const { walletConnection, contract } = wallet;
    const userId = walletConnection.getAccountId();
    const { web3Connector } = web3storage;
    if (userId === "") {
      onRequestConnectWallet();
      return;
    }
    setOpenLoading(true);
    await contract
      .get_projects_watched()
      .then((res: any) => {
        res.map(async (item: any) => {
          const cid = item.metadata;
          let projectTitle = "There is no Title";
          let projectDescription = "There is no Description";
          await web3Connector?.getData(cid).then((res: any) => {
            if (res) {
              projectTitle = res.name;
              projectDescription = res.metadata.descriptions;
            }
          });
          // Get Milestone
          let milestone = "There is no Milestone was set";
          await contract
            .get_milestone({
              id: item.id,
            })
            .then((res: any) => {
              if (res !== "") {
                milestone = new Date(parseFloat(res)).toLocaleDateString();
              }
            });
          const project = {
            id: item.id,
            title: projectTitle,
            owner: item.owner,
            description: projectDescription,
            pledge: parseFloat(
              `${utils.format.formatNearAmount(
                item.total_pledge_locked.toLocaleString("fullwide", {
                  useGrouping: false,
                })
              )}`
            ),
            total_pledge: parseFloat(
              `${utils.format.formatNearAmount(
                item.total_pledge.toLocaleString("fullwide", {
                  useGrouping: false,
                })
              )}`
            ),
            milestone: milestone,
          };
          setListSaveProjects((listSaveProjects) => [
            ...listSaveProjects,
            project,
          ]);
          setOpenLoading(false);
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    let tmpList = listSaveProjects;
    tmpList.forEach((element: any) => {
      if (tmpList.filter((x) => x.id === element.id).length > 1) {
        tmpList.splice(tmpList.indexOf(element), 1);
      }
    });
    setListSaveProjects(tmpList);
  }, [listSaveProjects]);

  const onLoadPledgedProject = async () => {
    const { walletConnection, contract } = wallet;
    const userId = walletConnection.getAccountId();
    const { web3Connector } = web3storage;
    if (userId === "") {
      onRequestConnectWallet();
      return;
    }
    setOpenLoading(true);
    await contract
      .get_projects_funded()
      .then((res: any) => {
        res.map(async (item: any) => {
          const cid = item.metadata;
          let projectTitle = "There is no Title";
          let projectDescription = "There is no Description";
          await web3Connector?.getData(cid).then((res: any) => {
            if (res) {
              projectTitle = res.name;
              projectDescription = res.metadata.descriptions;
            }
          });
          // Get Milestone
          let milestone = "There is no Milestone was set";
          await contract
            .get_milestone({
              id: item.id,
            })
            .then((res: any) => {
              if (res !== "") {
                milestone = new Date(parseFloat(res)).toLocaleDateString();
              }
            });
          const project = {
            id: item.id,
            title: projectTitle,
            owner: item.owner,
            description: projectDescription,
            pledge: parseFloat(
              `${utils.format.formatNearAmount(
                item.total_pledge_locked.toLocaleString("fullwide", {
                  useGrouping: false,
                })
              )}`
            ),
            total_pledge: parseFloat(
              `${utils.format.formatNearAmount(
                item.total_pledge.toLocaleString("fullwide", {
                  useGrouping: false,
                })
              )}`
            ),
            milestone: milestone,
          };
          setListPledgeProjects((listPledgeProjects) => [
            ...listPledgeProjects,
            project,
          ]);
          setOpenLoading(false);
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    let tmpList = listPledgeProjects;
    tmpList.forEach((element: any) => {
      if (tmpList.filter((x) => x.id === element.id).length > 1) {
        tmpList.splice(tmpList.indexOf(element), 1);
      }
    });
    setListPledgeProjects(tmpList);
  }, [listPledgeProjects]);

  //render content depend on tab
  const renderContent = () => {
    switch (tab) {
      case 0:
        return (
          <>
            {listSaveProjects.map((item, index) => {
              return (
                <Fragment key={index}>
                  <ProfileProject
                    id={item.id}
                    title={item.title}
                    owner={item.owner}
                    description={item.description}
                    pledge={item.pledge}
                    total_pledge={item.total_pledge}
                    milestone={item.milestone}
                    saved={true}
                    handleRemove={handleRemove}
                  />
                </Fragment>
              );
            })}
          </>
        );
      case 1:
        return (
          <>
            {listPledgeProjects.map((item, index) => {
              return (
                <Fragment key={index}>
                  <ProfileProject
                    id={item.id}
                    title={item.title}
                    owner={item.owner}
                    description={item.description}
                    pledge={item.pledge}
                    total_pledge={item.total_pledge}
                    milestone={item.milestone}
                    saved={false}
                    handleCancelPledge={handleCancelPledge}
                    handleDisburse={handleDisburse}
                    handleRate={handleRate}
                    handleReward={handleReward}
                  />
                </Fragment>
              );
            })}
          </>
        );
      default:
        setTab(0);
        return;
    }
  };

  return (
    <>
      <Notify
        openLoading={openLoading}
        openSnack={openSnack}
        alertType={alertType}
        snackMsg={snackMsg}
        onClose={onCloseSnack}
      />
      <div className="pt-52 py-8 flex lg:px-16 flex-wrap md:flex-row flex-col md:w-full md:px-12 px-8 ">
        <ul className="flex flex-wrap text-sm font-medium text-center w-full rounded-t-lg border-t border-l border-r border-purple md:pl-8 pl-4">
          <li className="mr-2">
            <a
              href="#"
              className={
                "inline-block p-4 rounded-t-lg " +
                (tab == 0
                  ? "border-b border-primary text-purple"
                  : "text-slate-600")
              }
              onClick={() => setTab(0)}
            >
              Saved Projects
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className={
                "inline-block p-4 rounded-t-lg " +
                (tab == 1
                  ? "border-b border-primary text-purple"
                  : "text-slate-600")
              }
              onClick={() => setTab(1)}
            >
              Backed Projects
            </a>
          </li>
        </ul>
        <div className="h-auto w-full border border-purple rounded-b-lg">
          <div className="md:p-8 p-4">{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;

const listSavedProject = [
  {
    id: "1",
    title: "Awesome project 1",
    owner: "ciuz.testnet",
    description: "Something here ...",
    pledge: 100,
    total_pledge: 200,
    milestone: new Date(),
  },
  {
    id: "2",
    title: "Awesome project 2",
    owner: "ciuz.testnet",
    description: "Something here ...",
    pledge: 200,
    total_pledge: 300,
    milestone: new Date(),
  },
  {
    id: "3",
    title: "Awesome project 3",
    owner: "ciuz.testnet",
    description: "Something here ...",
    pledge: 100,
    total_pledge: 2000,
    milestone: new Date(),
  },
];
const listOwnProject = [
  {
    id: "4",
    title: "Awesome project 4",
    owner: "ciuz.testnet",
    description: "Something here ...",
    pledge: 100,
    total_pledge: 200,
    milestone: new Date(),
  },
  {
    id: "5",
    title: "Awesome project 5",
    owner: "ciuz.testnet",
    description: "Something here ...",
    pledge: 200,
    total_pledge: 300,
    milestone: new Date(),
  },
  {
    id: "6",
    title: "Awesome project 6",
    owner: "ciuz.testnet",
    description: "Something here ...",
    pledge: 100,
    total_pledge: 2000,
    milestone: new Date(),
  },
];
