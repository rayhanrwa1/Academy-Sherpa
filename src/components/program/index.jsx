import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-3";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-8";
import React from "react";
import BlogGrid from "./blog-grid";
import Portfolio from "./portfolio";
// import JobArea from "../../components/about/job-area";

const Blog = () => {
  return (
    <>
      <HeaderSix />
      <main>
        <BreadcrumbTwo title={"Program"} innertitle={"Program"} />
        <BlogGrid />
        <Portfolio />
        {/* <JobArea /> */}
      </main>
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default Blog;
