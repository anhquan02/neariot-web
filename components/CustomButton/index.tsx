import { memo } from "react";

type Props ={
    className_box?:string;
    className_button?:string;
    className_icon?:string;
    _icon?:any;
    label?:string;
    icon_size?:"small" | "inherit" | "large" | "medium" | undefined;
    onClickButton?:() =>void;
}

const CustomButton = memo(({className_box,className_button,className_icon,label,_icon,onClickButton,icon_size}:Props) => {

  return (
    <>
      <div className={className_box +" bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800/90 hover:shadow-indigo-500/40 text-white rounded-xl border-0  w-full  items-center h-full"}>
        <button
          className={className_button + " w-full align-middle my-auto h-full bg-transparent font-semibold px-auto "}
          onClick={onClickButton}
        >
          {_icon &&<_icon
            className={className_icon||"mr-4 align-middle items-center white"}
            fontSize={icon_size || "medium"}
          />}
          {label||"Submit"}
        </button>
      </div>
    </>
  );
});

export default CustomButton;
