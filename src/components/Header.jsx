// src/components/Header.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const Header = () => {
  return (
    <>
      <Helmet>
        <title>Health Coach - Professional Health & Wellness</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>

      <div className="wrap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col d-flex align-items-center">
              <p className="mb-0 phone">
                <span className="mailus">Phone no:</span>
                <a href="tel:+919335587285">+91 9335 5872 85</a>
                <span className="mailus">email us:</span>
                <a href="mailto:abhishekkumar955588@gmail.com">
                  abhishekkumar955588@gmail.com
                </a>
              </p>
            </div>
            <div className="col d-flex justify-content-end">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a
                    href="https://www.facebook.com"
                    className="d-flex align-items-center justify-content-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa fa-facebook">
                      <i className="sr-only">Facebook</i>
                    </span>
                  </a>
                  <a
                    href="https://twitter.com"
                    className="d-flex align-items-center justify-content-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa fa-twitter">
                      <i className="sr-only">Twitter</i>
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="d-flex align-items-center justify-content-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa fa-instagram">
                      <i className="sr-only">Instagram</i>
                    </span>
                  </a>
                  <a
                    href="https://dribbble.com"
                    className="d-flex align-items-center justify-content-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa fa-dribbble">
                      <i className="sr-only">Dribbble</i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
