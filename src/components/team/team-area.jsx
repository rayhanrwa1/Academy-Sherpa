// team-area.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinksTwo from "@/src/common/SocialLinkTwo";
import useMultipleAnime from "@/src/hooks/useMultipleAnime"; // Change import path

import team_data from "@/src/data/team-data";

const TeamArea = () => {
  const { dataRef } = useMultipleAnime();

  if (!team_data || !Array.isArray(team_data)) {
    return <div>No team data available</div>;
  }

  return (
    <>
      <div className="tp-team-area tp-team-inner pt-100 pb-75">
        <div className="container">
          <div className="tp-team-section-wrapper tp-team-inner-section mb-70">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="tp-team-section-box text-center">
                  <h5 className="inner-section-subtitle pb-10">
                 Tim Sherpa Academy
                  </h5>
                  <h3 className="tp-section-title mb-0 text-black">
                   Kenalan Yuk Sama Kami!
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row" ref={dataRef}>
            {team_data.slice(0, 9).map((item, i) => (
              <div
                key={i}
                data-index={i}
                className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-70 tp-border-after-${item.cls} team-inner-border-right`}
              >
                <div className="tp-team-item text-center tp-team-inner-title-color z-index">
                  <div className="tp-team-img">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title-sm">
                      <Link href="#">{item.name}</Link>
                    </h4>
                    <span>{item.job_title}</span>
                  </div>
                  <div className="tp-team-social">
                    <SocialLinksTwo social_links_two={item.social_media} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;
