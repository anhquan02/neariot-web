import { memo, useState } from "react";
import Account from "../Account";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const Header = memo((props: any) => {
  const [collapseShow, setCollapeShow] = useState("hidden");

  return (
    <>
      <nav className="top-0 z-20 bg-transparent w-full p-4 items-center flex md:flex-nowrap md:justify-start md:flex-row border-b-1 shadow-lg md:left-0 md:top-0 md:overflow-y-auto md:overflow-hidden ">
        <div className="w-full mx-auto items-center flex md:flex-nowrap md:px-10 px-4">
          <div className="flex justify-start md:w-auto ">
            <Link href={"/"}>
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10 visible object-contain"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </Link>
            <span className="md:flex px-4 text-2xl font-semibold align-middle items-center my-auto md:visible hidden ">
              Neariot
            </span>
            <div
              className="flex md:hidden visible my-auto ml-2 cursor-pointer"
              onClick={() => setCollapeShow("visible")}
            >
              <DehazeIcon className="" fontSize="large" />
            </div>
          </div>
          <div className="md:flex justify-start md:w-auto items-center md:visible hidden">
            <Link href={"/"}>
              <a href="#" className="px-4 py-auto text-xl text-slate-900 ">
                Usecase
              </a>
            </Link>
            <Link href={"/"}>
              <a href="#" className="px-4 py-auto text-xl text-slate-900 ">
                Pricing
              </a>
            </Link>
            <Link href={"/"}>
              <a href="#" className="px-4 py-auto text-xl text-slate-900 ">
                Docs
              </a>
            </Link>
            <Link href={"/"}>
              <a href="#" className="px-4 py-auto text-xl text-slate-900 ">
                Help
              </a>
            </Link>
          </div>
        </div>
        <div
          className={
            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-50 bg-white px-2 overflow-y-auto overflow-x-auto h-auto items-center flex-1 rounded  " +
            collapseShow
          }
        >
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
            <div className="flex flex-wrap">
              <div className="w-6/12 px-4">
                <Link href={"/"}>
                  <a
                    href="#"
                    className="md:block text-left md:pb-2 mr-0 inline-block whitespace-nowrap p-4 px-0"
                  >
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10 visible object-contain"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="w-6/12 flex justify-end">
                <CloseIcon
                  fontSize="large"
                  className="cursor-pointer whitespace-nowrap m-4 mx-0"
                  onClick={() => setCollapeShow("hidden")}
                />
              </div>
            </div>
            <ul className="flex-col list-none">
              <li className="mt-2">
                <Link href={"/"}>
                  <a
                    href="#"
                    className="px-4 py-auto text-xl text-slate-900 items-center "
                  >
                    Usecase
                  </a>
                </Link>
              </li>
              <li className="mt-2">
                <Link href={"/"}>
                  <a
                    href="#"
                    className="px-4 py-auto text-xl text-slate-900 items-center "
                  >
                    Pricing
                  </a>
                </Link>
              </li>
              <li className="mt-2">
                <Link href={"/"}>
                  <a
                    href="#"
                    className="px-4 py-auto text-xl text-slate-900 items-center "
                  >
                    Docs
                  </a>
                </Link>
              </li>
              <li className="mt-2">
                <Link href={"/"}>
                  <a
                    href="#"
                    className="px-4 py-auto text-xl text-slate-900 items-center "
                  >
                    Help
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end md:w-auto md:flex-nowrap md:min-w-[200px] items-center">
          <div className="md:mx-auto items-center">
            <Account />
          </div>
        </div>
      </nav>
    </>
  );
});

Header.displayName = "header"

export default Header;
