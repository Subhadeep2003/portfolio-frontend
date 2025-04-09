import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Contacts.css";
import { AttentionSeeker } from "react-awesome-reveal";
import { toast } from "react-toastify";
import { Circles } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
const Contacts = () => {
  const [loading, setLoading] = useState(false);
  // 🟢 Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    try {
      const res = await fetch(
        "https://portfolio-backend-hi27.onrender.com/api/v1/portfolio/sendEmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );

      const data = await res.json();
      if (data.success) {
        toast.success("✅ Message sent successfully!", {
          theme: "colored",
        });
        e.target.reset(); // Clear the form after success
      } else {
        toast.error("❌ Failed to send message.", {
          theme: "colored",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ An error occurred while sending the message.", {
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="contact-container" id="contact">
      <AttentionSeeker effect="swing">
        <h2>Let's connect!</h2>
        <div className="contact-content">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Your Email" required />
            <textarea placeholder="Write Your Message" required></textarea>
            <button type="submit" disabled={loading}>
              {loading ? (
                <Circles
                  height="25"
                  width="25"
                  color="#ffffff"
                  ariaLabel="loading"
                />
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/subhadeep-mukherjee-569465216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a
              href="https://github.com/Subhadeep2003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon github" />
            </a>
            <a
              href="https://www.facebook.com/papai.mukherjee.9026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon facebook" />
            </a>
            <a
              href="https://www.instagram.com/subhadeep__mukherjee_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon instagram" />
            </a>
          </div>
        </div>
      </AttentionSeeker>
    </div>
  );
};

export default Contacts;
