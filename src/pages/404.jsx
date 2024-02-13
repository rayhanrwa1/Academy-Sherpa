import Link from "next/link";
import React, { useState, useEffect } from "react";
import SEO from "../common/seo";
import Footer from "../layout/footers/footer";
// import HeaderFour from "../layout/headers/header-6";

// error shape import here 
import error_shape_1 from "../../public/assets/img/login/error-shape.png";
import error_shape_2 from "../../public/assets/img/login/text-404.png";
import Image from "next/image";


const Index = () => {
  // Daftar teks yang berbeda untuk pesan kesalahan
  const errorMessages = [
    "Halamannya Udah Dihapus, Kayak Kenangan Mantan",
    "Hiks, Sedihnya. Halamannya Kayak Mantan yang Move On",
    "404 Error: Halaman tidak ditemukan",
    "404 Error: Halaman Terjebak di Friendzone",
    "Maaf, halaman yang Anda cari tidak ada"
  ];

  // Daftar teks yang berbeda untuk pesan informasi
  const infoMessages = [
    "Hiks, sedihnya. Halamannya kayak mantan yang udah move on dan gak mau diajak balikan.",
    "Tenang, guys. Masih banyak halaman lain yang lebih menarik di sini. Kayak gebetan baru yang lebih cantik dan ganteng!",
    "Kami mohon maaf atas ketidaknyamanan ini. Sabar ya, guys. Nanti pasti beres kok. Kayak jerawat yang akhirnya sembuh.",
    "Hmm, kayaknya ada yang salah nih. Mungkin si admin lupa ngasih akses ke halamannya. Lebih lasinnya: Halamannya terjebak di friendzone, kayak kamu yang gak dilirik gebetan.",
    "Duh, sedihnya. Halamannya kayak kenangan mantan yang udah move on dan gak mau diajak balikan. "
  ];

  // State untuk menyimpan pesan kesalahan dan pesan informasi saat ini
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  // Fungsi untuk memilih pesan secara acak dari daftar
  const chooseRandomMessage = (messageList, setMessage) => {
    const randomIndex = Math.floor(Math.random() * messageList.length);
    setMessage(messageList[randomIndex]);
  };

  // Mengatur pesan kesalahan dan pesan informasi saat komponen dimuat
  useEffect(() => {
    chooseRandomMessage(errorMessages, setErrorMessage);
    chooseRandomMessage(infoMessages, setInfoMessage);
  }, []);

  return (
    <>
      <SEO pageTitle={"404-Error Page"} />
      {/* <HeaderFour style_error={true} /> */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="tp-error-left-shape">
                <Image src={error_shape_1} alt="theme-pure" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center mb-40">
                      <Image src={error_shape_2} alt="theme-pure" />
                    </div>
                    <div className="tp-error-text-box text-center">
                      <h4 className="error-title-sm">{errorMessage}</h4>
                      <p>{infoMessage}</p>
                      <Link className="tp-btn-inner tp-btn-hover alt-color-black" href="/">
                        <span> Kembali</span>
                        <b></b>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Index;