import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    messageType: "Jenis Pesan", // Default message type
  });
  const [isLoading, setIsLoading] = useState(false);

  const selectHandler = (e) => {
    setFormData({ ...formData, messageType: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when sending message
    try {
      const response = await fetch("374cde96-e083-44b2-9085-6740597a2d7d", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          ...formData,
        }),
      });
      if (response.ok) {
        console.log("Message sent successfully!");
        // Handle success case (e.g., show a success message to the user)
      } else {
        console.error("Failed to send message");
        // Handle failure case (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setIsLoading(false); // Set loading state back to false after message sent or failed
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="box">
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="text"
                className="inputText"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <span className="floating-label">Nama Lengkap</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="email"
                className="inputText"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="floating-label">Email</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input
                type="tel"
                className="inputText"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <span className="floating-label">Nomor Handphone</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__select mb-30">
              <NiceSelect
                options={[
                  { value: "Jenis Pesan", text: "Jenis Pesan" },
                  { value: "Bisnis", text: "Bisnis" },
                  { value: "Laporan Penyalahgunaan", text: "Laporan Penyalahgunaan" },
                  { value: "Saran", text: "Saran" },
                  { value: "Kritik", text: "Kritik" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea
                className="textareaText"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <span className="floating-label-2">Pesan</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button type="submit" className="submit-btn w-100" disabled={isLoading}>
                {isLoading ? "Mengirim Pesan..." : "Kirim Pesan"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
