import { memo } from "react";
import { formatDate } from "../../helpers/Utils";

const style = {
  wrapper: "w-full border border-black rounded-lg md:p-4 p-2 md:mb-4 mb-2 text-primary",
  title: "text-center text-lg font-semibold text-primary",
  btn: "bg-purple text-white rounded-lg lg:w-64 md:w-44 px-4 py-2 disabled:bg-purple-light disabled:text-black mb-2",
};

type Props = {
  id: string;
  title: string;
  owner: string;
  description: string;
  pledge: number;
  total_pledge: number;
  milestone: any;
  saved?: boolean;
  handleRemove?: (id: string) => void;
  handleRate?: (id: string) => void;
  handleReward?: (id: string) => void;
  handleDisburse?: (id: string) => void;
  handleCancelPledge?: (id: string) => void;
};

const ProfileProject = memo(
  ({
    id,
    title,
    owner,
    description,
    pledge,
    total_pledge,
    milestone,
    saved = true,
    handleCancelPledge,
    handleDisburse,
    handleRate,
    handleRemove,
    handleReward,
  }: Props) => {
    const handleRemoveProject = () => {
      handleRemove && handleRemove(id);
    };

    const handleRateProject = () => {
      handleRate && handleRate(id);
    };

    const handleRewardProject = () => {
      handleReward && handleReward(id);
    };

    const handleDisburseProject = () => {
      handleDisburse && handleDisburse(id);
    };

    const handleCancelPledgeProject = () => {
      handleCancelPledge && handleCancelPledge(id);
    };

    return (
      <>
        <div className={style.wrapper}>
          <div className={style.title}>{title}</div>
          <div className="flex flex-row w-full">
            <div className="w-3/4 truncate md:mr-4 mr-2">
              <div className="">
                <span>Owner: {owner}</span>
              </div>
              <div className="h-30 whitespace-normal truncate">
                <span>Description: {description}</span>
              </div>
            </div>
            <div className="w-1/4 flex flex-col items-end">
              {!saved && (
                <>
                  <button
                    className={style.btn}
                    onClick={() => {
                      handleRateProject();
                    }}
                  >
                    Rate this Project
                  </button>
                  <button
                    className={style.btn}
                    onClick={() => {
                      handleRewardProject();
                    }}
                  >
                    Reward Recieve
                  </button>
                  <button
                    className={style.btn}
                    onClick={() => {
                      handleDisburseProject();
                    }}
                  >
                    Disburse
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-full">
              <span>{`Total pledge: ${pledge} NEAR(${
                ((pledge * 100) / total_pledge).toFixed(0)
              }%)`}</span>
            </div>
            <div className="w-full text-center">
              <span>{`Milestone Review: ${formatDate(milestone)}`}</span>
            </div>
            <div className="w-full flex justify-end">
              {saved ? (
                <button
                  className={style.btn}
                  onClick={() => {
                    handleRemoveProject();
                  }}
                >
                  Remove Project
                </button>
              ) : (
                <button
                  className={style.btn}
                  onClick={() => {
                    handleCancelPledgeProject();
                  }}
                >
                  Cancel Pledge
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
);

ProfileProject.displayName = "ProfileProject";

export default ProfileProject;
