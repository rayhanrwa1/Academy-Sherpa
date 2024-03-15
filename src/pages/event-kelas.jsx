// pages > index.jsx

import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Webinar from "../components/googleform/Webinar2";

const IndexPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Register Self Development & Scholarship Class"} />
      <Webinar/>
    </Wrapper>
  );
};

export default IndexPage;
