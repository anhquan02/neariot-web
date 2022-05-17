import { memo, useCallback } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

type Props = {
  id: string;
  name: string;
  create_at: string;
  owner_id?: string;
  status?: string;
  _delete?: boolean;
  onClickCard?: (id: any) => void;
  onClickDelete?: (id: any) => void;
};

const Card = memo(
  ({
    id,
    name,
    create_at,
    owner_id,
    status,
    _delete = true,
    onClickCard,
    onClickDelete,
  }: Props) => {
    const onClickDeleteStorage = () => {
      onClickDelete?.(id);
    };
    
    const onClickDetailStorage = useCallback(() => {
      onClickCard?.(id);
    },[onClickCard]);

    return (
      <>
        <div className="w-full h-full border rounded-xl drop-shadow-lg bg-white ">
          <div
            className="cursor-pointer"
            onClick={() => onClickDetailStorage()}
          >
            <div className="mt-2 mx-2 ">
              <label className="text-slate-800 font-semibold ">ID: </label>
              <span className="text-sm">{id}</span>
            </div>
            <hr className="my-2 md:min-w-fit mx-2" />
            <div className="mx-2">
              <div className="mx-2 my-2">
                <label className="text-lg font-semibold text-slate-700">
                  Name:{" "}
                </label>
                <span className="text-sm">{name}</span>
              </div>
              <div className="mx-2 my-2">
                <label className="text-lg font-semibold text-slate-700">
                  Create At:{" "}
                </label>
                <span className="text-sm">{create_at}</span>
              </div>
              {status && (
                <div className="mx-2 my-2">
                  <label className="text-lg font-semibold text-slate-700">
                    status:{" "}
                  </label>
                  <span className="text-sm">{status}</span>
                </div>
              )}
              {owner_id && (
                <div className="mx-2 my-2">
                  <label className="text-lg font-semibold text-slate-700">
                    Owner:{" "}
                  </label>
                  <span className="text-sm">{owner_id}</span>
                </div>
              )}
            </div>
            <hr className="mt-2 mb-1 md:min-w-fit mx-2" />
          </div>
          {_delete && (
            <div className="flex flex-wrap w-full items-center mr-2  cursor-pointer">
              <div
                className="ml-auto mr-3 p-1 mb-1"
                onClick={() => onClickDeleteStorage()}
              >
                <DeleteOutlineIcon className="" fontSize="large" />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
);

export default Card;
