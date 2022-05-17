import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = (props: any) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setScrolling(false);
    }
    if (window.scrollY !== 0) {
      setScrolling(true);
    }
  };

  const { children } = props;

  return (
    <>
      <Head {...props}>
        <title>Some Title</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="" style={scrolling ? { background: "#fff" } : {}}>
        <Header />
      </div>
      <div className="">
        <div className="z-10">{children}</div>
        {/* <div className={styles.footer}>
                    <Footer />
                </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
