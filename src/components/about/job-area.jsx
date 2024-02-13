import ClockIcon from '@/src/svg/clock-icon';
import LocationIconThree from '@/src/svg/location-icon-3';
import Link from 'next/link';
import React from 'react';

const job_data = {
    sub_title: "",
    title: <>Temukan Program  <br /> Sherpa Academy Berikutnya!</>,
    carrer_title: "Open Positions",
    carrer_info: <>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque tristique <br/>
    Et amet risus enim accumsan sit purus sit.</>,
    job_info: [
        {
            id:1, 
            category: "Webinar Beasiswa Dalam Negeri (Vol.01)",
            job_resecudle: "Minggu, 18 Februari 2024",
            job_time: "19:00 WIB - Selesai",
            job_location: "Online",
        },
        {
            id:2, 
            category: "Belum Tersedia",
            job_time: "Belum Tersedia",
            job_location: "Belum Tersedia",
        },
        {
            id:3, 
            category: "Belum Tersedia",
            job_time: "Belum Tersedia",
            job_location: "Belum Tersedia",
        },
        {
            id:4, 
            category: "Belum Tersedia",
            job_time: "Belum Tersedia",
            job_location: "Belum Tersedia",
        },
        {
            id:5, 
            category: "Belum Tersedia",
            job_time: "Belum Tersedia",
            job_location: "Belum Tersedia",
        },


    ],
    job_links: [
      "/event",
      "/404.jsx",
      "/404.jsx",
      "/404.jsx", //Link
      "/404.jsx",
  ],
}
const {sub_title, carrer_info, title, carrer_title, job_info, job_links}  = job_data


const JobArea = ({style_carrer}) => {
    return (
        <>
            <div className="job-area pt-120 pb-120">
               <div className="container"> 
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="job-section-box text-center mb-40">
                           {style_carrer ? 
                              <>
                              <h3 className="tp-section-title">{carrer_title}</h3>
                              <p>{carrer_info}</p>
                              </> 
                              : 
                              <>
                              <h4 className="inner-section-subtitle">{sub_title}</h4>
                              <h3 className="tp-section-title">{title}</h3>
                              </>

                           }
                        </div>
                     </div>
                  </div>
                  {job_info.map((item, index)  => 
                    <div key={index} className="job-post-box">
                     <div className="row align-items-center">
                        <div className=" col-lg-5 col-md-4">
                           <div className="job-post-info d-flex justify-content-start align-items-center">
                              <div className="job-post-category">
                                 <span>{item.category} <br /></span>
                                 <p>{item.job_resecudle}</p>
                              </div>
                           </div>
                        </div>
                        <div className=" col-lg-4 col-md-5">
                           <div className="job-post-wrapper d-flex align-items-center">
                              <div className="job-post-time d-flex align-items-center">
                                  <ClockIcon />
                                 <span>{item.job_time}</span>
                              </div>
                              <div className="job-post-location d-flex align-items-center">
                                 <LocationIconThree />
                                 <span>{item.job_location}</span>
                              </div>
                           </div>
                        </div>
                        <div className=" col-lg-3 col-md-3">
                           <div className="job-post-apply-btn text-start text-md-end">
                              <Link className="tp-btn-inner tp-btn-hover alt-color-orange" 
                                   href={job_links[index]}><span>Dapatkan</span> <b></b>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>                    
                    )
                  } 
               </div>
            </div>
        </>
    );
};

export default JobArea;
