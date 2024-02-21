// pages > index.jsx

import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Webinar from "../components/googleform/Webinar4";

const IndexPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Forum Register"} />
      <Webinar/>
    </Wrapper>
  );
};

export default IndexPage;
