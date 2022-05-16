import { useRouter } from "next/router";
import { Fragment, memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
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
      icon: DeveloperBoardIcon,
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
    const { walletCollection } = wallet;
    walletCollection.signOut();
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
      <div className="" onClick={onRequestConnectWallet}>
        <button>Connect the wallet</button>
      </div>
    );
  };

  const onRequestConnectWallet = () => {
    const { nearConfig, walletConnection } = wallet;
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
      <div className="">
        <button onClick={onOpenAccountPopover} className="">
          <AccountCircleIcon className="" />
          <div className="">{accountId}</div>
          <ArrowDropDownIcon className="" />
        </button>
        {popoverVisible && (
          <div className="">
            {aMenu.map((item, index) => {
              return (
                <Fragment key={index}>
                  <div className="" onClick={() => onNavItemClick(item.router)}>
                    <item.icon className="" />
                    {item.label}
                  </div>
                  <hr className="my-4 md:min-w-full" />
                </Fragment>
              );
            })}
            <div className="" onClick={onRequestSignOut}>
              <LogoutSharpIcon className="" />
              Log out
            </div>
          </div>
        )}
        <Popover
          id={popoverId}
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={onCloseAccountPopover}
          anchorPosition={{ top: 70, left: popoverRight }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
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
    const { walletCollection } = wallet;
    const isSigned = walletCollection?.isSignedIn?.();
    if (isSigned) {
      return onRenderAccountDetail();
    }
    return onRenderSignInButton();
  };

  return <>{onRenderScene()}</>;
});

export default Account;
