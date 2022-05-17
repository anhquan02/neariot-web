import { memo } from "react";

type Props = {
  label: string;
  _className?: string;
  onCreate: () => void;
};

const CreateCard = memo(({ label, _className, onCreate }: Props) => {
  return (
    <>
      <div className="mb-4 mx-4 w-full">
        <label className="text-lg uppercase text-slate-800">Welcome</label>
        <div className="bg-white flex flex-wrap border shadow-lg rounded-xl mx-auto my-2 py-2 cursor-pointer lg:w-3/12 md:w-4/12 sm:w-6/12 items-center w-full" onClick={onCreate}>
          <div className=" mx-auto items-center align-middle justify-center px-2 py-4">
            <button className="mx-auto justify-center items-center">
              {label}
            </button>
          </div>
        </div>
      </div>
      <hr className=" w-full mx-4 md:max-w-[25%]  border-black block mb-8" />
    </>
  );
});

export default CreateCard;
