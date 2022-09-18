import { useRouter } from "next/router";
import { memo, useCallback, useState } from "react";
import LineChart from "../../../../components/Chart/LineChart";
import Section from "../../../../components/Section";
import { formatDate } from "../../../../helpers/Utils";
import HelpIcon from "@mui/icons-material/Help";
import { Popover, Typography } from "@mui/material";

const DetailProcjet = memo(() => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const router = useRouter();

  const handleNewSection = () => {
    router.push(`/sandbox/project/${router.query.id}/new-section`);
  };

  const renderButton = () => {
    const owner = true;
    const noSetting = false;
    if (owner) {
      return (
        <>
          <button className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0  w-full h-12  items-center">
            Setting
          </button>
          <button className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0  w-full h-12  items-center">
            Share
          </button>
          <button className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0  w-full h-12  items-center">
            Raise Fund
          </button>
          <button className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0  w-full h-12  items-center">
            Launch Test
          </button>
        </>
      );
    }
    if (!noSetting) {
      return (
        <>
          <button className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0  w-full h-12  items-center">
            Subcribe
          </button>
          <button className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0  w-full h-12  items-center">
            Share
          </button>
        </>
      );
    }
    return (
      <>
        <button className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0  w-full h-12  items-center">
          Subcribe
        </button>
        <button className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0  w-full h-12  items-center">
          Share
        </button>
        <button className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0  w-full h-12  items-center">
          Back This Project
        </button>
        <button className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0  w-full h-12  items-center">
          Test Campaign
        </button>
      </>
    );
  };

  const renderProjectData = () => {
    const data = true;
    if (data) {
      return (
        <div className="w-full bg-white shadow-indigo-600 shadow-sm rounded">
          <LineChart />
        </div>
      );
    }
    return (
      <>
        <div className="w-full md:h-48 h-32 bg-white shadow-indigo-600 shadow-sm rounded flex">
          <span className="align-middle items-center inline-block m-auto text-lg">
            This project has no data to shown
          </span>
        </div>
      </>
    );
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div className="w-full mb-12"></div>
      <div className="w-full lg:px-16 sm:px-8">
        <div className="flex md:flex-row flex-col p-4 justify-between">
          <div className="md:w-6/12 lg:min-h-[300px] md:min-h-[310px] items-center align-middle my-auto pb-2 w-full rounded bg-white mr-4 shadow-indigo-600 shadow-sm  h-full flex-grow">
            <div className="flex flex-row w-full py-2 m-2">
              <div className="flex mx-2 w-3/12">Project Name: </div>
              <span className="flex mx-2 w-9/12 px-2 overflow-x-auto">
                Something here
              </span>
            </div>
            <div className="flex flex-row w-full py-2 m-2">
              <div className="flex mx-2 w-3/12">Description: </div>
              <span className="flex mx-2 w-9/12 px-2 overflow-x-auto">
                Something here
              </span>
            </div>
            <div className="flex flex-row w-full py-2 m-2">
              <div className="flex mx-2 w-3/12">Repository: </div>
              <span className="flex mx-2 w-9/12 px-2 overflow-x-auto">
                github.com/anhquan02
              </span>
            </div>
            <div className="flex flex-row w-full py-2 m-2">
              <div className="flex mx-2 w-3/12">Type: </div>
              <span className="flex mx-2 w-9/12 px-2 overflow-x-auto">
                Public
              </span>
            </div>
            <div className="flex flex-row w-full py-2 m-2">
              <div className="flex mx-2 w-3/12">Create At: </div>
              <span className="flex mx-2 w-9/12 px-2 overflow-x-auto">
                {formatDate(new Date())}
              </span>
            </div>
          </div>
          <div className="lg:w-2/12 pb-2 bg-transparent w-0"></div>
          <div className="md:w-4/12 lg:min-h-[300px] md:min-h-[310px] md:w-of items-center align-middle my-auto pb-2 w-full rounded bg-white ml-4 shadow-indigo-600 shadow-sm h-full">
            <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-2 gap-4 p-2 m-2">
              {renderButton()}
            </div>
            <div className="flex flex-row w-full py-2 m-2">
              <div className="flex mx-2 md:w-4/12 w-2/12">Project Target: </div>
              <span className="flex mx-2 md:w-8/12 w-full px-2 overflow-x-auto">
                100/1000 NEAR
              </span>
            </div>
            <div className="flex flex-row w-full py-2 m-2">
              <div className="flex mx-2 md:w-4/12 w-2/12">Project Rate: </div>
              <span className="flex mx-2 md:w-8/12 w-full px-2 overflow-x-auto">
                4/5
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 pb-8">
          <div className="flex justify-between items-center pb-2">
            <div className=" items-center align-middle h-full text-lg text-slate-800">
              <Typography
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                Project Data
                <div
                  className="inline-block items-center align-baseline  h-full hover:cursor-pointer ml-2 hover:text-indigo-800"
                  // onClick={() => handleEdit()}
                >
                  <HelpIcon className="my-auto" fontSize="small" />
                </div>
              </Typography>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }} className="w-64">
                  Share your realtime update about your project to help
                  investors can learn more.
                </Typography>
              </Popover>
            </div>
            <button className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0 h-12  items-center px-4">
              Explore
            </button>
          </div>
          <hr className="w-full md:mx-4  md:max-w-[40%] border-slate-400 mb-8" />
          {renderProjectData()}
        </div>
        <div className="flex flex-col p-4 pb-8">
          <Section
            title="ABC"
            description="ABC"
            image_base64="abc"
            type="image"
          />
        </div>
        <div className="flex flex-col p-4 pb-8">
          <Section
            title="ABC"
            description="ABC"
            image_base64="abc"
            type="video"
          />
        </div>
        <div className="flex justify-center p-4 pb-8">
          <button
            className="col-span-1 bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-lg border-0 h-12  items-center px-4"
            onClick={() => handleNewSection()}
          >
            Add new Section
          </button>
        </div>
      </div>
    </>
  );
});

DetailProcjet.displayName = "detail_project";

export default DetailProcjet;
