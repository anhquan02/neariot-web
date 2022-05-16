import { Button } from "@mui/material";

import { memo } from "react";
import Account from "../Account";

const Header = memo((props: any) => {
  return (
    <>
      <nav className="top-0 z-10 bg-transparent w-full p-4 items-center flex md:flex-nowrap md:justify-start md:flex-row">
        <div className="w-full mx-auto items-center flex md:flex-nowrap md:px-10 px-4">
          <div className="flex justify-start md:w-auto ">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
            <span className="px-4 text-2xl font-semibold align-middle items-center my-auto">Name</span>
          </div>     
          <div className="flex justify-start md:w-auto items-center">
            <button className="px-4 py-auto text-xl text-slate-800">
              Usecase
            </button>
            <button className="px-4 py-auto text-xl text-slate-800">
              Pricing
            </button>
            <button className="px-4 py-auto text-xl text-slate-800">
              Docs
            </button>
            <button className="px-4 py-auto text-xl text-slate-800">
              Help
            </button>
          </div>  
        </div>
          <div className="flex justify-end md:w-auto md:flex-nowrap md:min-w-[200px] items-center"><Account /></div>   
      </nav>
    </>
  );
});

export default Header;
