import React from 'react';


import img_1 from "../../../public/assets/img/contact/contact-icon-sm-5.png";
import img_2 from "../../../public/assets/img/contact/contact-icon-sm-6.png";
import img_3 from "../../../public/assets/img/contact/contact-icon-sm-7.png";
import Image from 'next/image';
import Link from 'next/link';


// office location data
const office_data = [
    {
        id: 1, 
        cls:"",
        img: img_1,
        location: "Jakarta ( Virtual Office)",
        address: <>Jl. Salemba Raya No.16, RT.3/RW.6, Kenari, Kec. Senen, <br /> Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta</>,
    },
    {
        id: 2, 
        cls:"p-relative",
        img: img_2,
        badge: "Kantor Pusat",
        location: "Malang",
        address: <>Jl. Raya Tlogomas No. 246 Malang, <br /> Jawa Timur</>,
    },
    {
        id: 3, 
        cls:"",
        img: img_3,
        location: "Surabaya ( Virtual Office)",
        address: <>Jalan Ketintang Catur Tunggal No.19, <br />Ketintang, Sukolilo, Kota Surabaya, Jawa Timur</>,
    },
]

const OfficeLocation = () => {
    return (
      <>
        <div className="contact-info-area pb-90">
          <div className="container">
            <div className="row">
              {office_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 mb-30">
                  <div className={`contact-info-item ${item.cls}`}>
                    {item.badge && (
                      <div className="contact-info-badge">
                        <span>Kantor Pusat</span>
                      </div>
                    )}
                    <div className="contact-info-img">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="contact-info-title-box">
                      <h5 className="contact-info-title-sm">
                        <Link href="#">{item.location}</Link>
                      </h5>
                      <p>{item.address}</p>
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

export default OfficeLocation;