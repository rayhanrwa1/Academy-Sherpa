import team_data from '@/src/data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialLinksTwo from "@/src/common/SocialLinkTwo";

const team_content = {
   sub_title: "Tim Sherpa Academy",
   title: "Para Pendiri Sherpa Academy",
   des: <>Our clients are the companies and startups who <br /> make the world go round,!</>,
}
const {sub_title, title, des}  = team_content; // Menghapus SocialLinksTwo dari destrukturisasi

const TeamArea = ({bg_style}) => {
   return (
       <>
          <div className={`tp-team-area ${bg_style ? "grey-bg pt-120" : "blue-bg"} pb-95`}>   
              <div className="container">
                 <div className={`tp-team-section-wrapper ${bg_style && "tp-team-inner-section"} mb-70`}>
                    <div className="row align-items-end">
                       <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className={`tp-team-section-box ${bg_style && "text-center text-sm-start"}`}> 
                             <h5 className={`${bg_style ? "inner-section-subtitle" : "tp-section-subtitle-4"} pb-10`}>{sub_title}</h5>
                             <h3 className={`${bg_style ? "tp-section-title mb-0 text-black" : "tp-section-title-4"}`}>{title}</h3>
                          </div>
                       </div>
                       {bg_style ?
                          <div className="col-xl-6 col-lg-6 col-md-6">
                             <div className="tp-team-top-content text-center text-md-end">
                                <Link className="tp-btn-inner tp-btn-hover alt-color-orange" href="/team">
                                   <span>Lihat Semua</span>
                                   <b></b>
                                </Link>
                             </div>
                          </div>
                          :
                          <div className="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                             <div className="tp-team-top-content d-flex justify-content-md-start justify-content-end">
                                <p>{des}</p>
                             </div>
                          </div>
                       }
                    </div>
                 </div>
                 <div className="row">
                   {team_data.slice(0, 4).map((item, i)  => 
                       <div key={i} 
                         className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 
                                     tp-team-border-right tp-border-after-${item.cls} 
                                     ${bg_style && "team-inner-border-right"}`}
                                     >                             
                          <div className={`tp-team-item text-center ${bg_style && "tp-team-inner-title-color"} z-index`}>    
                             <div className="tp-team-img">
                                <Image src={item.img} alt="theme-pure" />
                             </div>
                             <div className="tp-team-content">
                                <h4 className="tp-team-title-sm"><Link href="/team-details">{item.name}</Link></h4>
                                <span>{item.job_title}</span>
                             </div>
                             <div className="tp-team-social">
                                <SocialLinksTwo social_links_two={item.social_media} />
                             </div>
                          </div>
                       </div>
                    )} 
                 </div>
              </div>
           </div> 
       </>
   );
};

export default TeamArea;
