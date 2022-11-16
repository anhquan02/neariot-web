import { useRouter } from "next/router";
import { Fragment, memo, useCallback, useEffect, useState } from "react";
import { formatDate } from "../../../../helpers/Utils";
import { useSelector } from "react-redux";
import { ProjectData } from "../../../../helpers/types";
import Notify from "../../../../components/Notify";
import { utils } from "near-api-js";
import OfferCard from "../../../../components/Card/OfferCard";

const SummaryFunding = memo(() => {
  const fiveStar = 5;
  const [data, setData] = useState<ProjectData>({
    id: "",
    owner: "",
    name: "",
    // type: "",
    descriptions: "",
    repository: "",
    created_at: "",
    noSetting: true,
    section: [],
    pledgers: 0,
    project_target: 0,
    avg_rate: 0,
    project_rate: 0,
  });
  const [openLoading, setOpenLoading] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [snackMsg, setSnackMsg] = useState("");
  const wallet = useSelector((state: any) => state.wallet);
  const [offers, setOffers] = useState<any[]>([]);
  const [openDetailOffer, setOpenDetailOffer] = useState(false);
  const [rate, setRate] = useState(0);
  const web3storage = useSelector((statex: any) => statex.w3storage);
  const router = useRouter();
  const { id } = router.query;

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

  useEffect(() => {
    setOpenLoading(true);
    const { walletConnection } = wallet;
    const userId = walletConnection.getAccountId();
    if (userId === "") {
      onRequestConnectWallet();
      return;
    }

    (async () => {
      const project = await getProject(id);
      const _data = await getDataWeb3(project.metadata);
      setData({
        id: project.id,
        owner: _data.owner,
        name: _data.name,
        // type: _data.type,
        descriptions: _data.descriptions,
        repository: _data.repository,
        created_at: project.created_at,
        noSetting: _data.noSetting,
        offers: project.offers || [],
        data: _data.data,
        section: _data.section,
        fee: _data.fee,
        pledgers: parseFloat(
          `${utils.format.formatNearAmount(
            project.total_pledge.toLocaleString("fullwide", {
              useGrouping: false,
            })
          )}`
        ),
        total_pledge_locked: parseFloat(
          `${utils.format.formatNearAmount(
            project.total_pledge_locked.toLocaleString("fullwide", {
              useGrouping: false,
            })
          )}`
        ),
        total_offers_cancled: parseFloat(
          `${utils.format.formatNearAmount(
            project.total_offers_cancled.toLocaleString("fullwide", {
              useGrouping: false,
            })
          )}`
        ),
        total_offers_completed: parseFloat(
          `${utils.format.formatNearAmount(
            project.total_offers_completed.toLocaleString("fullwide", {
              useGrouping: false,
            })
          )}`
        ),
        project_target: _data.project_target + "",
        avg_rate: project.avg_rate + "",
        project_rate: _data.project_rate + "",
        watchers: project.pledgers.length || 0,
      });
      setRate(project.avg_rate);
      setOpenLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const _offers: any[] = [];
      if (!data.offers) {
        return;
      }
      for (const offer of data.offers || []) {
        const _data = await getDataWeb3(offer.metadata);
        if (_data) {
          _data.id = offer.id;
          _offers.push(_data);
        }
      }
      setOffers(_offers);
    })();
  }, [data]);

  const getDataWeb3 = async (cid: any) => {
    const { web3Connector } = web3storage;
    return await web3Connector
      .getData(cid)
      .then((res: any) => {
        return res.metadata;
      })
      .catch((err: any) => {
        onShowResult({
          type: "error",
          msg: String(err),
        });
      });
  };

  const getProject = async (id: any) => {
    const { walletConnection, contract } = wallet;
    return await contract
      .get_project({ id: id }, 50000000000000)
      .catch((error: any) => {
        onShowResult({
          type: "error",
          msg: String(error),
        });
      });
  };

  const renderRate = useCallback(() => {
    const cols = [];
    for (let i = 0; i < fiveStar; i++) {
      if (i < rate) {
        cols.push(
          <div
            className="cursor-pointer"
            key={i + new Date().getDate()}
            // onClick={() => setRate(i + 1)}
          >
            <img
              src="/golden-star.png"
              alt="star"
              className="object-fill h-8"
            />
          </div>
        );
        continue;
      }
      cols.push(
        <div
          className="cursor-pointer"
          key={i + new Date().getDate()}
          // onClick={() => setRate(i + 1)}
        >
          <img src="/silver-star.png" alt="star" className="object-fill h-8" />
        </div>
      );
    }
    return cols;
  }, [rate]);

  const renderOffers = useCallback(() => {
    return offers.map((offer: any, index: any) => {
      return (
        <Fragment key={index}>
          <OfferCard
            id={offer.id}
            description={offer.description}
            minPledge={offer.minPledge}
            reward={offer.reward}
            rewardDetail={offer.rewardDetail}
            rewardDeadline={offer.rewardDeadline}
            informationForm={offer.informationForm}
            detail={offer.boughtInform}
          />
        </Fragment>
      );
    });
  }, [offers]);

  return (
    <>
      <Notify
        openLoading={openLoading}
        openSnack={openSnack}
        alertType={alertType}
        snackMsg={snackMsg}
        onClose={onCloseSnack}
      />

      <div className="w-full mb-12 pt-36"></div>
      <div className="w-full lg:px-16 sm:px-8">
        <div className="flex md:flex-row flex-col p-4 justify-between">
          <div className="items-center align-middle my-auto pb-2 w-full rounded bg-white mr-4 shadow-purple shadow-sm  h-full flex-grow">
            <div className="flex flex-row w-full py-2 m-2">
              <div className="flex mx-2 w-1/6">Project Name: </div>
              <span className="flex mx-2 w-full px-2 overflow-x-auto">
                {data.name}
              </span>
            </div>
            <div className="flex flex-row w-full py-2 m-2">
              <div className="flex mx-2 w-1/6">Description: </div>
              <span className="flex mx-2 w-full px-2 overflow-x-auto overflow-y-auto">
                {data.descriptions}
              </span>
            </div>
            <div className="flex flex-row w-full py-2 m-2">
              <div className="flex mx-2 w-1/6">Repository: </div>
              <span className="flex mx-2 w-full px-2 overflow-x-auto">
                {data?.repository}
              </span>
            </div>
            <div className="flex flex-row w-full py-2 m-2">
              <div className="flex mx-2 w-1/6">Create At: </div>
              <span className="flex mx-2 w-full px-2 overflow-x-auto">
                {formatDate(data.created_at / 1000000)}
              </span>
            </div>
          </div>
        </div>
        <div className="md:mx-4 mx-2 md:py-4 py-2">
          <span className="text-primary text-lg">Funding Campain</span>
          <hr className="w-full md:max-w-[80%] border-purple my-8" />
          <div className="flex md:mx-4 mx-2 flex-col w-full">
            <div className="flex flex-row w-full md:mb-4 mb-2">
              <span className="w-1/6">Total pledge:</span>
              <span className="">{data.pledgers} NEAR</span>
            </div>
            <div className="flex flex-row w-full md:mb-4 mb-2">
              <span className="w-1/6">Target:</span>
              <span className="">{data.fee} NEAR</span>
            </div>
            <div className="flex flex-row w-full md:mb-4 mb-2">
              <span className="w-1/6">Total disbursed:</span>
              <span className="">{data.pledgers - data.total_pledge_locked} NEAR</span>
            </div>
            <div className="flex flex-row w-full md:mb-4 mb-2">
              <span className="w-1/6">Total cancel:</span>
              <span className="">{data.total_offers_cancled}</span>
            </div>
            <div className="flex flex-row w-full md:mb-4 mb-2">
              <span className="w-1/6">Total backers:</span>
              <span className="">{data.watchers}</span>
            </div>
            <div className="flex flex-row w-full md:mb-4 mb-2">
              <span className="w-1/6">Total section:</span>
              <span className="">{data.section?.length}</span>
            </div>
            <div className="flex flex-row w-full md:mb-4 mb-2">
              <span className="w-1/6">Total offer:</span>
              <span
                className="hover:underline hover:text-blue-600 hover:cursor-pointer"
                onClick={() => {
                  setOpenDetailOffer(!openDetailOffer);
                }}
              >
                {data.offers?.length} (Detail)
              </span>
            </div>
            <div className="md:mx-8 mx-4 mb-4">{openDetailOffer && renderOffers()}</div>
            <hr className="w-full md:max-w-[80%] border-purple my-8" />
          </div>
        </div>
        <div className="md:mx-4 mx-2 md:py-4 py-2">
          <span className="text-primary text-lg">
            Your project rating {data.avg_rate}/5
          </span>
          <div className="w-[450px] grid grid-cols-5 py-8 px-4 gap-4">
            {renderRate()}
          </div>
        </div>
      </div>
    </>
  );
});

SummaryFunding.displayName = "SummaryFunding";

export default SummaryFunding;
