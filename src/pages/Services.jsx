import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredService, setHoveredService] = useState(null);

  const serviceCategories = [
    { id: "all", name: "All Services", color: "#8B5CF6", icon: "✨" },
    { id: "nutrition", name: "Nutrition", color: "#10B981", icon: "🥗" },
    { id: "fitness", name: "Fitness", color: "#EF4444", icon: "💪" },
    { id: "wellness", name: "Wellness", color: "#F59E0B", icon: "🧘" },
    { id: "medical", name: "Medical", color: "#EC4899", icon: "🏥" },
    { id: "corporate", name: "Corporate", color: "#6366F1", icon: "🏢" },
  ];

  const allServices = [
    {
      id: 1,
      name: "Personalized Nutrition Planning",
      category: "nutrition",
      description:
        "Custom meal plans tailored to your metabolism, preferences, and health goals",
      duration: "Ongoing",
      price: "From $99/month",
      features: [
        "DNA-based nutrition analysis",
        "Personalized meal plans",
        "Grocery shopping guides",
        "Recipe database access",
        "Weekly plan adjustments",
        "Nutrition tracking",
      ],
      color: "#10B981",
      icon: "🥑",
      popular: true,
      results: ["Weight management", "Improved energy", "Better digestion"],
    },
    {
      id: 2,
      name: "One-on-One Fitness Coaching",
      category: "fitness",
      description:
        "Custom workout programs with live coaching and form correction",
      duration: "4-12 weeks",
      price: "From $149/month",
      features: [
        "Personalized workout plans",
        "Video form analysis",
        "Progress tracking",
        "Weekly check-ins",
        "Mobility assessments",
        "Recovery protocols",
      ],
      color: "#EF4444",
      icon: "🏋️",
      popular: true,
      results: ["Strength gains", "Improved mobility", "Better endurance"],
    },
    {
      id: 3,
      name: "Mindfulness & Stress Management",
      category: "wellness",
      description:
        "Techniques to reduce stress, improve focus, and enhance mental clarity",
      duration: "8 weeks",
      price: "$79/month",
      features: [
        "Daily meditation guidance",
        "Stress tracking",
        "Sleep optimization",
        "Breathing exercises",
        "Mindfulness practices",
        "Digital detox plans",
      ],
      color: "#F59E0B",
      icon: "🌿",
      popular: false,
      results: ["Reduced anxiety", "Better sleep", "Increased focus"],
    },
    {
      id: 4,
      name: "Metabolic Health Optimization",
      category: "medical",
      description:
        "Science-backed approach to improving metabolism and hormone balance",
      duration: "12 weeks",
      price: "$199/month",
      features: [
        "Comprehensive blood work",
        "Metabolic rate testing",
        "Hormone balancing",
        "Supplement protocols",
        "Progress monitoring",
        "Medical supervision",
      ],
      color: "#EC4899",
      icon: "⚕️",
      popular: false,
      results: ["Improved metabolism", "Hormone balance", "Increased vitality"],
    },
    {
      id: 5,
      name: "Corporate Wellness Programs",
      category: "corporate",
      description:
        "Custom wellness solutions for businesses to improve employee health",
      duration: "Custom",
      price: "Custom pricing",
      features: [
        "Health risk assessments",
        "Group workshops",
        "Executive coaching",
        "Wellness challenges",
        "Progress reporting",
        "ROI analysis",
      ],
      color: "#6366F1",
      icon: "👔",
      popular: true,
      results: ["Reduced absenteeism", "Higher productivity", "Better morale"],
    },
    {
      id: 6,
      name: "Gut Health Restoration",
      category: "nutrition",
      description:
        "Specialized program to heal and optimize your digestive system",
      duration: "8 weeks",
      price: "$159/month",
      features: [
        "Microbiome analysis",
        "Elimination diet guidance",
        "Probiotic protocols",
        "Digestive enzyme support",
        "Food sensitivity testing",
        "Gut healing supplements",
      ],
      color: "#10B981",
      icon: "🦠",
      popular: false,
      results: [
        "Better digestion",
        "Reduced inflammation",
        "Improved immunity",
      ],
    },
    {
      id: 7,
      name: "Sports Performance Enhancement",
      category: "fitness",
      description:
        "Advanced training for athletes to maximize performance and recovery",
      duration: "12 weeks",
      price: "$249/month",
      features: [
        "Performance testing",
        "Periodized training",
        "Recovery optimization",
        "Nutrition timing",
        "Injury prevention",
        "Mental training",
      ],
      color: "#EF4444",
      icon: "🏅",
      popular: false,
      results: ["Enhanced performance", "Faster recovery", "Injury prevention"],
    },
    {
      id: 8,
      name: "Sleep Optimization Program",
      category: "wellness",
      description:
        "Comprehensive approach to improve sleep quality and duration",
      duration: "6 weeks",
      price: "$89/month",
      features: [
        "Sleep tracking analysis",
        "Circadian rhythm reset",
        "Sleep environment audit",
        "Relaxation techniques",
        "Supplement guidance",
        "Bedtime routine creation",
      ],
      color: "#F59E0B",
      icon: "😴",
      popular: true,
      results: ["Better sleep quality", "More energy", "Improved mood"],
    },
    {
      id: 9,
      name: "Chronic Condition Management",
      category: "medical",
      description:
        "Support for managing diabetes, hypertension, PCOS and other conditions",
      duration: "Ongoing",
      price: "$179/month",
      features: [
        "Medical consultation",
        "Condition-specific plans",
        "Medication guidance",
        "Symptom tracking",
        "Lifestyle adjustments",
        "Progress monitoring",
      ],
      color: "#EC4899",
      icon: "❤️",
      popular: false,
      results: [
        "Better management",
        "Reduced symptoms",
        "Improved quality of life",
      ],
    },
    {
      id: 10,
      name: "Weight Loss Transformation",
      category: "nutrition",
      description:
        "Holistic approach to sustainable weight loss and maintenance",
      duration: "16 weeks",
      price: "$129/month",
      features: [
        "Metabolic testing",
        "Behavior change coaching",
        "Meal planning",
        "Accountability system",
        "Progress photos",
        "Maintenance planning",
      ],
      color: "#10B981",
      icon: "⚖️",
      popular: true,
      results: [
        "Sustainable weight loss",
        "Improved habits",
        "Better body composition",
      ],
    },
    {
      id: 11,
      name: "Executive Health Coaching",
      category: "corporate",
      description: "Premium health coaching for executives and high-performers",
      duration: "Custom",
      price: "$499/month",
      features: [
        "24/7 access to coach",
        "Executive health assessments",
        "Stress resilience training",
        "Time optimization",
        "Peak performance coaching",
        "Confidential sessions",
      ],
      color: "#6366F1",
      icon: "👑",
      popular: false,
      results: [
        "Better decision making",
        "Reduced burnout",
        "Enhanced leadership",
      ],
    },
    {
      id: 12,
      name: "Women's Health & Hormones",
      category: "medical",
      description: "Specialized support for women's unique health needs",
      duration: "12 weeks",
      price: "$169/month",
      features: [
        "Hormone testing",
        "Cycle tracking",
        "Nutrition for hormones",
        "Stress management",
        "Supplement protocols",
        "Menopause support",
      ],
      color: "#EC4899",
      icon: "🌸",
      popular: true,
      results: ["Hormone balance", "Symptom reduction", "Improved vitality"],
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? allServices
      : allServices.filter((service) => service.category === activeCategory);

  const serviceStats = [
    { number: "98%", label: "Client Satisfaction", color: "#10B981" },
    { number: "10,000+", label: "Hours of Coaching", color: "#EF4444" },
    { number: "500+", label: "Transformed Lives", color: "#F59E0B" },
    { number: "15+", label: "Certified Experts", color: "#8B5CF6" },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Assessment",
      description: "Comprehensive health evaluation and goal setting",
      color: "#10B981",
    },
    {
      step: 2,
      title: "Planning",
      description: "Custom strategy creation based on your unique needs",
      color: "#8B5CF6",
    },
    {
      step: 3,
      title: "Implementation",
      description: "Guided execution with ongoing support",
      color: "#F59E0B",
    },
    {
      step: 4,
      title: "Optimization",
      description: "Continuous improvement and maintenance",
      color: "#EC4899",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Comprehensive Health & Wellness Programs</title>
        <meta
          name="description"
          content="Discover our comprehensive range of health coaching services. From nutrition and fitness to wellness and corporate programs, we have solutions for every health goal."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="services-hero"
        style={{
          background: "linear-gradient(135deg, #fdf2f8 0%, #f0f9ff 100%)",
          padding: "120px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#8B5CF6",
                    color: "white",
                    padding: "8px 20px",
                    borderRadius: "50px",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                >
                  🎯 COMPREHENSIVE WELLNESS SOLUTIONS
                </span>

                <h1
                  className="mb-4"
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: "800",
                    lineHeight: "1.2",
                    color: "#1f2937",
                  }}
                >
                  Transform Your Health with Our{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Expert Services
                  </span>
                </h1>

                <p
                  className="lead mb-5"
                  style={{
                    fontSize: "1.3rem",
                    color: "#6b7280",
                    maxWidth: "600px",
                  }}
                >
                  From personalized nutrition plans to corporate wellness
                  programs, we offer science-backed solutions for every aspect
                  of your health journey.
                </p>

                <div className="hero-stats">
                  <div className="row">
                    {serviceStats.map((stat, index) => (
                      <div key={index} className="col-6 mb-4">
                        <div className="stat-box">
                          <h3
                            style={{
                              fontSize: "2.5rem",
                              fontWeight: "800",
                              color: stat.color,
                              marginBottom: "5px",
                            }}
                          >
                            {stat.number}
                          </h3>
                          <p style={{ color: "#6b7280", margin: 0 }}>
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="hero-visual"
                style={{
                  position: "relative",
                  height: "500px",
                }}
              >
                {/* Animated circles */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "400px",
                    height: "400px",
                    background:
                      "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
                  }}
                ></div>

                {/* Service icons floating */}
                {["🥗", "💪", "🧘", "🏥", "🏢", "❤️"].map((icon, index) => (
                  <div
                    key={index}
                    style={{
                      position: "absolute",
                      top: `${20 + index * 15}%`,
                      left: `${10 + index * 15}%`,
                      width: "70px",
                      height: "70px",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "32px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      transform: `rotate(${index * 15}deg)`,
                      animation: `float 3s ease-in-out ${
                        index * 0.5
                      }s infinite`,
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        className="category-filter"
        style={{
          padding: "40px 0",
          backgroundColor: "white",
          position: "sticky",
          top: "0",
          zIndex: "100",
          boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="category-buttons d-flex justify-content-center flex-wrap gap-3">
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    style={{
                      backgroundColor:
                        activeCategory === category.id
                          ? category.color
                          : "white",
                      color:
                        activeCategory === category.id ? "white" : "#6b7280",
                      border: `2px solid ${category.color}`,
                      padding: "12px 24px",
                      borderRadius: "50px",
                      fontWeight: "600",
                      fontSize: "15px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      boxShadow:
                        activeCategory === category.id
                          ? `0 5px 20px ${category.color}40`
                          : "none",
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      color: "#1f2937",
                    }}
                  >
                    {activeCategory === "all"
                      ? "All Services"
                      : serviceCategories.find((c) => c.id === activeCategory)
                          ?.name}
                  </h2>
                  <p style={{ color: "#6b7280", marginBottom: 0 }}>
                    {filteredServices.length} services available
                  </p>
                </div>
                <div style={{ fontSize: "14px", color: "#9ca3af" }}>
                  💡 Click on any service for more details
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {filteredServices.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div
                  className="service-card h-100"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow:
                      hoveredService === service.id
                        ? `0 25px 50px ${service.color}40`
                        : "0 10px 30px rgba(0,0,0,0.08)",
                    height: "100%",
                    position: "relative",
                    transition: "all 0.3s ease",
                    transform:
                      hoveredService === service.id
                        ? "translateY(-10px)"
                        : "none",
                    border: `1px solid ${service.color}20`,
                  }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Popular badge */}
                  {service.popular && (
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        backgroundColor: service.color,
                        color: "white",
                        padding: "5px 15px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        zIndex: "1",
                      }}
                    >
                      POPULAR
                    </div>
                  )}

                  {/* Service header */}
                  <div
                    style={{
                      padding: "30px 30px 20px",
                      backgroundColor: `${service.color}10`,
                      borderBottom: `1px solid ${service.color}20`,
                    }}
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: service.color,
                          borderRadius: "15px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "28px",
                          flexShrink: 0,
                        }}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "1.4rem",
                            fontWeight: "700",
                            marginBottom: "10px",
                            color: "#1f2937",
                          }}
                        >
                          {service.name}
                        </h3>
                        <div
                          style={{
                            display: "inline-block",
                            backgroundColor: `${service.color}20`,
                            color: service.color,
                            padding: "4px 12px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          {service.category.charAt(0).toUpperCase() +
                            service.category.slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service content */}
                  <div style={{ padding: "25px 30px" }}>
                    <p
                      style={{
                        color: "#6b7280",
                        fontSize: "15px",
                        lineHeight: "1.6",
                        marginBottom: "25px",
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h6
                        style={{
                          color: service.color,
                          fontSize: "14px",
                          fontWeight: "600",
                          marginBottom: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span>📋</span> Key Features
                      </h6>
                      <ul className="list-unstyled" style={{ marginBottom: 0 }}>
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li
                            key={index}
                            className="mb-2"
                            style={{ fontSize: "14px" }}
                          >
                            <div className="d-flex align-items-start">
                              <span
                                style={{
                                  color: service.color,
                                  marginRight: "10px",
                                  fontSize: "12px",
                                  lineHeight: "1.5",
                                }}
                              >
                                •
                              </span>
                              <span style={{ lineHeight: "1.5" }}>
                                {feature}
                              </span>
                            </div>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li
                            style={{
                              fontSize: "13px",
                              color: service.color,
                              marginTop: "5px",
                            }}
                          >
                            + {service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="mb-4">
                      <h6
                        style={{
                          color: service.color,
                          fontSize: "14px",
                          fontWeight: "600",
                          marginBottom: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span>🎯</span> Expected Results
                      </h6>
                      <div className="results-tags">
                        {service.results.map((result, index) => (
                          <span
                            key={index}
                            className="badge mr-2 mb-2"
                            style={{
                              backgroundColor: `${service.color}15`,
                              color: service.color,
                              fontSize: "12px",
                              padding: "4px 10px",
                              borderRadius: "15px",
                              fontWeight: "500",
                            }}
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Duration */}
                    <div
                      className="service-meta d-flex justify-content-between align-items-center mt-4 pt-4"
                      style={{
                        borderTop: "1px solid #f3f4f6",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#9ca3af",
                            marginBottom: "5px",
                          }}
                        >
                          Duration
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#1f2937",
                          }}
                        >
                          {service.duration}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#9ca3af",
                            marginBottom: "5px",
                          }}
                        >
                          Starting from
                        </div>
                        <div
                          style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            color: service.color,
                          }}
                        >
                          {service.price}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div
                    style={{
                      padding: "20px 30px",
                      backgroundColor: "#f9fafb",
                      borderTop: "1px solid #f3f4f6",
                    }}
                  >
                    <div className="d-flex gap-3">
                      <button
                        style={{
                          flex: 1,
                          backgroundColor: service.color,
                          color: "white",
                          border: "none",
                          padding: "12px 20px",
                          borderRadius: "10px",
                          fontWeight: "600",
                          fontSize: "15px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Learn More
                      </button>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          color: service.color,
                          border: `2px solid ${service.color}`,
                          padding: "12px 20px",
                          borderRadius: "10px",
                          fontWeight: "600",
                          fontSize: "15px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          minWidth: "120px",
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="process-section"
        style={{
          background: "linear-gradient(135deg, #faf5ff 0%, #f0f9ff 100%)",
          padding: "80px 0",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <span
                style={{
                  color: "#8B5CF6",
                  fontSize: "18px",
                  fontWeight: "600",
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                OUR METHODOLOGY
              </span>
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#1f2937",
                }}
              >
                How Our <span style={{ color: "#8B5CF6" }}>Services Work</span>
              </h2>
              <p
                className="lead"
                style={{ fontSize: "1.2rem", color: "#6b7280" }}
              >
                A proven 4-step process that guarantees results
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="process-timeline">
                <div className="row">
                  {processSteps.map((step, index) => (
                    <div key={index} className="col-lg-3 col-md-6">
                      <div
                        className="process-step text-center"
                        style={{ position: "relative" }}
                      >
                        {/* Connector line */}
                        {index < processSteps.length - 1 && (
                          <div
                            className="d-none d-lg-block"
                            style={{
                              position: "absolute",
                              top: "60px",
                              right: "-50%",
                              width: "100%",
                              height: "3px",
                              backgroundColor: "#e5e7eb",
                              zIndex: "0",
                            }}
                          ></div>
                        )}

                        <div
                          className="step-circle"
                          style={{
                            width: "120px",
                            height: "120px",
                            backgroundColor: step.color,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 20px",
                            position: "relative",
                            zIndex: "1",
                            boxShadow: `0 15px 30px ${step.color}40`,
                          }}
                        >
                          <div
                            className="step-number"
                            style={{
                              width: "50px",
                              height: "50px",
                              backgroundColor: "white",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "24px",
                              fontWeight: "700",
                              color: step.color,
                            }}
                          >
                            {step.step}
                          </div>
                        </div>

                        <h4
                          style={{
                            fontSize: "1.4rem",
                            fontWeight: "700",
                            marginBottom: "15px",
                            color: "#1f2937",
                          }}
                        >
                          {step.title}
                        </h4>
                        <p
                          style={{
                            color: "#6b7280",
                            fontSize: "15px",
                            lineHeight: "1.6",
                            maxWidth: "250px",
                            margin: "0 auto",
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="custom-solutions" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="custom-card p-5"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                  borderRadius: "30px",
                  color: "white",
                  height: "100%",
                }}
              >
                <h2
                  className="mb-4"
                  style={{ fontSize: "2.5rem", fontWeight: "700" }}
                >
                  Need a{" "}
                  <span style={{ color: "#FBBF24" }}>Custom Solution</span>?
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    opacity: "0.9",
                    marginBottom: "30px",
                  }}
                >
                  We create personalized service packages for unique health
                  challenges, combining multiple approaches for optimal results.
                </p>

                <div className="custom-features mb-4">
                  {[
                    "Combine multiple services",
                    "Flexible scheduling",
                    "Dedicated success manager",
                    "Priority support",
                    "Advanced analytics",
                    "Family packages",
                  ].map((feature, index) => (
                    <div key={index} className="d-flex align-items-center mb-3">
                      <div
                        className="mr-3"
                        style={{
                          width: "30px",
                          height: "30px",
                          backgroundColor: "rgba(255,255,255,0.2)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                        }}
                      >
                        ✓
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  style={{
                    backgroundColor: "white",
                    color: "#8B5CF6",
                    border: "none",
                    padding: "15px 40px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    fontSize: "16px",
                    cursor: "pointer",
                    marginTop: "20px",
                  }}
                >
                  Request Custom Package
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial-grid">
                <div className="row g-4">
                  {[
                    {
                      quote:
                        "The weight loss program changed my life. I lost 45 pounds and gained so much energy!",
                      author: "Sarah M.",
                      service: "Weight Loss Transformation",
                      color: "#10B981",
                    },
                    {
                      quote:
                        "Corporate wellness program boosted our team's productivity by 30%",
                      author: "TechCorp Inc.",
                      service: "Corporate Wellness",
                      color: "#6366F1",
                    },
                    {
                      quote:
                        "Finally found a sustainable approach to fitness that works with my busy schedule",
                      author: "Michael T.",
                      service: "Fitness Coaching",
                      color: "#EF4444",
                    },
                    {
                      quote:
                        "Sleep optimization gave me back my energy and improved my mental clarity",
                      author: "Jessica L.",
                      service: "Sleep Program",
                      color: "#F59E0B",
                    },
                  ].map((testimonial, index) => (
                    <div key={index} className="col-md-6">
                      <div
                        className="testimonial-card p-4 h-100"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            color: testimonial.color,
                            fontSize: "24px",
                            marginBottom: "15px",
                          }}
                        >
                          "
                        </div>
                        <p
                          style={{
                            fontSize: "15px",
                            color: "#4b5563",
                            lineHeight: "1.6",
                            fontStyle: "italic",
                            marginBottom: "20px",
                          }}
                        >
                          {testimonial.quote}
                        </p>
                        <div>
                          <div
                            style={{
                              fontWeight: "600",
                              color: "#1f2937",
                              marginBottom: "5px",
                            }}
                          >
                            {testimonial.author}
                          </div>
                          <div
                            style={{
                              fontSize: "14px",
                              color: testimonial.color,
                            }}
                          >
                            {testimonial.service}
                          </div>
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

      {/* CTA Section */}
      <section
        className="services-cta"
        style={{
          background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
          color: "white",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2
                className="mb-4"
                style={{ fontSize: "3rem", fontWeight: "800" }}
              >
                Ready to Transform{" "}
                <span style={{ color: "#8B5CF6" }}>Your Health</span>?
              </h2>
              <p
                className="mb-5"
                style={{
                  fontSize: "1.2rem",
                  opacity: "0.9",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Take the first step towards a healthier, happier you. Our expert
                team is ready to guide you on your wellness journey.
              </p>

              <div className="d-flex justify-content-center gap-4 flex-wrap mb-5">
                <button
                  style={{
                    backgroundColor: "#8B5CF6",
                    color: "white",
                    border: "none",
                    padding: "16px 40px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    fontSize: "18px",
                    cursor: "pointer",
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                  }}
                >
                  Book Free Consultation
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "2px solid rgba(255,255,255,0.3)",
                    padding: "16px 40px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  View All Services
                </button>
              </div>

              <div className="cta-benefits">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="benefit text-center p-3">
                          <div
                            style={{ fontSize: "32px", marginBottom: "10px" }}
                          >
                            👨‍⚕️
                          </div>
                          <div style={{ fontSize: "14px", opacity: "0.9" }}>
                            Certified Experts
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="benefit text-center p-3">
                          <div
                            style={{ fontSize: "32px", marginBottom: "10px" }}
                          >
                            🎯
                          </div>
                          <div style={{ fontSize: "14px", opacity: "0.9" }}>
                            Proven Results
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="benefit text-center p-3">
                          <div
                            style={{ fontSize: "32px", marginBottom: "10px" }}
                          >
                            📱
                          </div>
                          <div style={{ fontSize: "14px", opacity: "0.9" }}>
                            Digital Access
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .service-card:hover .service-image {
          transform: scale(1.05);
        }

        .process-step:hover .step-circle {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }

        .custom-card:hover {
          transform: translateY(-10px);
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </>
  );
};

export default Services;
