import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../../components/CustomButton";
import Explore from "../../../components/Explore";

const CreateScreen = memo((props: any) => {
  const wallet = useSelector((state: any) => state.wallet);
  const [name, setName] = useState("");
  const [descriptions, setDescriptions] = useState("");

  const router = useRouter();

  const [user, setUser] = useState(null);

  const handleCreateStorage = async (e:any) => {
    e.preventDefault();
    const { contract } = wallet;
    // console.log(contract)
    await contract
      ?.new_cluster?.(
        {
          name: name,
          descriptions: descriptions,
        },
        50000000000000
      )
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 px-8">
        <div className="mb-8 md:mx-4 w-full">
          <div className="pb-4">
            <label className="text-lg text-slate-800 ">
              Create new Storage
            </label>
          </div>
        </div>
        <hr className="w-full md:mx-4  md:max-w-[40%] border-slate-400 mb-8" />
        <div className="w-full lg:px-48 md:px-32 sm:px-16">
          <form className="">
            <div className="flex md:flex-row flex-col">
              <div className="md:w-4/12 lg:w-2/12 item-center align-middle mr-5 whitespace-nowrap my-auto pb-2 w-full">
                <label htmlFor="">Name </label>
                <span className="text-red-700">*</span>
              </div>
              <div className="md:w-8/12 lg:w-10/12 item-center align-middle  my-auto pb-2 w-full">
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-400 text-slate-600 bg-white rounded-xl text-sm shadow outline-none focus:outline-none focus:ring w-full overflow-x-hidden"
                  placeholder="Type something here"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col mb-2">
              <div className="md:w-4/12 lg:w-2/12 item-center align-middle mr-5 whitespace-nowrap my-auto pb-2 w-full">
                <label htmlFor="">Decriptions </label>
                <span className="text-red-700">*</span>
              </div>
              <div className="md:w-8/12 lg:w-10/12 item-center align-middle  my-auto pb-2 w-full">
                <textarea
                  placeholder="Type something here"
                  className="border-0 px-3 py-3 placeholder-slate-400 text-slate-600 bg-white rounded-xl text-sm shadow outline-none focus:outline-none focus:ring w-full my-auto overflow-x-hidden"
                  onChange={(e) => {
                    setDescriptions(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-nowrap flex-row mb-2">
              <div className="lg:w-2/12 ml-auto lg:mr-2 md:w-4/12 h-4 md:mx-2 my-auto "></div>
              <div className="overflow-x-auto md:w-8/12 lg:w-10/12 flex">
                <input
                  type="checkbox"
                  className=" align-middle my-auto lg:w-4 md:w-8 mx-2 "
                />
                <span className="">
                  {`By clicking the submit button below, I hereby agree to and accept the following terms and conditions of \${Name}`}
                </span>
              </div>
            </div>
            <div className="flex flex-nowrap flex-row mb-2">
              <div className="lg:w-2/12 ml-auto lg:mr-2 md:w-4/12 h-4 md:mx-2 my-auto "></div>
              <div className="overflow-x-auto md:w-8/12 lg:w-10/12 flex">
                <input
                  type="checkbox"
                  className=" align-middle my-auto lg:w-4 md:w-8 mx-2 "
                />
                <span className="">
                  {`By clicking the submit button below, you will spend 0.1 NEAR as a fee for this storage`}
                </span>
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <CustomButton
                className_box="px-2 py-2 lg:w-8/12 md:w-6/12 w-full mx-auto my-4"
                className_button="py-2"
                onClickButton={(e)=>{handleCreateStorage}}
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
