import { memo, useCallback, useEffect, useLayoutEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CustomButton from "../../../components/CustomButton";
import Explore from "../../../components/Explore";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { sha256 } from "crypto-hash";
import { formatDate } from "../../../helpers/Utils";

const DetailScreen = memo(() => {
  const [storageId, setStorageId] = useState<any>("");
  const [data, setData] = useState<any>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [apiKey, setApiKey] = useState<string>("");
  const [updateData, setUpdateData] = useState<any[]>();
  const [isEditing, setIsEditing] = useState(false);
  const wallet = useSelector((state: any) => state.wallet);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    (async () => {
      await getDetail();
    })();
  }, []);

  useEffect(() => {
    if (router.query.id) {
      setStorageId(router.query.id);
    }
  }, [router]);

  const getDetail = async () => {
    const { id } = query;
    let content = "";
    if (id === null || id === "" || id === undefined) {
      content = "Could not found any object have that id!";
      router.back();
      return;
    }
    const { contract } = wallet;

    await contract
      ?.get_cluster_data(
        {
          id: id,
        },
        50000000000000
      )
      .then((res: any) => {
        if (res) {
          setData({
            id: res.id,
            name: res.name,
            description: res.description,
            apikey_hash: res.apikey_hash,
            data: res.data,
          });
          setName(res.name);
          setDescription(res.description);
        } else {
          console.log(res);
          router.back();
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
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
    setUpdateData(sampleDate);
  };

  const handleEdit = async () => {
    const { id } = query;
    const { contract } = wallet;
    await contract
      ?.set_cluster(
        {
          id: id,
          name: name,
          description: description,
        },
        50000000000000
      )
      .then((res: any) => {
        if (res) {
          setData({
            ...data,
            name: name,
            description: description,
          });          
          setIsEditing(false);
        } else {
          console.log(res);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const Storage = useCallback(() => {
    if (!isEditing) {
      return (
        <div className="lg:w-6/12 w-full h-auto bg-white md:mx-4 rounded-xl my-4 p-2 flex lg:flex-nowrap flex-col">
          {/* <div className="grid grid-cols-2 gap-y-4 overflow-auto"> */}
          <div className="flex flex-row w-full py-2">
            <div className="flex mx-2 w-3/12">Storage Name:</div>
            <div className="flex mx-2 w-8/12">{data?.name || ""}</div>
          </div>
          <div className="flex flex-row w-full py-2">
            <div className="flex mx-2 w-3/12">Decription:</div>
            <div className="flex mx-2 w-8/12">
              <span className="flex-start flex w-full">
                {data?.description || ""}
              </span>
            </div>
            <div
              className="flex px-2  my-auto cursor-pointer hover:ring hover:outline-none items-center h-full align-middle"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <EditIcon className="item-center" />
            </div>
          </div>
          <div className="flex flex-row w-full py-2">
            <div className="flex mx-2 w-3/12">Create At:</div>
            <div className="flex mx-2 w-8/12">{formatDate(Date.now())}</div>
          </div>
          <div className="flex flex-row w-full py-2">
            <div className="flex mx-2 w-3/12">Update At</div>
            <div className="flex mx-2 w-8/12">{formatDate(Date.now())}</div>
          </div>
          {/* </div> */}
        </div>
      );
    }
    return (
      <div className="lg:w-6/12 w-full h-auto bg-white md:mx-4 rounded-xl my-4 p-2 flex lg:flex-nowrap flex-col">
        {/* <div className="grid grid-cols-2 gap-y-4 overflow-auto"> */}
        <div className="flex flex-row w-full py-2">
          <div className="flex mx-2 w-3/12">Storage Name:</div>
          <input
            type="text"
            className="flex mx-2 w-8/12 bg-slate-300 px-2"
            name=""
            id=""
            autoFocus
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row w-full py-2">
          <div className="flex mx-2 w-3/12">Decription:</div>
          <div className="flex mx-2 w-8/12">
            <input
              type="text"
              className="flex-start flex w-full bg-slate-300 px-2"
              name=""
              id=""
              defaultValue={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div
            className="flex my-auto cursor-pointer hover:ring hover:outline-none items-center h-full align-middle"
            onClick={handleEdit}
          >
            <SaveIcon className="item-center" />
          </div>
        </div>
        <div className="flex flex-row w-full py-2">
          <div className="flex mx-2 w-3/12">Create At:</div>
          <div className="flex mx-2 w-8/12">{formatDate(Date.now())}</div>
        </div>
        <div className="flex flex-row w-full py-2">
          <div className="flex mx-2 w-3/12">Update At</div>
          <div className="flex mx-2 w-8/12">{formatDate(Date.now())}</div>
        </div>
        {/* </div> */}
      </div>
    );
  }, [data, isEditing]);

  const handleGetAPIKey = async (
    secrectKey: String = "hiudaysgdyguasbhcsyg"
  ) => {
    const { contract, walletConnection } = wallet;
    const userId = walletConnection.getAccountId();
    let raw_api_key = secrectKey + userId + storageId + Date.now().toString();
    let generatedApikey = await sha256(raw_api_key);
    let apiKeyHash = await sha256(generatedApikey);
    await contract
      ?.set_apikey_hash({
        id: storageId,
        apikey_hash: apiKeyHash,
      })
      .then((res: any) => {
        if (res) {
          navigator.clipboard.writeText(generatedApikey);
          setApiKey(generatedApikey);
        } else {
          console.log(res);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleDeleteStorage = () => {};

  return (
    <>
      <div className="lg:py-16 md:py-12 py-8 items-center flex flex-wrap md:flex-row flex-col h-full md:w-full mx-auto lg:px-16 md:px-12 px-8">
        <div className="flex lg:flex-nowrap flex-wrap w-full pb-12">
          {Storage()}
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
            {updateData?.map((item, index) => {
              return (
                <div
                  className="flex flex-row w-full py-2 overflow-x-auto "
                  key={index}
                >
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
