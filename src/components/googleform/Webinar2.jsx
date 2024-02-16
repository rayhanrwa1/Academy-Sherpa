import React from 'react';
import Wrapper from "../../layout/wrapper";
import Image from 'next/image';
import HeaderSix from "@/src/layout/headers/header-6";
import FooterFive from "@/src/layout/footers/footer";
import PlatformArea from "../../common/platform-area";
import HeroBanner from '@/src/common/breadcrumbs/breadcrumb-2';
import Gambar1 from '../../../public/assets/img/Event/Flyer Webinar Beasiswa Dalam Negeri 01.png';

const a = () => {
    return (
        <Wrapper>
            <HeaderSix />
            <HeroBanner title={"Pendaftaran Peserta"} innertitle={"Webinar Beasiswa Dalam Negeri (Vol.01)"} />
            <PlatformArea style_carrer={true} />
            <main>
                <div style={{ textAlign: 'center', margin: '50px 0' }}>
                    <div style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px', display: 'inline-block' }}>
                        <div style={{ border: '10px solid #123F4A', borderRadius: '10px', marginBottom: '20px', textAlign: 'center' }}>
                            <Image src={Gambar1} alt="Poster Image" width={400} height={600} />
                        </div>
                        <a href="http://bit.ly/WebinarBeasiswaSherpa" target="_blank" rel="noopener noreferrer" style={{ display: 'block', margin: '0 auto', textDecoration: 'none' }}>
                            <button style={{ padding: '10px 20px', borderRadius: '20px', backgroundColor: '#123F4A', color: '#fff', cursor: 'pointer', border: 'none' }}>Daftar Sekarang</button>
                        </a>
                    </div>
                </div>
            </main>
            <FooterFive />
        </Wrapper>
    );
};

export default a;
