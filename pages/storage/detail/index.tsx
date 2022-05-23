import { memo, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CustomButton from "../../../components/CustomButton";
import Explore from "../../../components/Explore";

const DetailScreen = memo(() => {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    const sampleDate = [
      {
        time: "5/18/2022 17:00:00",
        value: "Value 1",
      },
      {
        time: "5/18/2022 16:00:00",
        value: "Value 2",
      },
      {
        time: "5/18/2022 15:00:00",
        value: "Value 3",
      },
      {
        time: "5/18/2022 14:00:00",
        value: "Value 4",
      },
      {
        time: "5/18/2022 13:00:00",
        value: "Value 5",
      },
    ];
    setData(sampleDate);
  }, []);

  const handleEdit = () => {};

  const handleGetAPIKey = () => {};

  const handleDeleteStorage = () => {};

  return (
    <>
      <div className="lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 px-8">
        <div className="flex lg:flex-nowrap flex-wrap w-full pb-12">
          <div className="lg:w-6/12 w-full h-auto bg-white md:mx-4 rounded-xl my-4 p-2 flex lg:flex-nowrap flex-col">
            {/* <div className="grid grid-cols-2 gap-y-4 overflow-auto"> */}
            <div className="flex flex-row w-full py-2">
              <div className="flex mx-2 w-3/12">Storage Name:</div>
              <div className="flex mx-2 w-9/12">Ciuz&aposs Storage</div>
            </div>
            <div className="flex flex-row w-full py-2">
              <div className="flex mx-2 w-3/12">Decription:</div>
              <div className="flex mx-2 w-9/12">
                <span className="flex-start flex ">
                  This is some decription This is some decription This is some
                  decription This is some decription This is some decription
                </span>
                <div
                  className="flex px-2 my-auto cursor-pointer hover:ring hover:outline-none items-center h-full align-middle"
                  onClick={handleEdit}
                >
                  <EditIcon />
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full py-2">
              <div className="flex mx-2 w-3/12">Create At:</div>
              <div className="flex mx-2 w-9/12">{Date.now()}</div>
            </div>
            <div className="flex flex-row w-full py-2">
              <div className="flex mx-2 w-3/12">Update At</div>
              <div className="flex mx-2 w-9/12">{Date.now()}</div>
            </div>
            {/* </div> */}
          </div>
          <div className="lg:w-6/12 w-full h-auto bg-transparent md:mx-4 rounded-xl my-4 p-2 flex lg:flex-nowrap flex-row">
            <div className="flex md:flex-nowrap md:flex-row flex-col w-full h-auto items-center align-middle my-auto py-2">
              <div className="flex md:w-6/12 w-full md:justify-end md:mx-4 mx-2 align-middle items-center md:py-4 py-2">
                <CustomButton
                  label="Get API Key"
                  className_box="my-auto md:py-4 py-2 "
                  className_button="p-2"
                  onClickButton={handleGetAPIKey}
                />
              </div>
              <div className="flex md:w-6/12 w-full md:justify-start md:mx-4 mx-2 align-middle items-center md:py-4 py-2">
                <CustomButton
                  label="Delete This Storage"
                  className_box="my-auto md:py-4 py-2 "
                  className_button="p-2"
                  onClickButton={handleDeleteStorage}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap w-full pb-8">
          <div className="lg:w-8/12 md:w-10/12 w-full h-auto bg-white rounded-xl my-4 p-4 flex lg:flex-nowrap flex-col mx-auto">
            <div className="flex flex-row w-full py-2 ">
              <div className="text-center align-middle mx-auto items-center w-full text-xl font-semibold border-b border-black pb-4">
                Your last 100 value
              </div>
            </div>
            <div className="flex flex-row w-full py-2 overflow-x-auto">
              <div className="flex text-lg w-1/12">STT</div>
              <div className="flex text-lg w-8/12">Value</div>
              <div className="flex text-lg w-3/12">Update Time</div>
            </div>
            {data?.map((item, index) => {
              return (
                <div className="flex flex-row w-full py-2 overflow-x-auto " key={index}>
                  <div className="flex w-1/12 pl-2">{index}</div>
                  <div className="flex w-8/12 ">{item.value}</div>
                  <div className="flex w-3/12 flex-wrap overflow-x-hidden">
                    <div className="">doaklsndoisadjosalndsalkndalksndalks</div>
                    {item.time}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Explore />
      </div>
    </>
  );
});

DetailScreen.displayName = "detail_screen";

export default DetailScreen;
