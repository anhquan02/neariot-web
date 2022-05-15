import "../styles/globals.css";
import { useEffect, useState } from "react";
import store from "../redux/store";
import { onUpdateWallet } from "../redux/action/wallet";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { initContract } from "../backed/util";
import { hotjar } from "react-hotjar";

function MyApp({ Component, pageProps,...props }: { Component: any; pageProps: any }) {

  const [state,setState] = useState({isConnected:false})

  useEffect(() => {
    //@ts-ignore
    window.nearInitPromise = initContract().then(({ contract, currentUser, nearConfig, walletCollection }) => {
        store.dispatch(
          onUpdateWallet({
            contract,
            currentUser,
            nearConfig,
            walletCollection,
          })
        );
        return Promise.resolve();
      })
      .then(() => {
        hotjar.initialize(2962642, 6);
        setState({
          isConnected: true,
        });
      })
      .catch(console.error);
  });
  return (
    <>
      <div className="form_bg"/>
        {state.isConnected?(
          <Provider store={store}>
          <Layout {...props} >
            <Component {...props} {...pageProps}/>
          </Layout>
          </Provider>
        ):null}      
    </>
  )
}

export default MyApp;
