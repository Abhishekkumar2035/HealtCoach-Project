import React from "react";
import { Helmet } from "react-helmet-async";

const Coach = () => {
  return (
    <>
      <Helmet>
        <title>Meet Our Coaches | Certified Health & Wellness Experts</title>
        <meta
          name="description"
          content="Meet our team of certified health coaches, nutritionists, and fitness experts. Learn about their qualifications, specialties, and how they can help transform your health."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47, 137, 252, 0.85), rgba(0, 0, 0, 0.7)), url('/images/coaches-hero.jpg')",
          height: "70vh",
          minHeight: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1
                className="mb-4"
                style={{
                  color: "white",
                  fontSize: "4rem",
                  fontWeight: "800",
                  lineHeight: "1.2",
                  textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                Meet Our <span style={{ color: "#ffd166" }}>World-Class</span>{" "}
                Health Coaches
              </h1>
              <p
                className="lead mb-5"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "1.3rem",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                500+ certified experts with 10,000+ hours of coaching
                experience. Each coach is carefully selected and trained in our
                proprietary methodology.
              </p>
              <div className="stats-container d-flex justify-content-center gap-5">
                <div className="stat-box text-center">
                  <h3
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      color: "white",
                      marginBottom: "5px",
                    }}
                  >
                    500+
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", margin: 0 }}>
                    Certified Coaches
                  </p>
                </div>
                <div className="stat-box text-center">
                  <h3
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      color: "white",
                      marginBottom: "5px",
                    }}
                  >
                    10K+
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", margin: 0 }}>
                    Coaching Hours
                  </p>
                </div>
                <div className="stat-box text-center">
                  <h3
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      color: "white",
                      marginBottom: "5px",
                    }}
                  >
                    98%
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", margin: 0 }}>
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Selection Process */}
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <span
                className="subheading"
                style={{
                  color: "#2f89fc",
                  fontSize: "18px",
                  fontWeight: "600",
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                Rigorous Selection Process
              </span>
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Only <span style={{ color: "#2f89fc" }}>1 in 50</span>{" "}
                Applicants Become a Health Coach
              </h2>
              <p
                className="lead"
                style={{
                  fontSize: "1.2rem",
                  color: "#666",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                Our coaches undergo a 7-step selection process followed by 6
                months of intensive training
              </p>
            </div>
          </div>

          <div className="row">
            {[
              {
                step: "01",
                title: "Initial Screening",
                description:
                  "Comprehensive review of credentials, education, and professional experience",
                details: [
                  "PhD/Master's degree required",
                  "Minimum 5 years experience",
                  "Valid certifications",
                ],
              },
              {
                step: "02",
                title: "Psychological Assessment",
                description:
                  "Evaluating empathy, communication skills, and coaching mindset",
                details: [
                  "Emotional intelligence test",
                  "Communication evaluation",
                  "Coaching aptitude",
                ],
              },
              {
                step: "03",
                title: "Technical Knowledge Test",
                description:
                  "Rigorous examination of nutrition, exercise science, and health principles",
                details: [
                  "Advanced nutrition",
                  "Exercise physiology",
                  "Behavioral psychology",
                ],
              },
              {
                step: "04",
                title: "Practical Simulation",
                description:
                  "Real-world coaching scenarios with professional actors",
                details: [
                  "Client interaction",
                  "Problem-solving",
                  "Protocol application",
                ],
              },
              {
                step: "05",
                title: "Background Verification",
                description:
                  "Thorough background check and reference validation",
                details: [
                  "License verification",
                  "Reference checks",
                  "Criminal background",
                ],
              },
              {
                step: "06",
                title: "Intensive Training",
                description:
                  "6-month proprietary coaching methodology training",
                details: [
                  "Our methodology",
                  "Client management",
                  "Progress tracking",
                ],
              },
              {
                step: "07",
                title: "Final Certification",
                description: "Complete assessment and certification process",
                details: [
                  "Final examination",
                  "Supervised sessions",
                  "Certification award",
                ],
              },
            ].map((process, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div
                  className="process-card p-4 h-100"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    height: "100%",
                    borderTop: "4px solid #2f89fc",
                  }}
                >
                  <div
                    className="process-number mb-3"
                    style={{
                      fontSize: "3rem",
                      fontWeight: "800",
                      color: "#2f89fc",
                      lineHeight: "1",
                    }}
                  >
                    {process.step}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    {process.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      marginBottom: "15px",
                    }}
                  >
                    {process.description}
                  </p>
                  <ul className="list-unstyled" style={{ fontSize: "13px" }}>
                    {process.details.map((detail, idx) => (
                      <li key={idx} className="mb-2">
                        <span style={{ color: "#2f89fc", fontWeight: "600" }}>
                          ✓
                        </span>{" "}
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Coaches */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <span
                className="subheading"
                style={{ color: "#2f89fc", fontSize: "18px" }}
              >
                Featured Coaches
              </span>
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Meet Our <span style={{ color: "#2f89fc" }}>Lead Coaches</span>
              </h2>
              <p className="lead">
                Each coach brings unique expertise and a proven track record of
                success
              </p>
            </div>
          </div>

          <div className="row">
            {[
              {
                name: "Dr. Sarah Johnson, PhD, RD",
                title: "Chief Nutritionist & Founder",
                specialization: "Clinical Nutrition & Metabolic Health",
                experience: "20+ years",
                education: "PhD Nutritional Sciences, Harvard",
                certifications: ["Registered Dietitian", "CDE", "CSSD"],
                expertise: [
                  "Diabetes Reversal",
                  "Weight Management",
                  "Gut Health",
                  "Hormone Balance",
                ],
                bio: "Former professor at Harvard Medical School, published 50+ research papers. Specializes in metabolic syndrome reversal through evidence-based nutrition.",
                image: "/image1/img1.avif",
                clients: "2,500+",
                successRate: "96%",
              },
              {
                name: "Michael Chen, MD, CSCS",
                title: "Director of Sports Medicine",
                specialization: "Sports Performance & Rehabilitation",
                experience: "15+ years",
                education: "MD Sports Medicine, Stanford",
                certifications: ["CSCS", "NASM-CPT", "FMS Level 2"],
                expertise: [
                  "Injury Prevention",
                  "Athletic Performance",
                  "Post-Rehab Training",
                  "Mobility",
                ],
                bio: "Team physician for Olympic athletes. Developed rehabilitation protocols for professional sports teams worldwide.",
                image: "/image1/img2.avif",
                clients: "1,800+",
                successRate: "94%",
              },
              {
                name: "Dr. Emily Parker, PsyD",
                title: "Behavioral Health Director",
                specialization: "Health Psychology & Behavior Change",
                experience: "12+ years",
                education: "PsyD Clinical Psychology, Yale",
                certifications: ["NBC-HWC", "CBT Certified", "MBSR Teacher"],
                expertise: [
                  "Habit Formation",
                  "Stress Management",
                  "Mindful Eating",
                  "Motivation",
                ],
                bio: "Pioneer in digital health interventions. Author of bestselling book 'The Mindful Body' on sustainable behavior change.",
                image: "/image1/img3.avif",
                clients: "2,200+",
                successRate: "97%",
              },
              {
                name: "David Rodriguez, MS, RD, CPT",
                title: "Head Coaching Director",
                specialization: "Program Design & Client Success",
                experience: "10+ years",
                education: "MS Exercise Physiology, Texas A&M",
                certifications: ["PN Level 2", "ACE-CM", "Precision Nutrition"],
                expertise: [
                  "Program Design",
                  "Nutrition Coaching",
                  "Client Adherence",
                  "Progress Tracking",
                ],
                bio: "Trained 200+ health coaches worldwide. Developed our signature coaching methodology used by all coaches.",
                image: "/image1/img4.avif",
                clients: "3,000+",
                successRate: "98%",
              },
            ].map((coach, index) => (
              <div key={index} className="col-lg-6 mb-5">
                <div
                  className="coach-card"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    height: "100%",
                  }}
                >
                  <div className="row no-gutters">
                    <div className="col-md-5">
                      <div
                        style={{
                          height: "100%",
                          minHeight: "400px",
                          backgroundImage: `url('${coach.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            background:
                              "linear-gradient(transparent, rgba(0,0,0,0.7))",
                            padding: "20px",
                            color: "white",
                          }}
                        >
                          <h4
                            className="mb-1"
                            style={{ fontSize: "1.3rem", fontWeight: "700" }}
                          >
                            {coach.name}
                          </h4>
                          <p
                            className="mb-0"
                            style={{ color: "#2f89fc", fontWeight: "600" }}
                          >
                            {coach.title}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="p-4 h-100">
                        <div className="coach-specialization mb-3">
                          <span
                            className="badge"
                            style={{
                              backgroundColor: "#e8f4ff",
                              color: "#2f89fc",
                              padding: "5px 15px",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            {coach.specialization}
                          </span>
                        </div>

                        <div className="coach-stats d-flex gap-4 mb-4">
                          <div className="text-center">
                            <div
                              style={{
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                color: "#2f89fc",
                              }}
                            >
                              {coach.experience}
                            </div>
                            <div style={{ fontSize: "12px", color: "#666" }}>
                              Experience
                            </div>
                          </div>
                          <div className="text-center">
                            <div
                              style={{
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                color: "#2f89fc",
                              }}
                            >
                              {coach.clients}
                            </div>
                            <div style={{ fontSize: "12px", color: "#666" }}>
                              Clients Helped
                            </div>
                          </div>
                          <div className="text-center">
                            <div
                              style={{
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                color: "#2f89fc",
                              }}
                            >
                              {coach.successRate}
                            </div>
                            <div style={{ fontSize: "12px", color: "#666" }}>
                              Success Rate
                            </div>
                          </div>
                        </div>

                        <p
                          style={{
                            fontSize: "14px",
                            color: "#555",
                            marginBottom: "20px",
                          }}
                        >
                          {coach.bio}
                        </p>

                        <div className="coach-expertise mb-4">
                          <h6
                            style={{
                              color: "#2f89fc",
                              fontWeight: "600",
                              marginBottom: "10px",
                            }}
                          >
                            Areas of Expertise:
                          </h6>
                          <div className="expertise-tags">
                            {coach.expertise.map((skill, idx) => (
                              <span
                                key={idx}
                                className="badge mr-2 mb-2"
                                style={{
                                  backgroundColor: "#f8f9fa",
                                  color: "#333",
                                  fontSize: "12px",
                                  padding: "5px 10px",
                                  borderRadius: "15px",
                                  fontWeight: "500",
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="coach-credentials">
                          <h6
                            style={{
                              color: "#2f89fc",
                              fontWeight: "600",
                              marginBottom: "10px",
                            }}
                          >
                            Credentials:
                          </h6>
                          <p
                            style={{
                              fontSize: "13px",
                              color: "#666",
                              marginBottom: "5px",
                            }}
                          >
                            {coach.education}
                          </p>
                          <div className="d-flex flex-wrap gap-2">
                            {coach.certifications.map((cert, idx) => (
                              <span
                                key={idx}
                                className="badge"
                                style={{
                                  backgroundColor: "#2f89fc",
                                  color: "white",
                                  fontSize: "11px",
                                  padding: "3px 8px",
                                  borderRadius: "10px",
                                }}
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4">
                          <a
                            href={`/coach/${coach.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="btn btn-primary btn-sm"
                          >
                            View Full Profile
                          </a>
                          <a
                            href="/booking"
                            className="btn btn-outline-primary btn-sm ml-2"
                          >
                            Book Session
                          </a>
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

      {/* Coaching Specialties */}
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <span
                className="subheading"
                style={{ color: "#2f89fc", fontSize: "18px" }}
              >
                Specialized Coaching Programs
              </span>
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Find Your{" "}
                <span style={{ color: "#2f89fc" }}>Perfect Coach Match</span>
              </h2>
              <p className="lead">
                We match you with coaches who specialize in your specific health
                goals
              </p>
            </div>
          </div>

          <div className="row">
            {[
              {
                category: "Weight Management",
                description:
                  "Sustainable weight loss and maintenance strategies",
                coaches: "150+ Specialists",
                approach: "Metabolic optimization + behavior change",
                icon: "⚖️",
              },
              {
                category: "Sports Performance",
                description:
                  "Athletic training, recovery, and peak performance",
                coaches: "80+ Specialists",
                approach: "Periodization + nutrition timing",
                icon: "🏃",
              },
              {
                category: "Chronic Conditions",
                description: "Diabetes, hypertension, PCOS management",
                coaches: "120+ Specialists",
                approach: "Medical nutrition therapy",
                icon: "❤️",
              },
              {
                category: "Mental Wellness",
                description: "Stress, anxiety, and emotional eating support",
                coaches: "90+ Specialists",
                approach: "Cognitive behavioral techniques",
                icon: "🧠",
              },
              {
                category: "Women's Health",
                description: "Hormone balance, menopause, fertility",
                coaches: "70+ Specialists",
                approach: "Hormone-focused nutrition",
                icon: "👩",
              },
              {
                category: "Corporate Wellness",
                description: "Workplace health programs for teams",
                coaches: "60+ Specialists",
                approach: "Group coaching + workshops",
                icon: "🏢",
              },
            ].map((specialty, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div
                  className="specialty-card p-4 h-100"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    height: "100%",
                    borderTop: "4px solid #2f89fc",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div
                    className="specialty-icon mb-3"
                    style={{
                      fontSize: "3rem",
                      textAlign: "center",
                    }}
                  >
                    {specialty.icon}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                      textAlign: "center",
                    }}
                  >
                    {specialty.category}
                  </h4>
                  <p
                    style={{
                      textAlign: "center",
                      color: "#666",
                      fontSize: "14px",
                      marginBottom: "15px",
                    }}
                  >
                    {specialty.description}
                  </p>
                  <div className="specialty-details">
                    <div
                      className="d-flex justify-content-between mb-2"
                      style={{ fontSize: "13px" }}
                    >
                      <span style={{ color: "#666" }}>Available Coaches:</span>
                      <span style={{ fontWeight: "600", color: "#2f89fc" }}>
                        {specialty.coaches}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mb-3"
                      style={{ fontSize: "13px" }}
                    >
                      <span style={{ color: "#666" }}>Primary Approach:</span>
                      <span style={{ fontWeight: "600", color: "#2f89fc" }}>
                        {specialty.approach}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <a
                      href={`/coaching/${specialty.category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      View Coaches
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Matching System */}
      <section className="ftco-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="matching-system p-5"
                style={{
                  backgroundColor: "#2f89fc",
                  borderRadius: "20px",
                  color: "white",
                  height: "100%",
                }}
              >
                <h2
                  className="mb-4"
                  style={{ fontSize: "2.2rem", fontWeight: "700" }}
                >
                  Our Smart Coach Matching System
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    opacity: "0.9",
                    marginBottom: "30px",
                  }}
                >
                  We use a sophisticated algorithm to match you with the perfect
                  coach based on 15+ factors
                </p>

                <div className="matching-factors">
                  {[
                    "Your health goals and objectives",
                    "Medical history and conditions",
                    "Lifestyle and schedule",
                    "Personality type and communication style",
                    "Previous coaching experience",
                    "Budget and commitment level",
                    "Preferred coaching frequency",
                  ].map((factor, idx) => (
                    <div key={idx} className="d-flex align-items-center mb-3">
                      <div
                        className="mr-3"
                        style={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "rgba(255,255,255,0.2)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                        }}
                      >
                        ✓
                      </div>
                      <span>{factor}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 text-center">
                  <a href="/matching-quiz" className="btn btn-light">
                    Take Matching Quiz
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="success-metrics p-5"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                }}
              >
                <h3 className="mb-4" style={{ color: "#222" }}>
                  Why Our Coach Matching Works
                </h3>

                <div className="metrics-grid">
                  <div className="row">
                    <div className="col-6 mb-4">
                      <div className="metric-item text-center">
                        <div
                          style={{
                            fontSize: "2.5rem",
                            fontWeight: "800",
                            color: "#2f89fc",
                            marginBottom: "5px",
                          }}
                        >
                          94%
                        </div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          Client-Coach Compatibility
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-4">
                      <div className="metric-item text-center">
                        <div
                          style={{
                            fontSize: "2.5rem",
                            fontWeight: "800",
                            color: "#2f89fc",
                            marginBottom: "5px",
                          }}
                        >
                          3x
                        </div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          Better Retention Rate
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-4">
                      <div className="metric-item text-center">
                        <div
                          style={{
                            fontSize: "2.5rem",
                            fontWeight: "800",
                            color: "#2f89fc",
                            marginBottom: "5px",
                          }}
                        >
                          40%
                        </div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          Faster Goal Achievement
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-4">
                      <div className="metric-item text-center">
                        <div
                          style={{
                            fontSize: "2.5rem",
                            fontWeight: "800",
                            color: "#2f89fc",
                            marginBottom: "5px",
                          }}
                        >
                          99%
                        </div>
                        <div style={{ fontSize: "14px", color: "#666" }}>
                          Client Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="testimonial mt-4 p-4"
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: "10px",
                    fontStyle: "italic",
                  }}
                >
                  <p className="mb-2" style={{ fontSize: "14px" }}>
                    "The coach matching system paired me with exactly the right
                    expert. My coach understood my needs from day one."
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "13px", fontWeight: "600" }}
                  >
                    — Jessica M., Lost 45 lbs in 6 months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Ready to{" "}
                <span style={{ color: "#2f89fc" }}>Find Your Coach</span>?
              </h2>
              <p className="lead">Start your journey in three simple steps</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <div
                className="step-card p-5 text-center"
                style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <div
                  className="step-number mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#2f89fc",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    margin: "0 auto",
                  }}
                >
                  1
                </div>
                <h4 style={{ marginBottom: "15px" }}>Complete Assessment</h4>
                <p style={{ color: "#666", fontSize: "15px" }}>
                  Take our comprehensive health assessment and matching
                  questionnaire
                </p>
                <a href="/assessment" className="btn btn-outline-primary mt-3">
                  Start Assessment
                </a>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                className="step-card p-5 text-center"
                style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  height: "100%",
                  borderTop: "4px solid #2f89fc",
                }}
              >
                <div
                  className="step-number mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#2f89fc",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    margin: "0 auto",
                  }}
                >
                  2
                </div>
                <h4 style={{ marginBottom: "15px" }}>Meet Your Matches</h4>
                <p style={{ color: "#666", fontSize: "15px" }}>
                  Review 3-5 coach profiles matched to your specific needs and
                  preferences
                </p>
                <a
                  href="/coach-matches"
                  className="btn btn-outline-primary mt-3"
                >
                  View Sample Matches
                </a>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                className="step-card p-5 text-center"
                style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <div
                  className="step-number mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#2f89fc",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    margin: "0 auto",
                  }}
                >
                  3
                </div>
                <h4 style={{ marginBottom: "15px" }}>Start Coaching</h4>
                <p style={{ color: "#666", fontSize: "15px" }}>
                  Begin your personalized coaching program with your matched
                  expert
                </p>
                <a href="/booking" className="btn btn-primary mt-3">
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="ftco-section"
        style={{
          background: "linear-gradient(135deg, #2f89fc 0%, #1a6fd8 100%)",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2
                className="mb-4"
                style={{ fontSize: "2.5rem", fontWeight: "700" }}
              >
                Find Your Perfect Health Coach Today
              </h2>
              <p
                className="mb-5"
                style={{ fontSize: "1.2rem", opacity: "0.9" }}
              >
                Our expert matching system ensures you work with a coach who
                truly understands your goals
              </p>
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                <a
                  href="/assessment"
                  className="btn btn-light btn-lg px-5 py-3"
                >
                  Find My Coach
                </a>
                <a
                  href="/coaches-all"
                  className="btn btn-outline-light btn-lg px-5 py-3"
                >
                  Browse All Coaches
                </a>
              </div>
              <p
                className="mt-4 mb-0"
                style={{ fontSize: "14px", opacity: "0.8" }}
              >
                All new clients receive a free 30-minute discovery call
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coach;
