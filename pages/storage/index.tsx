import { memo, useEffect, useState } from "react";
import Card from "../../components/Card";
import CreateCard from "../../components/Card/CreateCard";
import SearchIcon from "@mui/icons-material/Search";
import Explore from "../../components/Explore";
import { useRouter } from "next/router";

const Storage = memo((props: any) => {
  const [data, setData] = useState<any[]>();
  const router = useRouter();

  useEffect(() => {
    const sampleData = [
      {
        id: "1",
        name: "neariot-1",
        create_at: "2022",
      },
      {
        id: "2",
        name: "neariot-2",
        create_at: "2022",
      },
      {
        id: "3",
        name: "neariot-3",
        create_at: "2022",
      },
    ];
    setData(sampleData);
    // setData([])
  }, []);

  const handleClickDetail = (id: any) => {
    alert(id);
  };

  const handleCreateStorage = () => {
    router.push("/storage/create");
  };

  const Storage = () => {
    if (data?.length == 0) {
      return (
        <>
          <div className="mx-auto my-auto py-24 w-full">
            <div className="bg-white flex flex-wrap border shadow-lg rounded-xl mx-auto my-2 py-2 cursor-pointer lg:w-3/12 md:w-4/12 sm:w-6/12 items-center w-full">
              <div className=" mx-auto items-center align-middle justify-center px-2 py-4">
                <button
                  className="mx-auto justify-center items-center"
                  onClick={handleCreateStorage}
                >
                  You dont have any storage, lets create?
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
                onClickCard={(id) => handleClickDetail(id)}
              />
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 sm:px-8 px-4 sm:mx-auto">
        <CreateCard
          label="Create new key value storage"
          welcome="Storage"
          onCreate={() => handleCreateStorage()}
        />
        <div className="w-full flex pb-12 md:px-2 justify-between">
          <div className="">
            <span className="align-middle items-center text-lg  text-slate-800">
              Manage your storage
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
        <div className="w-full flex items-center">{Storage()}</div>
        <Explore />
      </div>
    </>
  );
});

Storage.displayName = "storage_screen"

export default Storage;
