import React, { useEffect } from "react"; // Mengimpor useEffect dari React
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "5a4b2ae7-555c-4bd2-8cda-ca695538f41a";
    const crispScript = document.createElement("script");
    crispScript.src = "https://client.crisp.chat/l.js";
    crispScript.async = 1;
    document.head.appendChild(crispScript);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle={"Home"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
