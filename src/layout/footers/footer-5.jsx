import { CopyRight } from '@/src/common/social-links';
import EmailIcon from '@/src/svg/email';
import EmailFour from '@/src/svg/contact-icon';
import PhoneFour from '@/src/svg/phone-icon';
import RightArrow from '@/src/svg/right-arrow';
import Link from 'next/link';
import Image from 'next/image'; 
import React from 'react';
import SocialLinks from '@/src/common/social-links';


import shape_img_1 from "../../../public/assets/img/footer/footer-inner-1.svg";
import shape_img_2 from "../../../public/assets/img/footer/footer-inner-2.svg";
import footer_logo from "../../../public/assets/img/logo/logo-white.png";


const footer_content = {
    info:"Sherpa Academy hadir untuk membantu ribuan mahasiswa dan pelajar SMA tingkat akhir ",
    phone: "+62 856-4834-6907",
    email: "academysherpa@gmail.com",
    footer_lisks : [
        {
            id: 1,
            cls_1: "col-xl-3 col-lg-3",
            cls_2: "footer-col-3-2",
            title: "Bantuan",
            delay: ".7s",
            links: [
                {name: "Laporkan Penyalahgunaan", link: "/contact"},
            ]
        },
        {
            id: 2,
            cls_1: "col-xl-2 col-lg-2",
            cls_2: "footer-col-3-3",
            title: "Other Pages",
            delay: ".9s",
            links: [
               {name: "Home", link: "/"},
               {name: "About", link: "/about"},
               {name: "Event", link: "/blog"},
               {name: "Team", link: "/team"},
               {name: "Contact", link: "/contact"},
            ]
        },

    ],

}
const {info, phone, email, footer_lisks, copy_right}  = footer_content

const FooterFive = ({style_contact, bg_style=true, style_team}) => { 

    return (
        <>
        <div className={`tp-footer__pl-pr ${style_contact && "pt-105"} ${bg_style?'grey-bg-2':''}`}>
               <div className={`tp-footer__area ${style_contact && "p-relative"} tp-footer__tp-border-bottom`}>
                  {style_contact && 
                     <>
                     <div className="tp-footer__shape-1 d-none d-xxl-block">
                        <Image src={shape_img_1} alt="theme-pure" />
                     </div>
                     <div className="tp-footer__shape-2 d-none d-xxl-block">
                        <Image src={shape_img_2} alt="" />
                     </div>
                  </>
                  }
                  <div className="container">
                     <div className="row">

                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                           <div className={`tp-footer__widget ${style_team && "tp-footer__input-inner"} footer-widget-3 footer-col-3-1`}>  
                              <div className="tp-footer__logo mb-25">
                                 <Link href="/">
                                    <Image src={footer_logo} alt="" />
                                 </Link>
                              </div>
                              <div className="tp-footer__contact-info">
                                 <p>{info}</p>
                                 <ul>
                                    <li> 
                                       <span>
                                        <PhoneFour /> 
                                       </span>
                                       <Link className="first-child" href={`tel:085648346907`}>{phone}</Link>
                                    </li>
                                    <li>
                                       <span>
                                        <EmailFour /> 
                                       </span>
                                       <Link href={`mailto:academysherpa@gmail.com`}>{email}</Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>

                        {footer_lisks.map((item, i)  => 
                            <div key={i} className={`${item.cls_1} col-md-6 pb-30 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay=".7s">
                            <div className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}>
                                <h4 className="tp-footer__widget-title">{item.title}</h4>
                                <div className="tp-footer__content">
                                    <ul>
                                        {item.links.map((link, i)  => <li key={i}><Link href={link.link}>{link.name}</Link></li>)} 
                                    </ul>
                                </div>
                            </div>
                        </div>
                            )
                        } 
                        <div className="col-xl-4 col-lg-4 col-md-6 pb-30  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                           <div className="tp-footer__widget footer-widget-3 footer-widget-5 footer-col-3-4">
                              <h4 className="tp-footer__widget-title">Our Newsletter</h4>
                              <div className="tp-footer__input mb-35 p-relative">
                                 <form onSubmit={e => e.preventDefault()}>
                                    <input type="text" placeholder="Email Untuk Bisnis" />
                                    <span>
                                        <EmailIcon /> 
                                    </span>
                                    <button>
                                        <RightArrow /> 
                                    </button>
                                 </form>
                              </div>
                              <div className="tp-footer__social-3">
                                 <h4>Social media</h4>
                                 <SocialLinks /> 
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-copyright__area pt-20 pb-20">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                           <div className="tp-copyright__text tp-copyright__text-3 text-center">
                            <span><CopyRight /> </span> 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
        </>
    );
};

export default FooterFive;