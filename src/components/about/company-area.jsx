import VideoPopup from '@/src/modals/video-popup';
import React,{useState} from 'react';

const company_content ={
    sub_title:  "TENTANG ACADEMY SHERPA",
    title: <>Sherpa Academy <br />Partner For Your Scholarship</>,
    info_1: <>Sherpa Academy merupakan lembaga berbasis edutech yang secara khusus berfokus pada mentoring persiapan beasiswa dalam negeri untuk mahasiswa dan pelajar SMA tingkat akhir.</>,
    info_2: <>Sherpa Academy dikatakan sebagai lembaga berbasis edutech karena pada pembelajarannya, Sherpa Academy sangat erat dengan penggunaan teknologi, seperti contohnya kelas mentoring yang dilaksanakan melalui zoom meeting dan juga tools lain seperti penggunaan slido dan padlet sebagai bagian dari kurikulum pembelajaran yang diberikan oleh Sherpa Academy.</>,
    info_3: <>​Sherpa Academy juga membuka jangkauan mentoring untuk mahasiswa dan juga pelajar SMA tingkat akhir karena beberapa beasiswa juga secara spesifik menyasar pelajar SMA tingkat akhir. Sehingga, harapannya Sherpa Academy bisa mempersiapkan mereka sedini mungkin untuk meraih beasiswa impian mereka.</>,
}
const {sub_title, title, info_1, info_2, info_3}  = company_content


const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <div className="ab-company-area pt-105 pb-100">
               <div className="container">
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6">
                        <div className="ab-company-section-box">
                           <h4 className="inner-section-subtitle">{sub_title}</h4>
                           <h3 className="tp-section-title">{title}</h3>
                        </div>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="ab-company-right">
                           <div className="ab-company-section-text">
                              <p className="pb-10">{info_1}</p>
                              <p className="pb-10">{info_2}</p>
                              <p className="pb-10">{info_3}</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row align-items-center">
                     <div className="col-xl-4">
                        {/* <div className="ab-company-video">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fas fa-play"></i></a>
                           <span>Watch Demo</span>
                        </div> */}
                     </div>
                     <div className="col-xl-8">
                        <div className="row">

                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                                 <div className="ab-company-fun-fact">
                                    <span>Didirikan Pada Tahun</span>
                                    <h4>2023<em></em></h4>
                                    <p>Di Malang</p>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>Sebanyak</span>
                                    <h4>62<em>%</em></h4>
                                    <p>Siswa yang diterima beasiswa</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>Jangkauan</span>
                                    <h4>38<em></em></h4>
                                    <p>Provinsi (Seluruh Indonesia)</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

             {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
        </>
    );
};

export default CompanyArea;