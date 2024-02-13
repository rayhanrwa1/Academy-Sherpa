import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb-2";
import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";
import HeroBanner from "../../common/hero-banner";
import OfficeLocation from "./office-location";

const Contact = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title={"Kontak"} innertitle={"Kontak"}/>
            <OfficeLocation />
            <ContactFormArea />
            <ContactInner />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Contact;
