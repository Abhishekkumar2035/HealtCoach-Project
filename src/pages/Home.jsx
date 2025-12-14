import React from "react";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";

// Import css files for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // This makes the images fade into each other smoothly
    arrows: false,
  };

  // Common style for all slides to ensure they look good
  const slideStyle = {
    height: "100vh", // Full screen height
    minHeight: "600px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex !important", // Slick sometimes overrides flex, so !important helps
    alignItems: "center",
    justifyContent: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.4)", // Dark overlay so text is readable
    zIndex: 1,
  };

  const contentStyle = {
    zIndex: 2,
    position: "absolute", // 'relative' ko hata kar 'absolute' karein
    top: "45%", // Upar se 50% niche
    left: "50%", // Left se 50% aage
    transform: "translate(-50%, -50%)", // Isse text perfectly center ho jayega
    textAlign: "center",
    color: "white",
    width: "100%",
  };

  return (
    <>
      <Helmet>
        <title>Home - Health Coach</title>
      </Helmet>

      {/* Hero Section with Slider */}
      <div className="hero-wrap" style={{ overflow: "hidden" }}>
        <Slider {...settings}>
          {/* SLIDE 1 */}
          <div>
            <div
              style={{
                ...slideStyle,
                backgroundImage: "url('/images/bg_1.jpg')",
              }}
            >
              <div style={overlayStyle}></div>
              <div className="container" style={contentStyle}>
                <div className="row justify-content-center align-items-center ">
                  <div className="col-md-8 text-center">
                    <span
                      className="subheading"
                      style={{
                        fontSize: "18px",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      Welcome to Health Coach
                    </span>
                    <h1
                      className="mb-4"
                      style={{
                        fontSize: "60px",
                        fontWeight: "bold",
                        lineHeight: "1.2",
                      }}
                    >
                      Get in shape faster, live your happy life
                    </h1>
                    <p>
                      <a
                        href="/about"
                        className="btn btn-primary p-3 px-4 mr-2"
                      >
                        Learn more
                      </a>
                      <a href="/contact" className="btn btn-white p-3 px-4">
                        Contact us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div>
            <div
              style={{
                ...slideStyle,
                backgroundImage: "url('/images/bg_2.jpg')",
              }}
            >
              <div style={overlayStyle}></div>
              <div className="container" style={contentStyle}>
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-8">
                    <span
                      className="subheading"
                      style={{
                        fontSize: "18px",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      A Fresh approach to healthy life
                    </span>
                    <h1
                      className="mb-4"
                      style={{
                        fontSize: "60px",
                        fontWeight: "bold",
                        lineHeight: "1.2",
                      }}
                    >
                      Unlock your potential with good nutrition
                    </h1>
                    <p>
                      <a
                        href="/services"
                        className="btn btn-primary p-3 px-4 mr-2"
                      >
                        View Services
                      </a>
                      <a href="/contact" className="btn btn-white p-3 px-4">
                        Contact us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 3 */}
          <div>
            <div
              style={{
                ...slideStyle,
                backgroundImage: "url('/images/bg_3.jpg')",
              }}
            >
              <div style={overlayStyle}></div>
              <div className="container" style={contentStyle}>
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-8">
                    <span
                      className="subheading"
                      style={{
                        fontSize: "18px",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      Welcome Health Coach
                    </span>
                    <h1
                      className="mb-4"
                      style={{
                        fontSize: "60px",
                        fontWeight: "bold",
                        lineHeight: "1.2",
                      }}
                    >
                      You can transform health through habit change
                    </h1>
                    <p>
                      <a href="/blog" className="btn btn-primary p-3 px-4 mr-2">
                        Read Blog
                      </a>
                      <a href="/contact" className="btn btn-white p-3 px-4">
                        Contact us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Services Section */}
      <section className="ftco-section ftco-services p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch px-4">
              <div className="d-block services-wrap text-center w-100">
                <div
                  className="img"
                  style={{
                    backgroundImage: "url('/images/services-1.jpg')",
                    height: "250px",
                    backgroundSize: "cover",
                    marginBottom: "20px",
                  }}
                ></div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Exercise Program</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <a href="/services" className="btn btn-primary ">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex align-self-stretch px-4">
              <div className="d-block services-wrap text-center w-100">
                <div
                  className="img"
                  style={{
                    backgroundImage: "url('/images/services-2.jpg')",
                    height: "250px",
                    backgroundSize: "cover",
                    marginBottom: "20px",
                  }}
                ></div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Nutrition Plans</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <a href="/services" className="btn btn-primary ">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex align-self-stretch px-4">
              <div className="d-block services-wrap text-center w-100">
                <div
                  className="img"
                  style={{
                    backgroundImage: "url('/images/services-3.jpg')",
                    height: "250px",
                    backgroundSize: "cover",
                    marginBottom: "20px",
                  }}
                ></div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Diet Program</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <a href="/services" className="btn btn-primary ">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="ftco-section bg-light p-5">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading mb-3">Price &amp; Plans</span>
              <h2>Choose Your Perfect Plans</h2>
            </div>
          </div>
          <div className="row">
            {[
              { name: "Starter", price: 49 },
              { name: "Standard", price: 79 },
              { name: "Premium", price: 109 },
              { name: "Platinum", price: 159 },
            ].map((plan, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="block-7 p-4 bg-white text-center border mb-4">
                  <div className="text-center">
                    <h4 className="heading-2">{plan.name}</h4>
                    <span className="excerpt d-block text-muted mb-3">
                      A Beautiful Healthcare
                    </span>
                    <span className="price d-block mb-4">
                      <sup style={{ fontSize: "20px" }}>$</sup>
                      <span
                        className="number"
                        style={{
                          fontSize: "40px",
                          fontWeight: "bold",
                          color: "#2f89fc",
                        }}
                      >
                        {plan.price}
                      </span>
                    </span>

                    <ul className="pricing-text list-unstyled mb-4">
                      <li className="mb-2">
                        <span className="fa fa-check mr-2 text-primary"></span>{" "}
                        20 Workouts
                      </li>
                      <li className="mb-2">
                        <span className="fa fa-check mr-2 text-primary"></span>{" "}
                        Meal plans in mobile
                      </li>
                      <li className="mb-2">
                        <span className="fa fa-check mr-2 text-primary"></span>{" "}
                        One Coaching
                      </li>
                      <li className="mb-2">
                        <span className="fa fa-check mr-2 text-primary"></span>{" "}
                        -50% Group coaching
                      </li>
                      <li className="mb-2">
                        <span className="fa fa-check mr-2 text-primary"></span>{" "}
                        24/7 Customer support
                      </li>
                    </ul>

                    <a href="/pricing" className="btn btn-primary px-4 py-3">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
