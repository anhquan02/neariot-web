import { useRouter } from "next/router";
import { Fragment, memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import StorageIcon from '@mui/icons-material/Storage';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { Popover } from "@mui/material";

const Account = memo((props: any) => {
  const wallet = useSelector((statex: any) => statex.wallet);
  const router = useRouter();
  const wrapperRef = useRef(null);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [state, setState] = useState({
    anchorEl: null,
    popoverOpen: false,
    popoverId: undefined,
  });
  const aMenu = [
    {
      id: "my-box",
      label: "My Box",
      icon: DeveloperBoardIcon,
      router: "/box/my-box",
    },
    {
      id: "my-storage",
      label: "My Storage",
      icon: StorageIcon,
      router: "/box/my-storage",
    },
  ];

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (event: any) => {
    const { target } = event;
    //@ts-ignore
    if (wrapperRef.current && !wrapperRef.current.contains(target)) {
      setPopoverVisible(false);
    }
  };

  const onNavItemClick = (route: any) => {
    setPopoverVisible(false);
    router.push(route);
  };

  const onRequestSignOut = () => {
    const { walletConnection } = wallet;
    walletConnection.signOut();
    router.push("/");
  };

  const onOpenAccountPopover = (e: any) => {
    setPopoverVisible(false);
    setPopoverVisible(!popoverVisible);
  };

  const onCloseAccountPopover = () => {
    setState({
      anchorEl: null,
      popoverOpen: false,
      popoverId: undefined,
    });
  };

  const onRenderSignInButton = () => {
    return (
      <div className="border-0 rounded-xl bg-indigo-600 text-white py-3 px-4" onClick={onRequestConnectWallet}>
        <button>Connect the wallet</button>
      </div>
    );
  };

  const onRequestConnectWallet = () => {
    const { nearConfig, walletConnection } = wallet;
    console.log(walletConnection);
    walletConnection?.requestSignIn?.(nearConfig?.contractName);
  };

  const onRenderAccountDetail = () => {
    const { walletConnection } = wallet;
    const { anchorEl, popoverOpen, popoverId } = state;
    const accountId = walletConnection?.getAccountId?.();
    let popoverRight = 1000;
    if (typeof window !== "undefined") {
      popoverRight = window?.screen?.width - 15;
    }
    return (
      //   <div className="border-0 rounded-xl bg-gradient-to-r from-teal-300 to-cyan-600 text-white py-2 px-2">
      <div className="border-0 rounded-xl bg-indigo-600 text-white py-2 px-4">
        <button
          onClick={onOpenAccountPopover}
          className="flex md:justify-between mx-2 text-2xl"
        >
          <AccountCircleIcon className="mx-1 my-auto" />
          <div className="mx-1 my-auto">{accountId}</div>
          <ArrowDropDownIcon className="my-auto" />
        </button>
        {popoverVisible && (
          <>
          <div className="md:min-w-[200px] absolute mx-4 z-30" onMouseLeave={() =>onCloseAccountPopover}>
              <div className="w-[20px] h-[20px] rotate-45 bg-white shadow-xl  mt-3 p-3 md:ml-[65%] "/>
          </div>
            <div
              className="absolute md:min-w-[200px] px-4 py-5 mt-5 text-slate-800 bg-white rounded-xl z-40 shadow-xl ">
              {aMenu.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div
                      className="font-semibold"
                      onClick={() => onNavItemClick(item.router)}
                    >
                      <item.icon className="mx-2" />
                      {item.label}
                    </div>
                    <hr className="my-4 md:min-w-full" />
                  </Fragment>
                );
              })}
              <div className="font-semibold mx-2" onClick={onRequestSignOut}>
                <LogoutSharpIcon className="mr-2" />
                Log out
              </div>
            </div>
          </>
        )}
        <Popover
          id={popoverId}
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={onCloseAccountPopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          className=""
        >
          <div className="">
            <button onClick={onRequestSignOut} className="">
              <LogoutSharpIcon className="" />
              <div className="">Logout</div>
            </button>
          </div>
        </Popover>
      </div>
    );
  };

  const onRenderScene = () => {
    const { walletConnection } = wallet;
    const isSigned = walletConnection?.isSignedIn?.();
    if (isSigned) {
      return onRenderAccountDetail();
    }
    return onRenderSignInButton();
  };

  return <>{onRenderScene()}</>;
});

export default Account;
