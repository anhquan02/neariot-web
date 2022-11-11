import { memo, useState } from "react";

const style = {
  arrow: {
    up: "w-0 h-0 border border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-transparent border-b-[16px] border-emerald-500 transform cursor-pointer ",
    down: "w-0 h-0 border border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-transparent border-t-[16px] border-emerald-500 transform cursor-pointer ",
    right:
      "w-0 h-0 border border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-r-transparent border-l-[16px] border-emerald-500 transform cursor-pointer ",
    left: "w-0 h-0 border border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-transparent border-r-[16px] border-emerald-500 transform cursor-pointer ",
  },
};

const OfferCard = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  const renderContent = () => {
    const reward = true;
    if (collapsed && !reward) {
      return (
        <div className="w-full p-4">
          <div className="w-full flex flex-col text-center">
            <label className="font-semibold text-lg ">
              Some description here! ........
            </label>
            <div className="text-left md:mt-4 my-2">
              <label className="">Min. Plegde Amount: 5 NEAR</label>
            </div>
          </div>
        </div>
      );
    }
    if (collapsed && reward) {
      return (
        <>
          <div className="w-full p-4">
            <div className="w-full flex flex-col ">
              <div className="my-2 w-full">
                <label className="w-1/2">Description: </label>
                <span className="w-full">
                  You will spent xx Near and receive something after a time
                </span>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-row w-full">
                  <label className="w-1/3">Offer (Minimun amount): </label>
                  <span className="w-full ">5 Near</span>
                </div>
                <div className="flex flex-row w-full">
                  <label className="w-1/3">Reward: </label>
                  <span className="w-full">a NFT from our team</span>
                </div>
                <div className="flex flex-row w-full">
                  <label className="w-1/3">Reward Deadline: </label>
                  <span className="w-full">11/11/2022</span>
                </div>
              </div>
              <div className="my-2 w-full">
                <div className="flex flex-row w-full ">
                  <label className="w-1/3">Reward Information Form: </label>
                  <div className="w-full whitespace-pre-wrap">
                      Please fill your information follow this example:
                      Your Near Wallet: backer.near 
                      Your Name: Bob 
                      Your email: bob_backer@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="w-full border border-purple rounded-lg">
        <div className="flex flex-rows w-full p-4 text-center items-center">
          <div
            className={
              !collapsed ? style.arrow.right : style.arrow.down + " flex"
            }
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          ></div>
          <span className="text-center w-full md:mr-4">
            Pledge without reward
          </span>
        </div>
        {renderContent()}
      </div>
    </>
  );
});

OfferCard.displayName = "OfferCard";

export default OfferCard;
