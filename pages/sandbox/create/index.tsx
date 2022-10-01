import { useRouter } from "next/router";
import { memo, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../../components/CustomButton";
import Explore from "../../../components/Explore";
import Notify from "../../../components/Notify";

const CreateScreen = memo((props: any) => {
  const wallet = useSelector((state: any) => state.wallet);
  const web3storage = useSelector((statex: any) => statex.w3storage);
  const [name, setName] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [type, setType] = useState("0");
  const [repository, setRepository] = useState("");
  const [fee, setFee] = useState("");
  const [nameError, setNameError] = useState(false);
  const [desError, setDesError] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [snackMsg, setSnackMsg] = useState("");
  const router = useRouter();
  const [user, setUser] = useState(null);

  const onCloseSnack = () => {
    setOpenSnack(false);
  };

  const onShowResult = ({ type, msg }: any) => {
    setOpenSnack(true);
    setOpenLoading(false);
    setAlertType(type);
    setSnackMsg(msg);
  };

  const onRequestConnectWallet = () => {
    const { nearConfig, walletConnection } = wallet;
    walletConnection?.requestSignIn?.(nearConfig?.contractName);
  };

  const handleCreateProject = useCallback(
    async (e: any) => {
      e.preventDefault();
      const { walletConnection } = wallet;
      const userId = walletConnection.getAccountId();
      if (userId === "") {
        onRequestConnectWallet();
        return;
      }

      // if (user == null) {
      //   return onShowResult({
      //     type: "error",
      //     msg: "System busy! try again later",
      //   });
      // }
      if (name === "" || name === null || typeof name === "undefined") {
        setNameError(true);
        return onShowResult({
          type: "error",
          msg: "Name could not be empty",
        });
      }
      if (
        descriptions === "" ||
        descriptions === null ||
        typeof descriptions === "undefined"
      ) {
        setDesError(true);
        return onShowResult({
          type: "error",
          msg: "Description could not be empty",
        });
      }
      if (type === "" || type === null || typeof type === "undefined") {
        return onShowResult({
          type: "error",
          msg: "Type could not be empty",
        });
      }

      const data = {
        owner: userId,
        name,
        descriptions,
        type,
        repository,
        fee,
        noSetting:true,
        project_target:0,
        project_rate:0,
      };
      console.log(data);

      setOpenLoading(true);
      const { web3Connector } = web3storage;
      const { contract } = wallet;
      const filename = userId + "_" + Date.now();
      const cid = await web3Connector.setData(filename, data);

      await contract
        ?.create_project?.(
          {
            metadata: cid,
          },
          50000000000000
        )
        .then((res: any) => {
          if (res.id) {
            router.push("/sandbox/project/" + res.id);
          } else {
            onShowResult({
              type: "error",
              msg: "Create form failure",
            });
          }
        })
        .catch((error: any) => {
          updateProject(userId, cid);
          return;
        });
    },
    [name, descriptions, type, fee, repository]
  );

  const updateProject = useCallback(async (user_id: any, cid: any) => {
    const { contract } = wallet;
    const project = await contract
      ?.get_user_projects_created(
        {
          id: user_id,
        },
        50000000000000
      )
      .catch((error: any) => {
        onShowResult({
          type: "error",
          msg: String(error),
        });
      });

    await contract
      ?.update_project(
        {
          id: project.id,
          metadata: cid,
        },
        50000000000000
      )
      .then((res: any) => {
        onShowResult({
          type: "success",
          msg: String("Suscess"),
        });
        router.push("/sandbox/project/" + project.id);
      })
      .catch((error: any) => {
        onShowResult({
          type: "error",
          msg: String(error),
        });
      });
  }, []);

  return (
    <>
      <Notify
        openLoading={openLoading}
        openSnack={openSnack}
        alertType={alertType}
        snackMsg={snackMsg}
        onClose={onCloseSnack}
      />
      <div className="lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 px-8">
        <div className="mb-8 md:mx-4 w-full">
          <div className="pb-4">
            <label className="text-lg text-slate-800 ">
              Create new Project
            </label>
          </div>
        </div>
        <hr className="w-full md:mx-4  md:max-w-[40%] border-slate-400 mb-8" />
        <div className="w-full lg:px-48 md:px-32 sm:px-16">
          <form className="" onSubmit={handleCreateProject} method="post">
            <div className="flex md:flex-row flex-col">
              <div className="md:w-4/12 lg:w-2/12 item-center align-middle mr-5 whitespace-nowrap my-auto pb-2 w-full">
                <label htmlFor="inpName">Name </label>
                <span className="text-red-700">*</span>
              </div>
              <div className="md:w-8/12 lg:w-10/12 item-center align-middle  my-auto pb-2 w-full">
                <input
                  id="inpName"
                  type="text"
                  name="inpName"
                  className={
                    "placeholder-slate-400 text-slate-600 border-0 px-3 py-3 bg-white rounded-xl text-sm shadow outline-none focus:outline-none focus:ring w-full overflow-x-hidden  shadow-indigo-500/50"
                  }
                  placeholder="Type something here"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="md:w-4/12 lg:w-2/12 item-center align-middle mr-5 whitespace-nowrap my-auto pb-2 w-full">
                <label htmlFor="inpDes">Decriptions </label>
                <span className="text-red-700">*</span>
              </div>
              <div className="md:w-8/12 lg:w-10/12 item-center align-middle  my-auto pb-2 w-full">
                <textarea
                  id="inpDes"
                  name="inpDes"
                  placeholder="Type something here"
                  className="border-0 px-3 py-3 placeholder-slate-400 text-slate-600 bg-white rounded-xl text-sm shadow outline-none focus:outline-none focus:ring w-full my-auto overflow-x-hidden shadow-indigo-500/50"
                  onChange={(e) => {
                    setDescriptions(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="md:w-4/12 lg:w-2/12 item-center align-middle mr-5 whitespace-nowrap my-auto pb-2 w-full">
                <label>Type </label>
                <span className="text-red-700">*</span>
              </div>
              <div className="md:w-8/12 lg:w-10/12 item-center align-middle  my-auto pb-2 w-full">
                <select
                  className={
                    "placeholder-slate-400 text-slate-600 border-0 px-3 py-3 bg-white rounded-xl text-sm shadow outline-none focus:outline-none focus:ring w-full overflow-x-hidden shadow-indigo-500/50"
                  }
                  placeholder="Type something here"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="0" className="">
                    Public
                  </option>
                  <option value="1" className="">
                    Private
                  </option>
                </select>
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="md:w-4/12 lg:w-2/12 item-center align-middle mr-5 whitespace-nowrap my-auto pb-2 w-full">
                <label htmlFor="inpRepository">Repository </label>
              </div>
              <div className="md:w-8/12 lg:w-10/12 item-center align-middle  my-auto pb-2 w-full">
                <input
                  id="inpRepository"
                  type="text"
                  name="inpRepository"
                  className={
                    "placeholder-slate-400 text-slate-600 border-0 px-3 py-3 bg-white rounded-xl text-sm shadow outline-none focus:outline-none focus:ring w-full overflow-x-hidden  shadow-indigo-500/50"
                  }
                  placeholder="Type something here"
                  onChange={(e) => {
                    setRepository(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col mb-2">
              <div className="md:w-4/12 lg:w-2/12 item-center align-middle mr-5 whitespace-nowrap my-auto pb-2 w-full">
                <label htmlFor="inpFee">Subcribe Fee </label>
              </div>
              <div className="md:w-8/12 lg:w-10/12 item-center align-middle  my-auto pb-2 w-full">
                <input
                  id="inpFee"
                  type="text"
                  name="inpFee"
                  className={
                    "placeholder-slate-400 text-slate-600 border-0 px-3 py-3 bg-white rounded-xl text-sm shadow outline-none focus:outline-none focus:ring w-full overflow-x-hidden  shadow-indigo-500/50"
                  }
                  placeholder="Type something here"
                  onChange={(e) => {
                    setFee(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-nowrap flex-row mb-2">
              <div className="lg:w-2/12 ml-auto lg:mr-2 md:w-4/12 h-4 md:mx-2 my-auto "></div>
              <div className="overflow-x-auto md:w-8/12 lg:w-10/12 flex">
                <input
                  required
                  type="checkbox"
                  className=" align-middle my-auto lg:w-4 md:w-8 mx-2 "
                  id="check1"
                  onInvalid={(e) =>
                    (e.target as HTMLInputElement).setCustomValidity(
                      "Please check this box to continue"
                    )
                  }
                  onInput={(e) =>
                    (e.target as HTMLInputElement).setCustomValidity("")
                  }
                />
                <label className="" htmlFor="check1">
                  {`By clicking the submit button below, I hereby agree to and accept the following terms and conditions`}
                </label>
              </div>
            </div>
            <div className="flex flex-nowrap flex-row mb-2">
              <div className="lg:w-2/12 ml-auto lg:mr-2 md:w-4/12 h-4 md:mx-2 my-auto "></div>
              <div className="overflow-x-auto md:w-8/12 lg:w-10/12 flex">
                <input
                  required
                  type="checkbox"
                  className=" align-middle my-auto lg:w-4 md:w-8 mx-2 "
                  id="check2"
                  onInvalid={(e) =>
                    (e.target as HTMLInputElement).setCustomValidity(
                      "Please check this box to continue"
                    )
                  }
                  onInput={(e) =>
                    (e.target as HTMLInputElement).setCustomValidity("")
                  }
                />
                <label className="" htmlFor="check2">
                  {`By clicking the submit button below, you will spend 0.1 NEAR as a fee for this storage`}
                </label>
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <CustomButton
                className_box="px-2 py-2 lg:w-6/12 md:w-4/12 w-full mx-auto my-4"
                className_button="py-2"
                // onClickButton={handleCreateProject}
              />
            </div>
          </form>
        </div>
        <Explore />
      </div>
    </>
  );
});

CreateScreen.displayName = "create_screen";

export default CreateScreen;
