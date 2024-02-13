// pages > index.jsx

import React from "react";
import Wrapper from "../../layout/wrapper";

const IndexPage = () => {
    return (
        <Wrapper>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(200vh - 100px)' }}>
                {/* '100px' adalah tinggi header. Sesuaikan dengan tinggi header Anda */}
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeKtlzY_K9ycNJWiXo5LSJ0HHu3KG3QM1dpKYafnz8yUrpOlg/viewform?embedded=true"
                    title="Google Form"
                    width="200%"
                    height="600px"
                    style={{ border: '2px solid #ccc',  maxWidth: '1000px', maxHeight: '1000px', boxSizing: 'border-box' }}
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                >
                    Memuat…
                </iframe>
            </div>
        </Wrapper>
    );
};


export default IndexPage;
