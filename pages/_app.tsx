import "../styles/globals.css";
import { useEffect, useLayoutEffect, useState } from "react";
import store from "../redux/store";
import { onUpdateWallet } from "../redux/action/wallet";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { initContract } from "../backed/util";


function MyApp({ Component, pageProps,...props }: { Component: any; pageProps: any }) {

  const [state,setState] = useState({isConnected:false})

  useEffect(() => {
    // @ts-ignore
    window.nearInitPromise = initContract().then(({ contract, currentUser, nearConfig, walletConnection }) => {
        store.dispatch(
          onUpdateWallet({
            contract,
            currentUser,
            nearConfig,
            walletConnection,
          })
        );
        return Promise.resolve();
      })
      .then(() => {        
        setState({
          isConnected: true,
        });
      })
      .catch(console.error);
  },[]);

  return (
    <>
      <div className="form_bg z-0"/>
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
