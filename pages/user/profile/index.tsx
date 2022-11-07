import { Fragment, useState } from "react";
import ProfileProject from "../../../components/Card/ProfileProject";

const ProfileScreen = () => {
  const [tab, setTab] = useState(0);

  const handleCancelPledge = (id: string) => {
    console.log("cancel pledge", id);
  };

  const handleRemove = (id: string) => {
    console.log("remove", id);
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

  //render content depend on tab
  const renderContent = () => {
    switch (tab) {
      case 0:
        return (
          <>
            {listSavedProject.map((item, index) => {
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
            {listOwnProject.map((item, index) => {
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
