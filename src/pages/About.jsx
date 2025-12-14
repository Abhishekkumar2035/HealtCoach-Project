import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaCheck,
  FaUsers,
  FaAward,
  FaHeartbeat,
  FaShieldAlt,
  FaHandsHelping,
  FaGlobe,
  FaUserMd,
  FaGraduationCap,
  FaChartLine,
  FaMobileAlt,
  FaBrain,
  FaSeedling,
  FaBalanceScale,
} from "react-icons/fa";
import {
  GiMuscleUp,
  GiHeartPlus,
  GiHealthPotion,
  GiStethoscope,
} from "react-icons/gi";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Health Coach | Our Mission, Team & Approach to Wellness
        </title>
        <meta
          name="description"
          content="Discover Health Coach's comprehensive approach to wellness. Learn about our expert team, evidence-based methodologies, and commitment to transforming lives through personalized health coaching."
        />
        <meta
          name="keywords"
          content="health coaching, wellness, nutrition, fitness, mental health, preventive healthcare"
        />
      </Helmet>

      {/* Hero Banner Section */}
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(47, 137, 252, 0.9), rgba(0, 0, 0, 0.7)), url('/images/about-banner.jpg')",
          height: "80vh",
          minHeight: "600px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10 text-center">
              <h1
                className="mb-4 animated fadeInUp"
                style={{
                  color: "white",
                  fontSize: "4.5rem",
                  fontWeight: "800",
                  letterSpacing: "1px",
                  textShadow: "2px 2px 15px rgba(0,0,0,0.3)",
                  lineHeight: "1.2",
                }}
              >
                Redefining Wellness Through{" "}
                <span style={{ color: "#ffd166" }}>Personalized</span> Health
                Coaching
              </h1>
              <p
                className="lead mb-5 animated fadeInUp"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "1.5rem",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                Join 10,000+ individuals who transformed their lives with our
                evidence-based, holistic approach to health and wellness
              </p>
              <div className="d-flex justify-content-center gap-4 animated fadeInUp">
                <a
                  href="#story"
                  className="btn btn-primary btn-lg px-5 py-3"
                  style={{ borderRadius: "50px", fontSize: "1.1rem" }}
                >
                  <FaUserMd className="mr-2" /> Our Story
                </a>
                <a
                  href="#team"
                  className="btn btn-outline-light btn-lg px-5 py-3"
                  style={{ borderRadius: "50px", fontSize: "1.1rem" }}
                >
                  <FaUsers className="mr-2" /> Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats Overlay */}
        <div className="animated-stats">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  className="stats-bar p-4"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    borderRadius: "20px",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    marginTop: "50px",
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  <div className="row text-center">
                    {[
                      {
                        number: "98%",
                        label: "Client Satisfaction",
                        icon: "😊",
                      },
                      {
                        number: "10K+",
                        label: "Lives Transformed",
                        icon: "❤️",
                      },
                      { number: "50+", label: "Countries Served", icon: "🌍" },
                      { number: "500+", label: "Expert Coaches", icon: "👨‍⚕️" },
                      { number: "7+", label: "Years Experience", icon: "🏆" },
                    ].map((stat, index) => (
                      <div key={index} className="col">
                        <div className="stat-item">
                          <div
                            style={{ fontSize: "2.5rem", marginBottom: "10px" }}
                          >
                            {stat.icon}
                          </div>
                          <h3
                            style={{
                              color: "#2f89fc",
                              fontSize: "2.2rem",
                              fontWeight: "700",
                              marginBottom: "5px",
                            }}
                          >
                            {stat.number}
                          </h3>
                          <p
                            style={{
                              color: "#666",
                              fontSize: "1rem",
                              margin: 0,
                            }}
                          >
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Comprehensive Story */}
      <section id="story" className="ftco-section ftco-no-pt">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="story-image-wrapper"
                style={{ position: "relative" }}
              >
                <img
                  src="/images/founder-story.jpg"
                  alt="Our Founder's Journey"
                  className="img-fluid rounded-lg"
                  style={{
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    borderRadius: "20px",
                  }}
                />
                <div
                  className="experience-badge"
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    right: "-30px",
                    background: "linear-gradient(135deg, #2f89fc, #1a6fd8)",
                    color: "white",
                    padding: "30px",
                    borderRadius: "50%",
                    width: "180px",
                    height: "180px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 15px 40px rgba(47, 137, 252, 0.4)",
                    animation: "pulse 2s infinite",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      display: "block",
                      fontWeight: "600",
                    }}
                  >
                    Established
                  </span>
                  <span
                    style={{
                      fontSize: "48px",
                      fontWeight: "800",
                      display: "block",
                      lineHeight: "1",
                    }}
                  >
                    2015
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Pioneering Wellness
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pl-lg-5">
              <div className="heading-section mb-5">
                <span
                  className="subheading"
                  style={{
                    color: "#2f89fc",
                    fontSize: "18px",
                    fontWeight: "600",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <FaHeartbeat className="mr-2" /> Our Genesis Story
                </span>
                <h2
                  className="mb-4"
                  style={{
                    fontSize: "3.2rem",
                    fontWeight: "800",
                    lineHeight: "1.2",
                    color: "#222",
                  }}
                >
                  From Vision to{" "}
                  <span style={{ color: "#2f89fc" }}>Revolution</span> in
                  Healthcare
                </h2>
              </div>

              <div className="story-content">
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "#555",
                    marginBottom: "25px",
                  }}
                >
                  Health Coach was founded by <strong>Dr. Sarah Johnson</strong>
                  , a visionary physician who recognized a critical gap in
                  modern healthcare. While working at one of the nation's top
                  hospitals, she observed that traditional medicine excelled at
                  treating diseases but often failed at preventing them. This
                  realization sparked a revolution in her thinking.
                </p>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "#555",
                    marginBottom: "25px",
                  }}
                >
                  In 2015, with just three certified coaches and a small office,
                  Dr. Johnson began her mission to shift the healthcare paradigm
                  from <em>reactive treatment</em> to{" "}
                  <em>proactive prevention</em>. What started as personalized
                  nutrition counseling has evolved into a comprehensive wellness
                  ecosystem that integrates cutting-edge technology with
                  human-centered care.
                </p>

                <div className="milestones mt-5">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div
                        className="milestone-card p-4"
                        style={{
                          backgroundColor: "#f0f8ff",
                          borderRadius: "15px",
                          borderLeft: "4px solid #2f89fc",
                        }}
                      >
                        <h5 style={{ fontWeight: "600", color: "#2f89fc" }}>
                          The Breakthrough
                        </h5>
                        <p className="mb-0" style={{ fontSize: "15px" }}>
                          Developed our proprietary{" "}
                          <strong>Holistic Wellness Index™</strong> that
                          measures 12 dimensions of health
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div
                        className="milestone-card p-4"
                        style={{
                          backgroundColor: "#f0f8ff",
                          borderRadius: "15px",
                          borderLeft: "4px solid #2f89fc",
                        }}
                      >
                        <h5 style={{ fontWeight: "600", color: "#2f89fc" }}>
                          Global Recognition
                        </h5>
                        <p className="mb-0" style={{ fontSize: "15px" }}>
                          Featured in <strong>Forbes, TIME Health,</strong> and{" "}
                          <strong>The Lancet</strong>
                          for innovative health solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote
                  className="blockquote mt-4 p-4"
                  style={{
                    backgroundColor: "#e8f4ff",
                    borderLeft: "5px solid #2f89fc",
                    borderRadius: "10px",
                    fontStyle: "italic",
                  }}
                >
                  <p className="mb-2" style={{ fontSize: "18px" }}>
                    "True healthcare isn't about waiting for sickness to strike;
                    it's about cultivating daily wellness. Our bodies have an
                    extraordinary capacity for healing—we just need to create
                    the right conditions."
                  </p>
                  <footer className="blockquote-footer mt-3">
                    <strong>Dr. Sarah Johnson</strong>,{" "}
                    <cite title="Source Title">
                      Founder & Chief Medical Officer
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy & Approach */}
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <span
                className="subheading"
                style={{
                  color: "#2f89fc",
                  fontSize: "18px",
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                <GiHealthPotion className="mr-2" /> Our Guiding Philosophy
              </span>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginBottom: "20px",
                }}
              >
                The{" "}
                <span style={{ color: "#2f89fc" }}>Science-Heart Balance</span>{" "}
                in Wellness
              </h2>
              <p
                className="lead"
                style={{
                  fontSize: "1.3rem",
                  color: "#666",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                We believe optimal health emerges when evidence-based science
                meets compassionate human connection
              </p>
            </div>
          </div>

          <div className="row">
            {[
              {
                icon: <FaBrain size={70} />,
                title: "Evidence-Based Practice",
                description:
                  "Every recommendation is grounded in peer-reviewed research and clinical studies",
                principles: [
                  "Clinical trial-backed protocols",
                  "Continuous research integration",
                  "Data-driven outcome measurement",
                  "Peer-reviewed methodology",
                ],
                color: "#2f89fc",
              },
              {
                icon: <FaSeedling size={70} />,
                title: "Holistic Integration",
                description:
                  "Addressing the complete human experience—body, mind, and spirit",
                principles: [
                  "Bio-psycho-social model",
                  "Mind-body connection focus",
                  "Environmental wellness",
                  "Spiritual nourishment",
                ],
                color: "#4CAF50",
              },
              {
                icon: <FaBalanceScale size={70} />,
                title: "Personalized Precision",
                description:
                  "Your unique genetic, lifestyle, and environmental factors shape your plan",
                principles: [
                  "Genetic testing integration",
                  "Microbiome analysis",
                  "Personal metabolic profiling",
                  "Custom nutrient optimization",
                ],
                color: "#FF9800",
              },
            ].map((philosophy, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div
                  className="philosophy-card p-5 h-100"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                    height: "100%",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    borderTop: `5px solid ${philosophy.color}`,
                  }}
                >
                  <div
                    className="icon-wrapper mb-4"
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: `${philosophy.color}15`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                  >
                    <div style={{ color: philosophy.color }}>
                      {philosophy.icon}
                    </div>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "700",
                      textAlign: "center",
                      marginBottom: "20px",
                      color: "#222",
                    }}
                  >
                    {philosophy.title}
                  </h3>
                  <p
                    style={{
                      textAlign: "center",
                      color: "#666",
                      lineHeight: "1.7",
                      marginBottom: "25px",
                      fontSize: "16px",
                    }}
                  >
                    {philosophy.description}
                  </p>
                  <div className="principles-list">
                    <h6
                      style={{
                        color: philosophy.color,
                        fontWeight: "600",
                        marginBottom: "15px",
                        textAlign: "center",
                      }}
                    >
                      Core Principles:
                    </h6>
                    <ul className="list-unstyled">
                      {philosophy.principles.map((principle, idx) => (
                        <li
                          key={idx}
                          className="mb-3"
                          style={{ fontSize: "15px" }}
                        >
                          <div className="d-flex align-items-center">
                            <div
                              className="principle-icon mr-3"
                              style={{
                                width: "30px",
                                height: "30px",
                                backgroundColor: `${philosophy.color}20`,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <FaCheck
                                size={12}
                                style={{ color: philosophy.color }}
                              />
                            </div>
                            <span>{principle}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Methodology Deep Dive */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <span
                className="subheading"
                style={{ color: "#2f89fc", fontSize: "18px" }}
              >
                <FaChartLine className="mr-2" /> Our Proven Methodology
              </span>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginBottom: "15px",
                }}
              >
                The <span style={{ color: "#2f89fc" }}>Health Coach</span>{" "}
                Transformation Framework
              </h2>
              <p className="lead">
                A systematic, research-backed approach that guarantees
                sustainable results
              </p>
            </div>
          </div>

          <div className="methodology-timeline">
            {[
              {
                phase: "Phase 1",
                title: "Comprehensive Discovery & Assessment",
                duration: "Week 1-2",
                description:
                  "We conduct an exhaustive evaluation of your current health status using advanced diagnostics",
                components: [
                  "Complete Health History Analysis",
                  "Advanced Biomarker Testing (72+ markers)",
                  "Genetic Profiling & SNP Analysis",
                  "Lifestyle & Environmental Audit",
                  "Psychological Wellbeing Assessment",
                  "Sleep Architecture Analysis",
                ],
                outcome: "Personalized Health Baseline Report",
              },
              {
                phase: "Phase 2",
                title: "Strategic Planning & Customization",
                duration: "Week 3-4",
                description:
                  "Creating your bespoke wellness blueprint based on assessment findings",
                components: [
                  "Individualized Nutrition Protocol",
                  "Personalized Exercise Prescription",
                  "Stress Management Framework",
                  "Sleep Optimization Plan",
                  "Supplement Strategy",
                  "Habit Formation Roadmap",
                ],
                outcome: "90-Day Transformation Blueprint",
              },
              {
                phase: "Phase 3",
                title: "Implementation & Intensive Coaching",
                duration: "Month 2-4",
                description:
                  "Guided execution with continuous support, monitoring, and adjustments",
                components: [
                  "Daily Progress Tracking",
                  "Weekly One-on-One Coaching",
                  "Real-time Protocol Adjustments",
                  "Bi-weekly Progress Assessments",
                  "Community Support Integration",
                  "Crisis Management Planning",
                ],
                outcome: "Sustainable Habit Formation",
              },
              {
                phase: "Phase 4",
                title: "Optimization & Mastery",
                duration: "Month 5-6",
                description:
                  "Advanced strategies for peak performance and long-term maintenance",
                components: [
                  "Performance Enhancement Protocols",
                  "Advanced Nutritional Strategies",
                  "Mindfulness & Mental Training",
                  "Lifestyle Engineering",
                  "Preventive Health Maintenance",
                  "Lifelong Wellness Planning",
                ],
                outcome: "Lifetime Wellness Mastery",
              },
            ].map((phase, index) => (
              <div key={index} className="phase-card mb-5">
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="phase-header text-center text-lg-left mb-4 mb-lg-0">
                      <div
                        className="phase-number"
                        style={{
                          fontSize: "4rem",
                          fontWeight: "800",
                          color: "#2f89fc",
                          lineHeight: "1",
                          marginBottom: "10px",
                        }}
                      >
                        {phase.phase}
                      </div>
                      <div
                        className="phase-duration badge"
                        style={{
                          backgroundColor: "#e8f4ff",
                          color: "#2f89fc",
                          padding: "8px 20px",
                          borderRadius: "50px",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {phase.duration}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div
                      className="phase-content p-5"
                      style={{
                        backgroundColor: index % 2 === 0 ? "white" : "#f8f9fa",
                        borderRadius: "20px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                        position: "relative",
                        borderLeft: "5px solid #2f89fc",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.8rem",
                          fontWeight: "700",
                          marginBottom: "15px",
                          color: "#222",
                        }}
                      >
                        {phase.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#666",
                          marginBottom: "25px",
                        }}
                      >
                        {phase.description}
                      </p>

                      <div className="row">
                        <div className="col-md-8">
                          <h6
                            style={{
                              color: "#2f89fc",
                              fontWeight: "600",
                              marginBottom: "15px",
                            }}
                          >
                            Key Components:
                          </h6>
                          <div className="row">
                            {phase.components.map((component, idx) => (
                              <div key={idx} className="col-md-6 mb-3">
                                <div className="d-flex align-items-start">
                                  <FaCheck
                                    className="mr-2 mt-1"
                                    style={{
                                      color: "#2f89fc",
                                      fontSize: "14px",
                                      flexShrink: 0,
                                    }}
                                  />
                                  <span style={{ fontSize: "14px" }}>
                                    {component}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div
                            className="outcome-box p-4 text-center"
                            style={{
                              backgroundColor: "#2f89fc",
                              color: "white",
                              borderRadius: "15px",
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <h6
                              style={{
                                fontSize: "14px",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                marginBottom: "10px",
                                opacity: "0.9",
                              }}
                            >
                              Final Outcome
                            </h6>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                              }}
                            >
                              {phase.outcome}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our World-Class Team */}
      <section id="team" className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <span
                className="subheading"
                style={{ color: "#2f89fc", fontSize: "18px" }}
              >
                <FaUserMd className="mr-2" /> Our Expert Team
              </span>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginBottom: "20px",
                }}
              >
                Leaders in{" "}
                <span style={{ color: "#2f89fc" }}>Health Innovation</span>
              </h2>
              <p
                className="lead"
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Our multidisciplinary team brings together expertise from
                medicine, nutrition, psychology, and fitness to provide
                comprehensive care
              </p>
            </div>
          </div>

          <div className="row">
            {[
              {
                name: "Dr. Sarah Johnson, MD, PhD",
                role: "Founder & Chief Medical Officer",
                specialization: "Preventive Medicine & Clinical Nutrition",
                education: "Harvard Medical School, Johns Hopkins University",
                experience:
                  "20+ years in clinical practice, 100+ published papers",
                expertise: [
                  "Metabolic Syndrome Management",
                  "Nutritional Genomics",
                  "Chronic Disease Prevention",
                  "Integrative Medicine",
                ],
                image: "/image1/img1.avif ",
                quote:
                  "Health is not a destination but a daily practice of self-care.",
              },
              {
                name: "Dr. Michael Chen, MD, FACSM",
                role: "Director of Sports Medicine & Performance",
                specialization: "Sports Medicine & Athletic Performance",
                education: "Stanford University, Mayo Clinic Fellowship",
                experience:
                  "Team Physician for Olympic Athletes, 15+ years experience",
                expertise: [
                  "Injury Prevention & Rehabilitation",
                  "Performance Optimization",
                  "Biomechanical Analysis",
                  "Recovery Protocols",
                ],
                image: "/image1/img2.avif",
                quote:
                  "The body achieves what the mind believes and plans for.",
              },
              {
                name: "Dr. Emily Parker, PsyD, NBC-HWC",
                role: "Director of Behavioral Health",
                specialization: "Health Psychology & Behavior Change",
                education: "Yale University, Columbia University",
                experience:
                  "Pioneer in Digital Health Interventions, 12+ years",
                expertise: [
                  "Cognitive Behavioral Therapy",
                  "Habit Formation Science",
                  "Mindfulness-Based Stress Reduction",
                  "Motivational Interviewing",
                ],
                image: "/image1/img3.avif",
                quote:
                  "Sustainable change begins with understanding the why behind behaviors.",
              },
              {
                name: "David Rodriguez, MS, RD, CSCS",
                role: "Head Coach & Program Director",
                specialization: "Exercise Physiology & Nutrition",
                education: "University of Texas, Precision Nutrition Mastery",
                experience:
                  "Developed 50+ wellness programs, 10,000+ coaching hours",
                expertise: [
                  "Program Design & Implementation",
                  "Nutritional Biochemistry",
                  "Coach Training & Development",
                  "Outcome Measurement",
                ],
                image: "/image1/img4.avif",
                quote:
                  "Consistency over intensity—small daily improvements lead to massive results.",
              },
            ].map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div
                  className="team-member-card"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    height: "100%",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div
                    className="team-image"
                    style={{
                      height: "280px",
                      backgroundImage: `url('${member.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      className="team-overlay"
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        background:
                          "linear-gradient(transparent, rgba(0,0,0,0.8))",
                        padding: "25px",
                        color: "white",
                      }}
                    >
                      <h4
                        className="mb-1"
                        style={{ fontSize: "1.3rem", fontWeight: "700" }}
                      >
                        {member.name}
                      </h4>
                      <p
                        className="mb-0"
                        style={{
                          color: "#2f89fc",
                          fontWeight: "600",
                          fontSize: "14px",
                        }}
                      >
                        {member.role}
                      </p>
                    </div>
                    <div
                      className="education-badge"
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        backgroundColor: "#2f89fc",
                        color: "white",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 5px 15px rgba(47, 137, 252, 0.3)",
                      }}
                    >
                      <FaGraduationCap size={20} />
                    </div>
                  </div>

                  <div className="team-content p-4">
                    <div className="specialization mb-3">
                      <h6
                        style={{
                          color: "#2f89fc",
                          fontSize: "12px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          marginBottom: "5px",
                        }}
                      >
                        Specialization
                      </h6>
                      <p
                        className="mb-2"
                        style={{ fontSize: "14px", fontWeight: "600" }}
                      >
                        {member.specialization}
                      </p>
                    </div>

                    <div className="education mb-3">
                      <h6
                        style={{
                          color: "#2f89fc",
                          fontSize: "12px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          marginBottom: "5px",
                        }}
                      >
                        Education
                      </h6>
                      <p className="mb-2" style={{ fontSize: "13px" }}>
                        {member.education}
                      </p>
                    </div>

                    <div className="expertise mb-4">
                      <h6
                        style={{
                          color: "#2f89fc",
                          fontSize: "12px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          marginBottom: "10px",
                        }}
                      >
                        Key Expertise
                      </h6>
                      <div className="expertise-tags">
                        {member.expertise.slice(0, 2).map((skill, idx) => (
                          <span
                            key={idx}
                            className="badge mr-1 mb-1"
                            style={{
                              backgroundColor: "#e8f4ff",
                              color: "#2f89fc",
                              fontSize: "11px",
                              padding: "5px 10px",
                              borderRadius: "20px",
                              fontWeight: "500",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className="member-quote mt-4 pt-3"
                      style={{
                        borderTop: "1px solid #eee",
                        fontStyle: "italic",
                      }}
                    >
                      <p
                        className="mb-0"
                        style={{ fontSize: "14px", color: "#666" }}
                      >
                        "{member.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Team */}
          <div className="row justify-content-center mt-5">
            <div className="col-md-10">
              <div
                className="support-team-section p-5"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                }}
              >
                <h3 className="text-center mb-4" style={{ color: "#222" }}>
                  <FaUsers className="mr-2" /> Our Extended Team of Specialists
                </h3>
                <div className="row">
                  {[
                    { role: "Registered Dietitians", count: "25+", icon: "🥗" },
                    {
                      role: "Certified Personal Trainers",
                      count: "40+",
                      icon: "💪",
                    },
                    {
                      role: "Mental Health Counselors",
                      count: "15+",
                      icon: "🧠",
                    },
                    {
                      role: "Yoga & Meditation Instructors",
                      count: "20+",
                      icon: "🧘",
                    },
                    { role: "Physical Therapists", count: "12+", icon: "🏥" },
                    { role: "Health Coaches", count: "200+", icon: "👨‍⚕️" },
                  ].map((specialist, idx) => (
                    <div key={idx} className="col-md-4 mb-3">
                      <div
                        className="specialist-item d-flex align-items-center p-3"
                        style={{
                          backgroundColor: "#f8f9fa",
                          borderRadius: "10px",
                        }}
                      >
                        <div
                          className="specialist-icon mr-3"
                          style={{ fontSize: "2rem" }}
                        >
                          {specialist.icon}
                        </div>
                        <div>
                          <h6
                            className="mb-1"
                            style={{ fontSize: "14px", fontWeight: "600" }}
                          >
                            {specialist.role}
                          </h6>
                          <p
                            className="mb-0"
                            style={{ fontSize: "12px", color: "#666" }}
                          >
                            {specialist.count} professionals
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="ftco-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="tech-showcase p-5"
                style={{
                  backgroundColor: "#2f89fc",
                  borderRadius: "20px",
                  color: "white",
                  height: "100%",
                }}
              >
                <h2
                  className="mb-4"
                  style={{ fontSize: "2.5rem", fontWeight: "700" }}
                >
                  <FaMobileAlt className="mr-3" />
                  Technology-Driven Wellness
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    opacity: "0.9",
                    marginBottom: "30px",
                  }}
                >
                  We leverage cutting-edge technology to enhance coaching
                  effectiveness and client experience
                </p>

                <div className="tech-features">
                  {[
                    "AI-Powered Health Predictions",
                    "Real-time Biomarker Tracking",
                    "Virtual Reality Meditation",
                    "Wearable Integration",
                    "Blockchain Health Records",
                    "Telemedicine Platform",
                  ].map((feature, idx) => (
                    <div key={idx} className="d-flex align-items-center mb-3">
                      <div
                        className="tech-check mr-3"
                        style={{
                          width: "30px",
                          height: "30px",
                          backgroundColor: "rgba(255,255,255,0.2)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FaCheck size={12} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="innovation-grid">
                <div className="row">
                  {[
                    {
                      title: "Research & Development",
                      description:
                        "Annual investment of $2M+ in wellness research",
                      stat: "15 Ongoing Studies",
                    },
                    {
                      title: "Partnerships",
                      description:
                        "Collaborations with top medical institutions",
                      stat: "50+ Partners",
                    },
                    {
                      title: "Innovation Awards",
                      description:
                        "Recognized for health technology innovation",
                      stat: "12 Awards",
                    },
                    {
                      title: "Patent Portfolio",
                      description: "Proprietary health assessment algorithms",
                      stat: "8 Patents",
                    },
                  ].map((innovation, idx) => (
                    <div key={idx} className="col-md-6 mb-4">
                      <div
                        className="innovation-card p-4 h-100"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "15px",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                          height: "100%",
                          borderTop: "4px solid #2f89fc",
                        }}
                      >
                        <h5 style={{ fontWeight: "700", marginBottom: "10px" }}>
                          {innovation.title}
                        </h5>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#666",
                            marginBottom: "15px",
                          }}
                        >
                          {innovation.description}
                        </p>
                        <div
                          className="innovation-stat"
                          style={{
                            fontSize: "2rem",
                            fontWeight: "800",
                            color: "#2f89fc",
                          }}
                        >
                          {innovation.stat}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact & Community */}
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <span
                className="subheading"
                style={{ color: "#2f89fc", fontSize: "18px" }}
              >
                <FaGlobe className="mr-2" /> Our Global Impact
              </span>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginBottom: "20px",
                }}
              >
                Building a{" "}
                <span style={{ color: "#2f89fc" }}>Healthier World</span>,
                Together
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                className="impact-card p-5 h-100"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <h3 className="mb-4" style={{ color: "#222" }}>
                  <FaHandsHelping className="mr-2" /> Community Initiatives
                </h3>
                <div className="initiatives-list">
                  {[
                    {
                      name: "Wellness in Schools Program",
                      impact: "Reached 50,000+ students with health education",
                    },
                    {
                      name: "Corporate Wellness Partnerships",
                      impact: "Serving 200+ companies worldwide",
                    },
                    {
                      name: "Pro Bono Coaching",
                      impact: "10,000+ hours donated annually",
                    },
                    {
                      name: "Health Equity Program",
                      impact:
                        "Making coaching accessible to underserved communities",
                    },
                  ].map((initiative, idx) => (
                    <div
                      key={idx}
                      className="initiative-item mb-4 p-3"
                      style={{
                        backgroundColor: "#f8f9fa",
                        borderRadius: "10px",
                      }}
                    >
                      <h6 style={{ fontWeight: "600", marginBottom: "5px" }}>
                        {initiative.name}
                      </h6>
                      <p
                        className="mb-0"
                        style={{ fontSize: "14px", color: "#666" }}
                      >
                        {initiative.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div
                className="testimonial-card p-5 h-100"
                style={{
                  backgroundColor: "#2f89fc",
                  borderRadius: "20px",
                  color: "white",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="quote-icon"
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    fontSize: "80px",
                    opacity: "0.1",
                  }}
                >
                  "
                </div>
                <h3
                  className="mb-4"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  Client Success Stories
                </h3>
                <div
                  className="testimonial-content"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.8",
                      marginBottom: "25px",
                    }}
                  >
                    "After struggling with chronic fatigue for years, Health
                    Coach transformed my life. Their personalized approach
                    helped me regain my energy and vitality. I've lost 30
                    pounds, reversed my prediabetes, and feel better at 45 than
                    I did at 25!"
                  </p>
                  <div className="client-info">
                    <h5 className="mb-1" style={{ fontWeight: "600" }}>
                      Maria Rodriguez
                    </h5>
                    <p
                      className="mb-0"
                      style={{ opacity: "0.9", fontSize: "14px" }}
                    >
                      Client since 2020 • 65 lbs lost • Diabetes reversed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="ftco-section ftco-no-pt ftco-no-pb py-5"
        style={{
          background: "linear-gradient(135deg, #2f89fc 0%, #1a6fd8 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2
                style={{
                  color: "white",
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginBottom: "20px",
                }}
              >
                Ready to Begin Your{" "}
                <span style={{ color: "#ffd166" }}>Transformation</span>?
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "1.3rem",
                  maxWidth: "700px",
                  margin: "0 auto 40px",
                }}
              >
                Join thousands who have rediscovered vitality, confidence, and
                joy through our comprehensive health coaching programs
              </p>
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                <a
                  href="/contact"
                  className="btn btn-light btn-lg px-5 py-3"
                  style={{
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  <FaUserMd className="mr-2" /> Book Free Consultation
                </a>
                <a
                  href="/programs"
                  className="btn btn-outline-light btn-lg px-5 py-3"
                  style={{
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  <GiStethoscope className="mr-2" /> View All Programs
                </a>
              </div>
              <p
                className="mt-4 mb-0"
                style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}
              >
                Schedule your free 30-minute discovery call with one of our
                senior coaches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animated {
          animation-duration: 1s;
          animation-fill-mode: both;
        }

        .fadeInUp {
          animation-name: fadeInUp;
        }

        .phase-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }

        .philosophy-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12) !important;
        }

        .team-member-card:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </>
  );
};

export default About;
