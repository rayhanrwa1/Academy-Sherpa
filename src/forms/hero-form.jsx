import React, { useState } from "react";
import EmailIcon from "../svg/email";

const HeroForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_key: "374cde96-e083-44b2-9085-6740597a2d7d", email }),
      });
      if (response.ok) {
        setMessage("Email berhasil disubmit!");
        setEmail("");
      } else {
        setMessage("Gagal mengirim email. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="p-relative">
          <input
            type="email"
            placeholder="Email untuk bisnis"
            value={email}
            onChange={handleChange}
            required
          />
          {/* Email icon */}
          <EmailIcon />
        </div>
        <button className="tp-btn tp-btn-hover alt-color-black" disabled={isLoading}>
          <span>{isLoading ? "Mengirim..." : "Langganan"}</span>
          <b></b>
        </button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default HeroForm;
