import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import TeamArea from "./team-area";

const Team = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Tim Sherpa"} innertitle={"Tim Sherpa"} />
            <TeamArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Team;
