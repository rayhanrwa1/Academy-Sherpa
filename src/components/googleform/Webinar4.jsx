import React, { useState, useEffect } from 'react';
import Wrapper from "../../layout/wrapper";
import Image from 'next/image';
// import webinarImage from "../../../public/assets/img/Event/Webinar.svg";
import Link from 'next/link';
import HeaderSix from "@/src/layout/headers/header-6";
import FooterFive from "@/src/layout/footers/footer";
import PlatformArea from "../../common/platform-area";
import HeroBanner from '@/src/common/breadcrumbs/breadcrumb-2';
import Gambar1 from '../../../public/assets/img/Event/Flyer Webinar Beasiswa Dalam Negeri 01.png';

const IndexPage = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [university, setUniversity] = useState("");
    const [otherUniversity, setOtherUniversity] = useState("");
    const [showOtherUniversityInput, setShowOtherUniversityInput] = useState(false);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [semester, setSemester] = useState("");
    const [faculty, setFaculty] = useState("");
    const [informationSource, setInformationSource] = useState("");
    const [motivation, setMotivation] = useState("");
    const [scholarshipGoal, setScholarshipGoal] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
   
   
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
    setShowOptions(!showOptions);
    };
    
    const handleUniversityChange = (event) => {
        const selectedUniversity = event.target.value;
        if (selectedUniversity === "other") {
            setShowOtherUniversityInput(true);
        } else {
            setShowOtherUniversityInput(false);
            setOtherUniversity("");
        }
        setUniversity(selectedUniversity);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
    
        const formData = new FormData(event.target);
        formData.append("access_key", "374cde96-e083-44b2-9085-6740597a2d7d");
        formData.append("subject", "New Submission from Web3Forms");
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
    
            const responseData = await res.json();
            console.log(responseData);  // Periksa respons untuk menemukan informasi kesalahan
    
            setLoading(false);
            if (res.ok) {
                setSuccessMessage("SELAMAT ANDA TELAH MENDAFTAR");
                // Tambahkan logika untuk menampilkan pesan ke email
                // contoh: sendEmailConfirmation();
            } else {
                if (responseData.error) {
                    alert("Terjadi kesalahan: " + responseData.error.message);
                } else {
                    alert("Terjadi kesalahan saat mengirim pesan.");
                }
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error.message);
            setLoading(false);
            alert("Terjadi kesalahan saat mengirim pesan.");
        }
    };
    
    useEffect(() => {
        let timeout;
        if (successMessage) {
            timeout = setTimeout(() => {
                setSuccessMessage("");
            }, 6000); // 6 detik
        }
        return () => clearTimeout(timeout);
    }, [successMessage]);

    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
    };

    const handleFacultyChange = (event) => {
        setFaculty(event.target.value);
    };

    const handleInformationSourceChange = (event) => {
        setInformationSource(event.target.value);
    };

    const handleMotivationChange = (event) => {
        setMotivation(event.target.value);
    };

    const handleScholarshipGoalChange = (event) => {
        setScholarshipGoal(event.target.value);
    };


    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '40px', // Tambahkan padding atas
            paddingBottom: '40px', // Tambahkan padding bawah
        },
        formTitle: {
            textAlign: 'center',
            marginBottom: '20px', // Tambahkan margin bawah
        },
        formContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        form: {
            position: 'relative',
            maxWidth: '800px', // Lebarkan form
            width: '100%',
            padding: '20px',
            border: '2px solid #ccc',
            borderRadius: '15px', // Berikan border radius
        },
        formGroup: {
            marginBottom: '20px',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '15px',
        },
        false: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '15px',

        },
        submitButton: {
            width: '100%',
            padding: '15px',
            backgroundColor: '#123F4A',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease', // Tambahkan efek transisi
            marginTop: '20px', // Tambahkan margin atas untuk tombol submit
        },
        submitButtonHover: {
            backgroundColor: '#0D2C33', // Ubah warna saat hover
        },
        image: {
            width: '100%',
            borderRadius: '10px', // Berikan border radius pada gambar
            marginBottom: '20px', // Tambahkan margin bawah pada gambar
        },
        otherUniversityInput: {
            display: showOtherUniversityInput ? 'block' : 'none', // Tampilkan input universitas lainnya jika dipilih
        },

        sectionDivider: {
            borderBottom: '2px solid #ccc',
            margin: '20px 0',
        },

        dropdown: {
            position: 'relative',
            width: '100%',
        },
        dropdownSelect: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '15px',
            backgroundColor: '#fff',
            cursor: 'pointer',
            outline: 'none',
            transition: 'all 0.3s ease',
        },
        dropdownOptions: {
            position: 'absolute',
            top: '100%',
            left: '0',
            width: '100%',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '15px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            opacity: '0',
            visibility: 'hidden',
            transition: 'all 0.3s ease',
            zIndex: '100',
        },
        dropdownOptionsActive: {
            opacity: '1',
            visibility: 'visible',
        },
        dropdownOption: {
            padding: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        dropdownOptionHover: {
            backgroundColor: '#f5f5f5',
        },
    };

    return (
        <Wrapper>
            <HeaderSix />
            <HeroBanner title={"Pendaftran Komunitas"} innertitle={"Pendaftaran Komunitas"} />
            <main>
                <div style={styles.container}>
                    <div style={styles.formContainer}>
                        <form style={styles.form} onSubmit={onSubmit}>
                            {/* <Image src={webinarImage} alt="Webinar Image" layout="responsive" width={1920} height={800} style={styles.image} /> */}
                            <div style={styles.formGroup}>
                                <h3 style={{ fontSize: '1.2em', margin: '10px 0',  }}>Formulir Pendaftaran Formulir</h3>
                                <p style={{ fontSize: '0.9em', marginBottom: '10px', justifyItems: 'justify' }}> Academy Sherpa adalah pilihan terbaik bagi mereka yang mengincar beasiswa dalam negeri. Kami adalah tim ahli yang siap membimbing Anda melewati proses pencarian, aplikasi, dan wawancara beasiswa. Dengan dukungan personal dan pemahaman mendalam tentang pasar beasiswa dalam negeri, kami memastikan Anda mendapatkan akses terhadap beasiswa yang sesuai dengan profil Anda. Bergabunglah dengan kami dan jadikan perjalanan menuju pendidikan yang lebih baik menjadi lebih mudah dan sukses.</p>
                                <div style={styles.sectionDivider}></div>
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="webinar">Event:</label>
                                <input type="text" id="webinar" name="webinar" style={styles.false} value="Pendaftaran Forum" readOnly />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="nama">Nama</label>
                                <input type="text" id="nama" name="nama" style={styles.input} value={nama} onChange={(e) => setNama(e.target.value)} required />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="phone">No Telp:</label>
                                <input type="tel" id="phone" name="phone" style={styles.input} value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="university">Pilih Universitas:</label>
                                <select id="university" name="university" style={styles.input} onChange={handleUniversityChange} value={university}>
                                    {/* Options universitas */}
                                    <option value="Institut Teknologi Bandung (ITB)">Institut Teknologi Bandung (ITB)</option>
                                    <option value="Universitas Indonesia (UI)">Universitas Indonesia (UI)</option>
                                    <option value="Universitas Gadjah Mada (UGM)">Universitas Gadjah Mada (UGM)</option>
                                    <option value="Institut Pertanian Bogor (IPB)">Institut Pertanian Bogor (IPB)</option>
                                    <option value="Universitas Airlangga (UNAIR)">Universitas Airlangga (UNAIR)</option>
                                    <option value="Universitas Diponegoro (UNDIP)">Universitas Diponegoro (UNDIP)</option>
                                    <option value="Institut Teknologi Sepuluh Nopember (ITS)">Institut Teknologi Sepuluh Nopember (ITS)</option>
                                    <option value="Universitas Padjadjaran (UNPAD)">Universitas Padjadjaran (UNPAD)</option>
                                    <option value="Universitas Hasanuddin (UNHAS)">Universitas Hasanuddin (UNHAS)</option>
                                    <option value="Universitas Sumatera Utara (USU)">Universitas Sumatera Utara (USU)</option>
                                    <option value="Universitas Kristen Satya Wacana (UKSW)">Universitas Kristen Satya Wacana (UKSW)</option>
                                    <option value="Universitas Kristen Petra (UK Petra)">Universitas Kristen Petra (UK Petra)</option>
                                    <option value="Universitas Pelita Harapan (UPH)">Universitas Pelita Harapan (UPH)</option>
                                    <option value="Universitas Katolik Parahyangan (UNPAR)">Universitas Katolik Parahyangan (UNPAR)</option>
                                    <option value="Universitas Ciputra (UC)">Universitas Ciputra (UC)</option>
                                    <option value="Universitas Multimedia Nusantara (UMN)">Universitas Multimedia Nusantara (UMN)</option>
                                    <option value="Universitas Islam Indonesia (UII)">Universitas Islam Indonesia (UII)</option>
                                    <option value="Universitas Bina Nusantara (BINUS)">Universitas Bina Nusantara (BINUS)</option>
                                    <option value="Universitas Trisakti (UNTAR)">Universitas Trisakti (UNTAR)</option>
                                    <option value="Universitas Brawijaya (UB)">Universitas Brawijaya (UB)</option>
                                    <option value="Universitas Pamulang (UNPAM)">Universitas Pamulang (UNPAM)</option>
                                    <option value="Telkom University (Tel-U)">Telkom University (Tel-U)</option>
                                    <option value="Universitas Pasundan (UNPAS)">Universitas Pasundan (UNPAS)</option>
                                    <option value="Universitas Atma Jaya Yogyakarta (UAJY)">Universitas Atma Jaya Yogyakarta (UAJY)</option>
                                    <option value="Universitas Muhammadiyah Surakarta (UMS)">Universitas Muhammadiyah Surakarta (UMS)</option>
                                    <option value="Universitas Negeri Yogyakarta (UNY)">Universitas Negeri Yogyakarta (UNY)</option>
                                    <option value="Universitas Muhammadiyah Malang (UMM)">Universitas Muhammadiyah Malang (UMM)</option>
                                    <option value="Universitas Andalas (UNAND)">Universitas Andalas (UNAND)</option>
                                    <option value="Universitas Riau (UNRI)">Universitas Riau (UNRI)</option>
                                    <option value="Universitas Lambung Mangkurat (ULM)">Universitas Lambung Mangkurat (ULM)</option>
                                    <option value="Universitas Jambi (UNJA)">Universitas Jambi (UNJA)</option>
                                    <option value="Universitas Bengkulu (UNIB)">Universitas Bengkulu (UNIB)</option>
                                    <option value="Universitas Jember (UNEJ)">Universitas Jember (UNEJ)</option>
                                    <option value="Universitas Sam Ratulangi (UNSRAT)">Universitas Sam Ratulangi (UNSRAT)</option>
                                    <option value="Universitas Negeri Manado (UNIMA)">Universitas Negeri Manado (UNIMA)</option>
                                    <option value="Universitas Pattimura (UNPATTI)">Universitas Pattimura (UNPATTI)</option>
                                    <option value="Universitas Mataram (UNRAM)">Universitas Mataram (UNRAM)</option>
                                    <option value="Universitas Lampung (UNILA)">Universitas Lampung (UNILA)</option>
                                    <option value="Universitas Sultan Ageng Tirtayasa (UNTIRTA)">Universitas Sultan Ageng Tirtayasa (UNTIRTA)</option>
                                    <option value="Universitas Negeri Jakarta (UNJ)">Universitas Negeri Jakarta (UNJ)</option>
                                    <option value="Universitas Negeri Semarang (UNNES)">Universitas Negeri Semarang (UNNES)</option>
                                    <option value="Universitas Negeri Malang (UM)">Universitas Negeri Malang (UM)</option>
                                    <option value="Universitas Negeri Surabaya (UNESA)">Universitas Negeri Surabaya (UNESA)</option>
                                    <option value="Universitas Negeri Medan (UNIMED)">Universitas Negeri Medan (UNIMED)</option>
                                    <option value="Universitas Negeri Padang (UNP)">Universitas Negeri Padang (UNP)</option>
                                    <option value="Universitas Negeri Makassar (UNM)">Universitas Negeri Makassar (UNM)</option>
                                    <option value="Universitas Negeri Gorontalo (UNG)">Universitas Negeri Gorontalo (UNG)</option>
                                    <option value="Universitas Negeri Papua (UNIPA)">Universitas Negeri Papua (UNIPA)</option>
                                    <option value="Universitas Negeri Maluku (UNIM)">Universitas Negeri Maluku (UNIM)</option>
                                    <option value="Universitas Negeri Manado (UNIMA)">Universitas Negeri Manado (UNIMA)</option>
                                    <option value="Universitas Negeri Semarang (UNNES)">Universitas Negeri Semarang (UNNES)</option>
                                    <option value="Universitas Negeri Yogyakarta (UNY)">Universitas Negeri Yogyakarta (UNY)</option>
                                    <option value="Universitas Negeri Lampung (UNILA)">Universitas Negeri Lampung (UNILA)</option>
                                    {/* Options lainnya */}
                                    <option value="other">Pilihan Lainnya</option>
                                </select>
                            </div>
                            <div style={{ ...styles.formGroup, ...styles.otherUniversityInput }}>
                                <label htmlFor="otherUniversity">Universitas lainnya:</label>
                                <input type="text" id="otherUniversity" name="otherUniversity" style={styles.input} value={otherUniversity} onChange={(e) => setOtherUniversity(e.target.value)} />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="semester">Semester Saat Ini:</label>
                                <input type="text" id="semester" name="semester" style={styles.input} value={semester} onChange={handleSemesterChange} required />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="faculty">Fakultas/Prodi:</label>
                                <input type="text" id="faculty" name="faculty" style={styles.input} value={faculty} onChange={handleFacultyChange} required />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="informationSource">Kamu Tahu Informasi Ini Darimana?</label>
                                <select id="informationSource" name="informationSource" style={styles.input} value={informationSource} onChange={handleInformationSourceChange} required>
                                    <option value="">Pilih satu opsi</option>
                                    <option value="media">Media</option>
                                    <option value="teman">Teman</option>
                                    <option value="internet">Internet</option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="scholarshipGoal">Apakah Kamu Sudah Memiliki Incaran Beasiswa Tahun Ini? Jika "Ya" tolong tuliskan ya!</label>
                                <textarea id="scholarshipGoal" name="scholarshipGoal" style={styles.input} value={scholarshipGoal} onChange={handleScholarshipGoalChange} required />
                            </div>
                            {/* hCaptcha implementation */}
                            <div className="h-captcha" data-captcha="true"></div>
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}>
                                <Link href="/about">
                                    <button
                                        type="button"
                                        style={{ ...styles.submitButton, width: "auto", padding: "10px 20px", fontSize: "0.8em" }}
                                        onClick={() => {
                                            // Logic untuk kembali
                                            console.log("Kembali");
                                        }}
                                    >
                                        Kembali
                                    </button>
                                </Link>
                                <button
                                    type="submit"
                                    style={{ ...styles.submitButton, width: "auto", padding: "10px 20px", fontSize: "0.8em" }} // Mengatur lebar, padding, dan ukuran font
                                    onMouseEnter={(e) => e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = styles.submitButton.backgroundColor}
                                >
                                    {loading ? "" : "Kirim"}
                                </button>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </main>
            <FooterFive />
        </Wrapper>
    );
};

export default IndexPage;



