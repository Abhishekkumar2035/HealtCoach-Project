import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  MdOutlineEmail,
  MdLocalPhone,
  MdLocationOn,
  MdSend,
  MdCheckCircle,
} from "react-icons/md"; // Google Material Icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, submitting, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Network request simulate karne ke liye
    setTimeout(() => {
      const submissions = JSON.parse(
        localStorage.getItem("contactSubmissions") || "[]"
      );
      submissions.push({
        ...formData,
        id: Date.now(),
        date: new Date().toISOString(),
      });
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // 3 second baad button wapas normal ho jayega
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  // Internal CSS for Animations (Hover effects)
  const styles = {
    iconBox: {
      width: "50px",
      height: "50px",
      background: "rgba(255,255,255,0.2)",
      borderRadius: "50%",
      marginRight: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.3s ease", // Animation
      cursor: "pointer",
    },
    input: {
      border: "none",
      borderBottom: "1px solid #ddd",
      padding: "10px 0",
      borderRadius: 0,
      boxShadow: "none",
    },
    label: {
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      color: "#999",
    },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Health Coach</title>
      </Helmet>

      {/* CSS for hover animation */}
      <style>
        {`
          .icon-hover:hover {
            transform: scale(1.2) rotate(10deg);
          }
          .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
        `}
      </style>

      {/* Hero Section */}
      {/* <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: "url('images/bg_2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(0,0,0,0.3)",
          }}
        ></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 pb-5 text-center">
              <h1
                className="mb-0 bread"
                style={{ color: "white", fontWeight: "bold", fontSize: "4rem" }}
              >
                Contact Us
              </h1>
              <p
                className="breadcrumbs mb-2"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Let's start a conversation about your health.
              </p>
            </div>
          </div>
        </div>
      </section>
 */}
      {/* Main Content */}
      <section className="ftco-section bg-light p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                className="wrapper"
                style={{
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.1)",
                  borderRadius: "15px",
                  overflow: "hidden",
                  background: "white",
                }}
              >
                <div className="row no-gutters">
                  {/* Left Side: Contact Info */}
                  <div className="col-lg-5 col-md-5 d-flex align-items-stretch bg-primary text-white">
                    <div
                      className="info-wrap w-100 p-md-5 p-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #2f89fc 0%, #2cb5e8 100%)",
                      }}
                    >
                      <h3 className="mb-4 text-white">Let's get in touch</h3>
                      <p className="mb-4" style={{ opacity: 0.8 }}>
                        We're open for any suggestion or just to have a chat
                        about your fitness goals.
                      </p>

                      {/* Address */}
                      <div className="dbox w-100 d-flex align-items-start mb-4">
                        <div className="icon-hover" style={styles.iconBox}>
                          <MdLocationOn size={24} color="white" />
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span style={{ fontWeight: "bold" }}>Address:</span>{" "}
                            <br /> 198 West 21th Street, Suite 721 New York NY
                            10016
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="dbox w-100 d-flex align-items-center mb-4">
                        <div className="icon-hover" style={styles.iconBox}>
                          <MdLocalPhone size={24} color="white" />
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920" className="text-white">
                              + 1235 2355 98
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="dbox w-100 d-flex align-items-center mb-4">
                        <div className="icon-hover" style={styles.iconBox}>
                          <MdOutlineEmail size={24} color="white" />
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>{" "}
                            <a
                              href="mailto:info@yoursite.com"
                              className="text-white"
                            >
                              info@yoursite.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Form */}
                  <div className="col-lg-7 col-md-7 d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4 bg-white">
                      <h3
                        className="mb-4"
                        style={{ color: "#333", fontWeight: "bold" }}
                      >
                        Send us a message
                      </h3>

                      <form onSubmit={handleSubmit} className="contactForm">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group mb-4">
                              <label style={styles.label} htmlFor="name">
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={styles.input}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mb-4">
                              <label style={styles.label} htmlFor="email">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={styles.input}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-4">
                              <label style={styles.label} htmlFor="subject">
                                Subject
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                style={styles.input}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-4">
                              <label style={styles.label} htmlFor="message">
                                Message
                              </label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={styles.input}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <button
                                type="submit"
                                disabled={
                                  status === "submitting" ||
                                  status === "success"
                                }
                                className={`btn py-3 px-4 submit-btn ${
                                  status === "success"
                                    ? "btn-success"
                                    : "btn-primary"
                                }`}
                                style={{
                                  borderRadius: "30px",
                                  width: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "10px",
                                  transition: "all 0.3s ease",
                                }}
                              >
                                {status === "submitting" ? (
                                  "Sending..."
                                ) : status === "success" ? (
                                  <>
                                    Message Sent <MdCheckCircle size={20} />
                                  </>
                                ) : (
                                  <>
                                    Send Message <MdSend size={18} />
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
