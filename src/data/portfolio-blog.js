// thumb img import here 
import thumb_img_1 from "../../public/assets/img/Event/Flyer Webinar Beasiswa Dalam Negeri 01.png";
import thumb_img_2 from "../../public/assets/img/Event/Flyer Bootcamp Adm & Bedah Esai BSI Scholarship (1).jpeg";
import thumb_img_3 from "../../public/assets/img/Event/BU.jpeg";
import thumb_img_4 from "../../public/assets/img/Event/Flyer Self Development & Scholarship Class Batch 1Self Development & Scholarship Class Batch 1.jpg";

// avata img import here
import avata_img_1 from "../../public/assets/img/blog/blog-avata-2.svg";

const portfolio_blog = [
    {
        id: 1,
        thumb_img: thumb_img_4,
        avata_img: avata_img_1,
        name: "Academy Sherpa",
        job_title: "Admin",
        title: <>Self Development & Scholarship Class Batch 1</>,
        cls: "",
        date: "20-29 Februari 2024",
        col: "",
        delay: ".5s",
        category: "Kelas",
        link: "/event-kelas" // Atur URL atau rute halaman berikutnya di sini
    },
    {
        id: 2,
        thumb_img: thumb_img_1,
        avata_img: avata_img_1,
        name: "Academy Sherpa",
        job_title: "Admin",
        title: <>Webinar Beasiswa<br /> Dalam Negeri</>,
        cls: "",
        date: "18 Februari 2024",
        col: "",
        delay: ".5s",
        category: "Webinar",
        link: "/404" // Atur URL atau rute halaman berikutnya di sini
    },
    {
        id: 3,
        thumb_img: thumb_img_2,
        avata_img: avata_img_1,
        name: "Academy Sherpa",
        job_title: "Admin",
        title: <>BSI Scholarship <br/> Intensive Bootcamp</>,
        cls: "",
        date: "September 27, 2023",
        col: "",
        delay: ".5s",
        category: "Webinar",
        link: "/404" // Atur URL atau rute halaman berikutnya di sini
    },

    {
        id: 4,
        thumb_img: thumb_img_3,
        avata_img: avata_img_1,
        name: "Academy Sherpa",
        job_title: "Admin",
        title: <>Final Chapter Intensive <br/> Mentoring BU 2023</>,
        cls: "",
        date: "Agustus 16, 2023",
        col: "",
        delay: ".5s",
        category: "Webinar",
        link: "/404" // Atur URL atau rute halaman berikutnya di sini
    },

]

export default portfolio_blog;
