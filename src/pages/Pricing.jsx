import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = {
    monthly: [
      {
        name: "Starter",
        price: 49,
        period: "month",
        popular: false,
        color: "#10B981", // Emerald Green
        features: [
          "Personalized Nutrition Plan",
          "Weekly 30-min Coaching Sessions",
          "Basic Workout Routine",
          "Mobile App Access",
          "Email Support",
          "Weekly Progress Tracking",
          "Meal Planning Templates",
          "Community Access (Basic)",
        ],
        notIncluded: [
          "Advanced Analytics",
          "24/7 Priority Support",
          "Custom Supplement Plan",
          "Family Plan Sharing",
        ],
      },
      {
        name: "Professional",
        price: 79,
        period: "month",
        popular: true,
        color: "#8B5CF6", // Purple
        features: [
          "Everything in Starter PLUS",
          "Customized Exercise Program",
          "Bi-weekly 45-min Sessions",
          "Advanced Progress Analytics",
          "Priority Email Support",
          "Recipe Library Access",
          "Sleep & Stress Tracking",
          "Monthly Goal Review",
          "Video Call Sessions",
          "Smart Device Integration",
        ],
        notIncluded: [
          "DNA-Based Nutrition",
          "Unlimited Sessions",
          "Family Plan Sharing",
          "Executive Coaching",
        ],
      },
      {
        name: "Elite",
        price: 129,
        period: "month",
        popular: false,
        color: "#F59E0B", // Amber
        features: [
          "Everything in Professional PLUS",
          "Unlimited Coaching Sessions",
          "DNA-Based Nutrition Analysis",
          "Custom Supplement Protocol",
          "24/7 Priority Support",
          "Family Plan (Up to 3 members)",
          "Executive Health Assessment",
          "Quarterly Blood Work Analysis",
          "Personalized Recipe Generator",
          "Advanced Sleep Optimization",
          "Stress Management Program",
          "Annual Health Retreat Invitation",
        ],
        notIncluded: ["Corporate Group Plans", "International Retreats"],
      },
      {
        name: "Enterprise",
        price: 299,
        period: "month",
        popular: false,
        color: "#EF4444", // Red
        features: [
          "Everything in Elite PLUS",
          "Dedicated Health Concierge",
          "Corporate Wellness Programs",
          "Team Building Workshops",
          "Executive Health Monitoring",
          "On-site Health Assessments",
          "Custom Wellness Platform",
          "Quarterly Health Reports",
          "Employee Engagement Tools",
          "Custom Branded Materials",
          "API Integration",
          "White-label Solutions",
        ],
        notIncluded: [],
      },
    ],
    yearly: [
      {
        name: "Starter",
        price: 490,
        period: "year",
        originalPrice: 588,
        popular: false,
        color: "#10B981",
        features: [
          "Personalized Nutrition Plan",
          "Weekly 30-min Coaching Sessions",
          "Basic Workout Routine",
          "Mobile App Access",
          "Email Support",
          "Weekly Progress Tracking",
          "Meal Planning Templates",
          "Community Access (Basic)",
          "2 FREE Months Included",
        ],
      },
      {
        name: "Professional",
        price: 790,
        period: "year",
        originalPrice: 948,
        popular: true,
        color: "#8B5CF6",
        features: [
          "Everything in Starter PLUS",
          "Customized Exercise Program",
          "Bi-weekly 45-min Sessions",
          "Advanced Progress Analytics",
          "Priority Email Support",
          "Recipe Library Access",
          "Sleep & Stress Tracking",
          "Monthly Goal Review",
          "Video Call Sessions",
          "Smart Device Integration",
          "3 FREE Months Included",
        ],
      },
      {
        name: "Elite",
        price: 1290,
        period: "year",
        originalPrice: 1548,
        popular: false,
        color: "#F59E0B",
        features: [
          "Everything in Professional PLUS",
          "Unlimited Coaching Sessions",
          "DNA-Based Nutrition Analysis",
          "Custom Supplement Protocol",
          "24/7 Priority Support",
          "Family Plan (Up to 3 members)",
          "Executive Health Assessment",
          "Quarterly Blood Work Analysis",
          "Personalized Recipe Generator",
          "Advanced Sleep Optimization",
          "Stress Management Program",
          "Annual Health Retreat Invitation",
          "6 FREE Months Included",
        ],
      },
      {
        name: "Enterprise",
        price: 2990,
        period: "year",
        originalPrice: 3588,
        popular: false,
        color: "#EF4444",
        features: [
          "Everything in Elite PLUS",
          "Dedicated Health Concierge",
          "Corporate Wellness Programs",
          "Team Building Workshops",
          "Executive Health Monitoring",
          "On-site Health Assessments",
          "Custom Wellness Platform",
          "Quarterly Health Reports",
          "Employee Engagement Tools",
          "Custom Branded Materials",
          "API Integration",
          "White-label Solutions",
          "12 FREE Months Included",
        ],
      },
    ],
  };

  const currentPlans = plans[billingCycle];

  const valueAdds = [
    {
      icon: "🎯",
      title: "Goal-Oriented Approach",
      description: "Every plan includes SMART goal setting and tracking",
    },
    {
      icon: "📱",
      title: "Mobile App Access",
      description: "Track progress, book sessions, access content on-the-go",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Community Support",
      description: "Join exclusive communities for motivation and support",
    },
    {
      icon: "📊",
      title: "Progress Analytics",
      description: "Advanced analytics to track your health journey",
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "All plans include a 14-day money-back guarantee. We're confident you'll love our coaching, but if you're not satisfied, we'll refund your first payment.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for annual plans.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees. The price you see is what you pay. Taxes may apply based on your location.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time from your account settings. No cancellation fees or complicated procedures.",
    },
    {
      question: "Do you offer corporate discounts?",
      answer:
        "Yes! We offer special pricing for companies with 10+ employees. Contact our enterprise team for custom quotes.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Pricing Plans | Health Coach - Choose Your Perfect Plan</title>
        <meta
          name="description"
          content="Flexible pricing plans for every health journey. From basic nutrition to comprehensive wellness programs, find the perfect plan for your goals and budget."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="pricing-hero"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "120px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1
                className="mb-4"
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "800",
                  lineHeight: "1.2",
                }}
              >
                Invest in Your <span style={{ color: "#FBBF24" }}>Health</span>,
                <br />
                Reap a Lifetime of Benefits
              </h1>
              <p
                className="lead mb-5"
                style={{
                  fontSize: "1.3rem",
                  opacity: "0.9",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                Choose from flexible plans designed to help you achieve your
                health goals.
                <br />
                All plans include our proven methodology and dedicated support.
              </p>

              {/* Billing Toggle */}
              <div className="billing-toggle mb-5">
                <div
                  className="toggle-wrapper"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: "50px",
                    padding: "5px",
                    display: "inline-flex",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    style={{
                      padding: "12px 30px",
                      borderRadius: "50px",
                      border: "none",
                      background:
                        billingCycle === "monthly" ? "white" : "transparent",
                      color: billingCycle === "monthly" ? "#667eea" : "white",
                      fontWeight: "600",
                      fontSize: "16px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Monthly Billing
                  </button>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    style={{
                      padding: "12px 30px",
                      borderRadius: "50px",
                      border: "none",
                      background:
                        billingCycle === "yearly" ? "white" : "transparent",
                      color: billingCycle === "yearly" ? "#667eea" : "white",
                      fontWeight: "600",
                      fontSize: "16px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Yearly Billing
                    <span
                      style={{
                        backgroundColor: "#FBBF24",
                        color: "#000",
                        fontSize: "12px",
                        padding: "2px 8px",
                        borderRadius: "10px",
                        marginLeft: "8px",
                      }}
                    >
                      Save 17%
                    </span>
                  </button>
                </div>
              </div>

              {/* Savings Calculator */}
              <div
                className="savings-card"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  padding: "20px",
                  maxWidth: "400px",
                  margin: "30px auto",
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div style={{ fontSize: "14px", opacity: "0.8" }}>
                      Yearly Plan Savings
                    </div>
                    <div style={{ fontSize: "24px", fontWeight: "700" }}>
                      Up to $258/year
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#10B981",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    BEST VALUE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "100px",
            background: "linear-gradient(to bottom, transparent, white)",
            opacity: "0.1",
          }}
        ></div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-plans" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row g-4">
            {currentPlans.map((plan, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div
                  className={`pricing-card ${plan.popular ? "popular" : ""}`}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: plan.popular
                      ? `0 20px 40px ${plan.color}40`
                      : "0 10px 30px rgba(0,0,0,0.08)",
                    height: "100%",
                    position: "relative",
                    transform: plan.popular ? "translateY(-10px)" : "none",
                    transition: "all 0.3s ease",
                    border: plan.popular
                      ? `2px solid ${plan.color}`
                      : "1px solid #e5e7eb",
                  }}
                  onMouseEnter={() => setSelectedPlan(plan.name)}
                  onMouseLeave={() => setSelectedPlan(null)}
                >
                  {plan.popular && (
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        backgroundColor: plan.color,
                        color: "white",
                        padding: "5px 15px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        zIndex: "1",
                      }}
                    >
                      MOST POPULAR
                    </div>
                  )}

                  <div
                    style={{
                      padding: "40px 30px 30px",
                      borderBottom: "1px solid #f3f4f6",
                    }}
                  >
                    <div
                      className="plan-header"
                      style={{ marginBottom: "20px" }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: `${plan.color}20`,
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "15px",
                        }}
                      >
                        <span style={{ fontSize: "24px" }}>
                          {plan.name === "Starter" && "🌱"}
                          {plan.name === "Professional" && "⚡"}
                          {plan.name === "Elite" && "👑"}
                          {plan.name === "Enterprise" && "🏢"}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontSize: "1.8rem",
                          fontWeight: "700",
                          marginBottom: "10px",
                          color: "#1f2937",
                        }}
                      >
                        {plan.name}
                      </h3>
                      <p style={{ color: "#6b7280", fontSize: "14px" }}>
                        Perfect for{" "}
                        {plan.name === "Starter"
                          ? "beginners"
                          : plan.name === "Professional"
                          ? "committed individuals"
                          : plan.name === "Elite"
                          ? "comprehensive wellness"
                          : "corporate teams"}
                      </p>
                    </div>

                    <div
                      className="plan-pricing"
                      style={{ marginBottom: "20px" }}
                    >
                      <div className="d-flex align-baseline">
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#6b7280",
                            fontWeight: "600",
                            marginRight: "5px",
                          }}
                        >
                          $
                        </span>
                        <span
                          style={{
                            fontSize: "3.5rem",
                            fontWeight: "800",
                            color: plan.color,
                            lineHeight: "1",
                          }}
                        >
                          {plan.price}
                        </span>
                        <span
                          style={{
                            fontSize: "16px",
                            color: "#6b7280",
                            marginLeft: "5px",
                          }}
                        >
                          /{plan.period}
                        </span>
                      </div>

                      {plan.originalPrice && (
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#9ca3af",
                            textDecoration: "line-through",
                            marginTop: "5px",
                          }}
                        >
                          ${plan.originalPrice}/
                          {plan.period === "month" ? "year" : ""}
                        </div>
                      )}

                      {billingCycle === "yearly" && (
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#10B981",
                            fontWeight: "600",
                            marginTop: "5px",
                          }}
                        >
                          Save ${plan.originalPrice - plan.price}
                        </div>
                      )}
                    </div>

                    <button
                      className="w-100"
                      style={{
                        backgroundColor:
                          selectedPlan === plan.name
                            ? plan.color
                            : "transparent",
                        color:
                          selectedPlan === plan.name ? "white" : plan.color,
                        border: `2px solid ${plan.color}`,
                        padding: "12px 24px",
                        borderRadius: "12px",
                        fontWeight: "600",
                        fontSize: "16px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        marginBottom: "10px",
                      }}
                    >
                      Get Started
                    </button>

                    <button
                      className="w-100"
                      style={{
                        backgroundColor: "transparent",
                        color: "#6b7280",
                        border: "1px solid #d1d5db",
                        padding: "10px 24px",
                        borderRadius: "12px",
                        fontWeight: "500",
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Schedule Demo
                    </button>
                  </div>

                  <div style={{ padding: "30px" }}>
                    <h6
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#1f2937",
                        marginBottom: "20px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      What's Included
                    </h6>

                    <ul
                      className="list-unstyled"
                      style={{ marginBottom: "30px" }}
                    >
                      {plan.features.slice(0, 6).map((feature, idx) => (
                        <li
                          key={idx}
                          className="mb-3"
                          style={{ fontSize: "14px" }}
                        >
                          <div className="d-flex align-items-start">
                            <span
                              style={{
                                color: plan.color,
                                marginRight: "10px",
                                fontSize: "16px",
                                lineHeight: "1.4",
                              }}
                            >
                              ✓
                            </span>
                            <span style={{ lineHeight: "1.4" }}>{feature}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {plan.features.length > 6 && (
                      <div className="text-center">
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: plan.color,
                            fontSize: "14px",
                            fontWeight: "600",
                            cursor: "pointer",
                            padding: "0",
                          }}
                        >
                          + {plan.features.length - 6} more features
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Added Features */}
      <section
        className="value-features"
        style={{
          backgroundColor: "#f9fafb",
          padding: "80px 0",
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
                Why Choose Health Coach
              </span>
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                More Than Just a{" "}
                <span style={{ color: "#8B5CF6" }}>Price Tag</span>
              </h2>
              <p
                className="lead"
                style={{ fontSize: "1.2rem", color: "#6b7280" }}
              >
                Every plan includes our core value propositions that guarantee
                results
              </p>
            </div>
          </div>

          <div className="row g-4">
            {valueAdds.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div
                  className="value-card p-4 h-100"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    height: "100%",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      fontSize: "48px",
                      marginBottom: "20px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      marginBottom: "15px",
                      color: "#1f2937",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ color: "#6b7280", fontSize: "14px" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Custom Plan CTA */}
            <div className="col-lg-3 col-md-6">
              <div
                className="custom-plan-card p-4 h-100"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                  borderRadius: "20px",
                  color: "white",
                  height: "100%",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>✨</div>
                <h4
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  Need a Custom Plan?
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    opacity: "0.9",
                    marginBottom: "20px",
                  }}
                >
                  We create personalized plans for unique requirements
                </p>
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#8B5CF6",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  Request Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-table" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Plan <span style={{ color: "#F59E0B" }}>Comparison</span>
              </h2>
              <p
                className="lead"
                style={{ fontSize: "1.1rem", color: "#6b7280" }}
              >
                Detailed breakdown of features across all plans
              </p>
            </div>
          </div>

          <div className="table-responsive">
            <table
              className="table"
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f9fafb" }}>
                  <th
                    style={{
                      padding: "25px 20px",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#1f2937",
                      border: "none",
                    }}
                  >
                    Features
                  </th>
                  {currentPlans.map((plan, index) => (
                    <th
                      key={index}
                      style={{
                        padding: "25px 20px",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: plan.color,
                        textAlign: "center",
                        border: "none",
                      }}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Coaching Sessions",
                    starter: "4/month",
                    pro: "8/month",
                    elite: "Unlimited",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "Session Duration",
                    starter: "30 min",
                    pro: "45 min",
                    elite: "60 min",
                    enterprise: "Custom",
                  },
                  {
                    feature: "Support Response",
                    starter: "48 hours",
                    pro: "24 hours",
                    elite: "4 hours",
                    enterprise: "1 hour",
                  },
                  {
                    feature: "Progress Analytics",
                    starter: "Basic",
                    pro: "Advanced",
                    elite: "Premium",
                    enterprise: "Enterprise",
                  },
                  {
                    feature: "Mobile App",
                    starter: "✓",
                    pro: "✓",
                    elite: "✓",
                    enterprise: "✓",
                  },
                  {
                    feature: "Community Access",
                    starter: "Basic",
                    pro: "Premium",
                    elite: "VIP",
                    enterprise: "Custom",
                  },
                  {
                    feature: "Custom Meal Plans",
                    starter: "5/month",
                    pro: "Unlimited",
                    elite: "Unlimited",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "Workout Programs",
                    starter: "Basic",
                    pro: "Custom",
                    elite: "Premium",
                    enterprise: "Custom",
                  },
                  {
                    feature: "Health Assessments",
                    starter: "Initial",
                    pro: "Monthly",
                    elite: "Weekly",
                    enterprise: "Continuous",
                  },
                  {
                    feature: "Family Sharing",
                    starter: "×",
                    pro: "×",
                    elite: "✓",
                    enterprise: "✓",
                  },
                  {
                    feature: "Corporate Features",
                    starter: "×",
                    pro: "×",
                    elite: "×",
                    enterprise: "✓",
                  },
                ].map((row, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td
                      style={{
                        padding: "20px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#1f2937",
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {row.starter}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {row.pro}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {row.elite}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="pricing-testimonials"
        style={{
          backgroundColor: "#f9fafb",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Loved by <span style={{ color: "#EF4444" }}>10,000+</span>{" "}
                Members
              </h2>
              <p
                className="lead"
                style={{ fontSize: "1.1rem", color: "#6b7280" }}
              >
                See what our members say about their investment in health
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                name: "Sarah Johnson",
                plan: "Professional Plan",
                result: "Lost 40 lbs in 6 months",
                quote:
                  "Best investment I've ever made. The coaching paid for itself in medical bills I avoided.",
                avatar: "👩",
                color: "#8B5CF6",
              },
              {
                name: "Michael Chen",
                plan: "Elite Plan",
                result: "Reversed Type 2 Diabetes",
                quote:
                  "The personalized attention and unlimited sessions made all the difference.",
                avatar: "👨",
                color: "#F59E0B",
              },
              {
                name: "TechCorp Inc.",
                plan: "Enterprise Plan",
                result: "35% reduction in sick days",
                quote:
                  "Our employees are healthier, happier, and more productive. ROI was evident in 3 months.",
                avatar: "🏢",
                color: "#EF4444",
              },
            ].map((testimonial, index) => (
              <div key={index} className="col-lg-4">
                <div
                  className="testimonial-card p-5 h-100"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    height: "100%",
                  }}
                >
                  <div className="d-flex align-items-center mb-4">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: `${testimonial.color}20`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        marginRight: "15px",
                      }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>
                        {testimonial.name}
                      </h5>
                      <div
                        style={{
                          fontSize: "14px",
                          color: testimonial.color,
                          fontWeight: "500",
                        }}
                      >
                        {testimonial.plan}
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "#4b5563",
                      lineHeight: "1.7",
                      fontStyle: "italic",
                      marginBottom: "20px",
                    }}
                  >
                    "{testimonial.quote}"
                  </p>

                  <div
                    style={{
                      padding: "12px",
                      backgroundColor: "#f3f4f6",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: testimonial.color,
                        marginBottom: "5px",
                      }}
                    >
                      Achieved:
                    </div>
                    <div style={{ fontSize: "13px", color: "#6b7280" }}>
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Frequently Asked{" "}
                <span style={{ color: "#10B981" }}>Questions</span>
              </h2>
              <p
                className="lead"
                style={{ fontSize: "1.1rem", color: "#6b7280" }}
              >
                Everything you need to know about our pricing and plans
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="accordion"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                }}
              >
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    style={{
                      borderBottom:
                        index < faqs.length - 1 ? "1px solid #f3f4f6" : "none",
                      padding: "25px 30px",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#1f2937",
                        marginBottom: "10px",
                      }}
                    >
                      {faq.question}
                    </h5>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#6b7280",
                        lineHeight: "1.6",
                        marginBottom: "0",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="pricing-cta"
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
            <div className="col-lg-8 text-center">
              <h2
                className="mb-4"
                style={{ fontSize: "3rem", fontWeight: "800" }}
              >
                Start Your Health Journey Today
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
                Join thousands who transformed their lives with our proven
                coaching programs
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
                  Start 14-Day Free Trial
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
                  Schedule a Demo
                </button>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "15px",
                  padding: "20px",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    opacity: "0.8",
                    marginBottom: "10px",
                  }}
                >
                  Limited Time Offer
                </div>
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <div
                    style={{
                      backgroundColor: "#10B981",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    🎁 FREE 1-ON-1 CONSULTATION
                  </div>
                  <div style={{ fontSize: "14px", opacity: "0.8" }}>
                    with annual plans
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .pricing-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1) !important;
        }

        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }

        .custom-plan-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3) !important;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .popular {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Pricing;
