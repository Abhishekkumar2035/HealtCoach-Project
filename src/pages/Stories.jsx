import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Stories = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeStory, setActiveStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const storyCategories = [
    { id: "all", name: "All Stories", color: "#8B5CF6", icon: "✨", count: 12 },
    {
      id: "weight-loss",
      name: "Weight Loss",
      color: "#10B981",
      icon: "⚖️",
      count: 5,
    },
    { id: "fitness", name: "Fitness", color: "#EF4444", icon: "💪", count: 4 },
    { id: "medical", name: "Medical", color: "#EC4899", icon: "❤️", count: 3 },
    {
      id: "wellness",
      name: "Wellness",
      color: "#F59E0B",
      icon: "🧘",
      count: 4,
    },
    {
      id: "corporate",
      name: "Corporate",
      color: "#6366F1",
      icon: "🏢",
      count: 2,
    },
  ];

  const successStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 42,
      location: "New York, NY",
      category: "weight-loss",
      title: "Lost 65 lbs in 8 Months",
      duration: "8 months",
      story:
        "After struggling with weight my entire adult life, I finally found a sustainable solution. The personalized nutrition plan and consistent coaching helped me not just lose weight, but completely transform my relationship with food.",
      stats: {
        weightLoss: "65 lbs",
        bmiChange: "38 → 24",
        energy: "300% increase",
        confidence: "Life-changing",
      },
      beforeAfter: {
        before: "/image1/img1.avif",
        after: "/image1/img2.avif",
      },
      color: "#10B981",
      quote: "I got my life back!",
      videoTestimonial: false,
      tags: ["Weight Management", "Nutrition", "Lifestyle Change"],
      date: "March 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 35,
      location: "San Francisco, CA",
      category: "fitness",
      title: "From Couch to Marathon",
      duration: "6 months",
      story:
        "As a former athlete turned office worker, I had lost all my fitness. With the structured training program and nutritional guidance, I went from barely running a mile to completing my first marathon in under 4 hours.",
      stats: {
        marathonTime: "3:45:22",
        bodyFat: "28% → 15%",
        endurance: "1 mile → 26.2 miles",
        recovery: "80% faster",
      },
      beforeAfter: {
        before: "/image1/img2.avif",
        after: "/image1/img1.avif",
      },
      color: "#EF4444",
      quote: "Redefined my limits",
      videoTestimonial: true,
      tags: ["Running", "Endurance", "Strength Training"],
      date: "February 2024",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      age: 38,
      location: "Miami, FL",
      category: "medical",
      title: "Reversed Type 2 Diabetes",
      duration: "12 months",
      story:
        "Diagnosed with Type 2 diabetes at 35, I was facing a lifetime of medication. Through metabolic optimization and lifestyle changes, I reversed my diabetes and came off all medications under medical supervision.",
      stats: {
        a1c: "8.2% → 5.4%",
        medications: "3 → 0",
        fastingGlucose: "180 → 85",
        energy: "Transformational",
      },
      beforeAfter: {
        before: "/image1/img3.avif",
        after: "/image1/img4.avif",
      },
      color: "#EC4899",
      quote: "I beat diabetes!",
      videoTestimonial: true,
      tags: ["Diabetes", "Metabolic Health", "Medical"],
      date: "January 2024",
    },
    {
      id: 4,
      name: "TechCorp Inc.",
      location: "Seattle, WA",
      category: "corporate",
      title: "Corporate Wellness Success",
      duration: "Ongoing",
      story:
        "Implementing our corporate wellness program led to remarkable improvements in employee health, productivity, and overall workplace satisfaction. The ROI was evident within just 6 months.",
      stats: {
        sickDays: "45% reduction",
        productivity: "30% increase",
        satisfaction: "92% positive",
        retention: "40% improvement",
      },
      beforeAfter: {
        before: "/image1/img4.avif",
        after: "/image1/img3.avif",
      },
      color: "#6366F1",
      quote: "Healthier employees, better business",
      videoTestimonial: false,
      tags: ["Corporate Wellness", "Team Building", "Productivity"],
      date: "December 2023",
    },
    {
      id: 5,
      name: "Jessica Williams",
      age: 29,
      location: "Austin, TX",
      category: "wellness",
      title: "Overcame Chronic Anxiety",
      duration: "4 months",
      story:
        "Years of chronic anxiety were holding me back from living fully. The mindfulness program and stress management techniques gave me tools to manage my anxiety and reclaim my peace.",
      stats: {
        anxietyLevel: "9/10 → 2/10",
        sleepQuality: "3 hours → 7 hours",
        medication: "Reduced by 75%",
        happiness: "Life-changing",
      },
      beforeAfter: {
        before: "/images/story5-before.jpg",
        after: "/images/story5-after.jpg",
      },
      color: "#F59E0B",
      quote: "Found my calm",
      videoTestimonial: true,
      tags: ["Mental Health", "Stress Management", "Mindfulness"],
      date: "November 2023",
    },
    {
      id: 6,
      name: "David Park",
      age: 45,
      location: "Chicago, IL",
      category: "weight-loss",
      title: "Dad Bod to Fit Dad",
      duration: "10 months",
      story:
        "As a busy father of three, I had let my health slide. The flexible program designed around my schedule helped me lose 50 pounds and become the active dad I wanted to be.",
      stats: {
        weightLoss: "50 lbs",
        bodyFat: "32% → 18%",
        strength: "Bench: 135 → 225 lbs",
        energy: "Play with kids daily",
      },
      beforeAfter: {
        before: "/images/story6-before.jpg",
        after: "/images/story6-after.jpg",
      },
      color: "#10B981",
      quote: "Best dad version of me",
      videoTestimonial: false,
      tags: ["Family Health", "Busy Schedule", "Sustainable"],
      date: "October 2023",
    },
    {
      id: 7,
      name: "Maria Garcia",
      age: 52,
      location: "Los Angeles, CA",
      category: "medical",
      title: "Menopause Transformation",
      duration: "6 months",
      story:
        "Menopause was draining my energy and confidence. The hormone-balancing program helped me navigate this transition with grace and vitality I never thought possible.",
      stats: {
        hotFlashes: "15/day → 2/day",
        energyLevel: "2/10 → 8/10",
        sleepQuality: "Transformative",
        confidence: "Restored",
      },
      beforeAfter: {
        before: "/images/story7-before.jpg",
        after: "/images/story7-after.jpg",
      },
      color: "#EC4899",
      quote: "Thriving through menopause",
      videoTestimonial: true,
      tags: ["Women's Health", "Hormones", "Aging Gracefully"],
      date: "September 2023",
    },
    {
      id: 8,
      name: "StartupXYZ Team",
      location: "Boston, MA",
      category: "corporate",
      title: "From Burnout to Balance",
      duration: "3 months",
      story:
        "Our startup team was burning out fast. The stress management and team wellness program saved our company culture and boosted our innovation.",
      stats: {
        burnoutRate: "60% → 15%",
        teamMorale: "3/10 → 9/10",
        creativity: "Doubled output",
        retention: "100% maintained",
      },
      beforeAfter: {
        before: "/images/story8-before.jpg",
        after: "/images/story8-after.jpg",
      },
      color: "#6366F1",
      quote: "Saved our startup",
      videoTestimonial: false,
      tags: ["Startup Wellness", "Burnout Prevention", "Team Culture"],
      date: "August 2023",
    },
  ];

  const filteredStories =
    activeFilter === "all"
      ? successStories
      : successStories.filter((story) => story.category === activeFilter);

  // Auto-rotate featured stories
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const featuredStories = successStories.slice(0, 3);

  const timelineStories = [
    { month: "Jan", stories: 3, color: "#8B5CF6" },
    { month: "Feb", stories: 2, color: "#10B981" },
    { month: "Mar", stories: 4, color: "#EF4444" },
    { month: "Apr", stories: 3, color: "#EC4899" },
    { month: "May", stories: 5, color: "#F59E0B" },
    { month: "Jun", stories: 4, color: "#6366F1" },
  ];

  const StoryCard = ({ story, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showBeforeAfter, setShowBeforeAfter] = useState(false);

    return (
      <div
        className="story-card"
        style={{
          backgroundColor: "white",
          borderRadius: "25px",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          height: "100%",
          position: "relative",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
          opacity: "0",
        }}
        onMouseEnter={() => setShowBeforeAfter(true)}
        onMouseLeave={() => setShowBeforeAfter(false)}
      >
        {/* Category ribbon */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            backgroundColor: story.color,
            color: "white",
            padding: "8px 20px",
            borderRadius: "50px",
            fontSize: "12px",
            fontWeight: "600",
            zIndex: "2",
            boxShadow: `0 5px 15px ${story.color}40`,
          }}
        >
          {story.category.replace("-", " ").toUpperCase()}
        </div>

        {/* Before/After toggle */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: "2",
          }}
        >
          <button
            onClick={() => setShowBeforeAfter(!showBeforeAfter)}
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(10px)",
              border: "none",
              padding: "8px 16px",
              borderRadius: "50px",
              fontSize: "12px",
              fontWeight: "600",
              color: story.color,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>{showBeforeAfter ? "After" : "Before"}</span>
            <span>↔</span>
          </button>
        </div>

        {/* Image section with before/after effect */}
        <div
          style={{
            height: "250px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundImage: `url('${
                showBeforeAfter
                  ? story.beforeAfter.after
                  : story.beforeAfter.before
              }')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 0.8s ease, filter 0.8s ease",
              transform: showBeforeAfter ? "scale(1.05)" : "scale(1)",
              filter: showBeforeAfter ? "brightness(1.1)" : "brightness(1)",
            }}
          ></div>

          {/* Overlay gradient */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              height: "100px",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
            }}
          ></div>

          {/* Video testimonial badge */}
          {story.videoTestimonial && (
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                backgroundColor: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(10px)",
                padding: "6px 12px",
                borderRadius: "50px",
                fontSize: "12px",
                fontWeight: "600",
                color: story.color,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>▶️</span>
              <span>Video Story</span>
            </div>
          )}
        </div>

        {/* Content section */}
        <div style={{ padding: "30px" }}>
          {/* Person info */}
          <div className="d-flex align-items-center mb-4">
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: `${story.color}20`,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                marginRight: "15px",
                flexShrink: "0",
              }}
            >
              {story.name.charAt(0)}
            </div>
            <div>
              <h4
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  marginBottom: "5px",
                  color: "#1f2937",
                }}
              >
                {story.name}
              </h4>
              <div style={{ fontSize: "14px", color: "#6b7280" }}>
                {story.age && `${story.age} years • `}
                {story.location}
              </div>
            </div>
          </div>

          {/* Story title */}
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: "800",
              marginBottom: "15px",
              color: "#1f2937",
              lineHeight: "1.3",
            }}
          >
            {story.title}
          </h3>

          {/* Quote */}
          <div
            style={{
              fontStyle: "italic",
              color: story.color,
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "20px",
              paddingLeft: "20px",
              borderLeft: `3px solid ${story.color}`,
            }}
          >
            "{story.quote}"
          </div>

          {/* Story excerpt */}
          <p
            style={{
              color: "#6b7280",
              fontSize: "15px",
              lineHeight: "1.6",
              marginBottom: "25px",
              display: "-webkit-box",
              WebkitLineClamp: isExpanded ? "none" : "3",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {story.story}
          </p>

          {/* Read more toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: story.color,
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              padding: "0",
              marginBottom: "25px",
            }}
          >
            {isExpanded ? "Read less" : "Read full story..."}
          </button>

          {/* Stats */}
          <div className="story-stats mb-4">
            <h6
              style={{
                color: story.color,
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>📈</span> Transformation Stats
            </h6>
            <div className="row g-2">
              {Object.entries(story.stats).map(([key, value], idx) => (
                <div key={idx} className="col-6">
                  <div
                    style={{
                      backgroundColor: `${story.color}10`,
                      padding: "10px",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: story.color,
                        marginBottom: "5px",
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        textTransform: "capitalize",
                      }}
                    >
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="story-tags">
            <div className="d-flex flex-wrap gap-2">
              {story.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="badge"
                  style={{
                    backgroundColor: `${story.color}15`,
                    color: story.color,
                    fontSize: "12px",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontWeight: "500",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Meta info */}
          <div
            className="d-flex justify-content-between align-items-center mt-4 pt-4"
            style={{
              borderTop: "1px solid #f3f4f6",
            }}
          >
            <div style={{ fontSize: "13px", color: "#9ca3af" }}>
              Duration: <strong>{story.duration}</strong>
            </div>
            <div style={{ fontSize: "13px", color: "#9ca3af" }}>
              {story.date}
            </div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: story.color,
            opacity: "0",
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        ></div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Success Stories | Real Transformations, Real Results</title>
        <meta
          name="description"
          content="Read inspiring stories of real people who transformed their health with our coaching programs. See before/after photos, stats, and testimonials."
        />
      </Helmet>

      {/* Hero Section with Animation */}
      <section
        className="stories-hero"
        style={{
          background: "linear-gradient(135deg, #fdf4ff 0%, #f0f9ff 100%)",
          padding: "120px 0 80px",
          position: "relative",
          overflow: "hidden",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Animated background elements */}
        <div className="floating-elements">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="floating-element"
              style={{
                position: "absolute",
                width: `${40 + i * 10}px`,
                height: `${40 + i * 10}px`,
                backgroundColor: [
                  "#8B5CF6",
                  "#10B981",
                  "#EF4444",
                  "#EC4899",
                  "#F59E0B",
                  "#6366F1",
                ][i % 6],
                opacity: "0.1",
                borderRadius: "50%",
                top: `${20 + i * 15}%`,
                left: `${5 + i * 15}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content"
                style={{ position: "relative", zIndex: "2" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#8B5CF6",
                    color: "white",
                    padding: "10px 25px",
                    borderRadius: "50px",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "25px",
                    animation: "pulse 2s infinite",
                  }}
                >
                  ✨ REAL TRANSFORMATIONS
                </span>

                <h1
                  className="mb-4"
                  style={{
                    fontSize: "4rem",
                    fontWeight: "800",
                    lineHeight: "1.2",
                    color: "#1f2937",
                    animation: "slideInLeft 1s ease-out",
                  }}
                >
                  Stories of{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Hope & Transformation
                  </span>
                </h1>

                <p
                  className="lead mb-5"
                  style={{
                    fontSize: "1.3rem",
                    color: "#6b7280",
                    maxWidth: "600px",
                    animation: "fadeInUp 1s ease-out 0.3s both",
                  }}
                >
                  Discover real stories from people who transformed their
                  health, overcame challenges, and achieved remarkable results
                  with our guidance.
                </p>

                <div
                  className="hero-stats"
                  style={{ animation: "fadeInUp 1s ease-out 0.6s both" }}
                >
                  <div className="row">
                    {[
                      {
                        number: "500+",
                        label: "Success Stories",
                        color: "#8B5CF6",
                      },
                      {
                        number: "10K+",
                        label: "Pounds Lost",
                        color: "#10B981",
                      },
                      {
                        number: "98%",
                        label: "Satisfaction Rate",
                        color: "#EF4444",
                      },
                      {
                        number: "5★",
                        label: "Average Rating",
                        color: "#F59E0B",
                      },
                    ].map((stat, index) => (
                      <div key={index} className="col-6 col-md-3 mb-4">
                        <div className="stat-box">
                          <h3
                            style={{
                              fontSize: "2.5rem",
                              fontWeight: "800",
                              color: stat.color,
                              marginBottom: "5px",
                              animation: `countUp 2s ease-out ${
                                index * 0.2
                              }s both`,
                            }}
                          >
                            {stat.number}
                          </h3>
                          <p
                            style={{
                              color: "#6b7280",
                              margin: 0,
                              fontSize: "14px",
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

            <div className="col-lg-6">
              <div
                className="hero-visual"
                style={{
                  position: "relative",
                  height: "500px",
                  animation: "slideInRight 1s ease-out",
                }}
              >
                {/* Featured stories carousel */}
                <div className="featured-stories-carousel">
                  {featuredStories.map((story, index) => (
                    <div
                      key={story.id}
                      className={`featured-story ${
                        index === activeStory ? "active" : ""
                      }`}
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "white",
                        borderRadius: "30px",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                        overflow: "hidden",
                        opacity: index === activeStory ? "1" : "0",
                        transform:
                          index === activeStory ? "scale(1)" : "scale(0.8)",
                        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: index === activeStory ? "3" : "2 - index",
                      }}
                    >
                      <div
                        style={{
                          height: "60%",
                          backgroundImage: `url('${story.beforeAfter.after}')`,
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
                            height: "100px",
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          }}
                        ></div>
                        <div
                          style={{
                            position: "absolute",
                            bottom: "30px",
                            left: "30px",
                            color: "white",
                          }}
                        >
                          <h4
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: "700",
                              marginBottom: "5px",
                            }}
                          >
                            {story.name}
                          </h4>
                          <p style={{ fontSize: "14px", opacity: "0.9" }}>
                            {story.title}
                          </p>
                        </div>
                      </div>
                      <div style={{ padding: "30px" }}>
                        <div
                          style={{
                            fontStyle: "italic",
                            color: story.color,
                            fontSize: "18px",
                            fontWeight: "600",
                            marginBottom: "15px",
                          }}
                        >
                          "{story.quote}"
                        </div>
                        <p
                          style={{
                            color: "#6b7280",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            marginBottom: "0",
                            display: "-webkit-box",
                            WebkitLineClamp: "3",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {story.story}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Carousel controls */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "30px",
                      right: "30px",
                      zIndex: "10",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <div
                      className="carousel-dots"
                      style={{ display: "flex", gap: "8px" }}
                    >
                      {featuredStories.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setActiveStory(index);
                            setIsPlaying(false);
                          }}
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            border: "none",
                            backgroundColor:
                              index === activeStory ? "#8B5CF6" : "#e5e7eb",
                            cursor: "pointer",
                            padding: "0",
                            transition: "all 0.3s ease",
                          }}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      style={{
                        backgroundColor: "white",
                        border: "none",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                        fontSize: "18px",
                      }}
                    >
                      {isPlaying ? "⏸️" : "▶️"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        className="stories-filter"
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
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#1f2937",
                    margin: 0,
                  }}
                >
                  Filter Stories
                </h3>
                <div style={{ fontSize: "14px", color: "#9ca3af" }}>
                  {filteredStories.length} stories found
                </div>
              </div>

              <div className="category-buttons d-flex flex-wrap gap-3 mt-4">
                {storyCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    style={{
                      backgroundColor:
                        activeFilter === category.id ? category.color : "white",
                      color: activeFilter === category.id ? "white" : "#6b7280",
                      border: `2px solid ${category.color}`,
                      padding: "12px 24px",
                      borderRadius: "50px",
                      fontWeight: "600",
                      fontSize: "15px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      boxShadow:
                        activeFilter === category.id
                          ? `0 5px 20px ${category.color}40`
                          : "none",
                      animation:
                        activeFilter === category.id
                          ? "pulse 2s infinite"
                          : "none",
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>{category.icon}</span>
                    {category.name}
                    <span
                      style={{
                        backgroundColor:
                          activeFilter === category.id
                            ? "white"
                            : `${category.color}20`,
                        color:
                          activeFilter === category.id
                            ? category.color
                            : category.color,
                        fontSize: "12px",
                        padding: "2px 8px",
                        borderRadius: "20px",
                        marginLeft: "8px",
                      }}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Timeline Visualization */}
      <section
        className="timeline-section"
        style={{
          padding: "60px 0",
          backgroundColor: "#f9fafb",
        }}
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h3
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  color: "#1f2937",
                }}
              >
                Our <span style={{ color: "#8B5CF6" }}>Success Timeline</span>
              </h3>
              <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>
                Track our growing collection of success stories month by month
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div
                className="timeline-visualization"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "40px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="d-flex align-items-end justify-content-between"
                  style={{ height: "200px" }}
                >
                  {timelineStories.map((month, index) => (
                    <div
                      key={index}
                      className="text-center"
                      style={{ flex: 1 }}
                    >
                      <div
                        style={{
                          width: "80%",
                          height: `${month.stories * 30}px`,
                          backgroundColor: month.color,
                          margin: "0 auto 15px",
                          borderRadius: "10px 10px 0 0",
                          position: "relative",
                          transition: "height 1s ease",
                          animation: `growHeight 1.5s ease-out ${
                            index * 0.2
                          }s both`,
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "-30px",
                            left: "0",
                            right: "0",
                            textAlign: "center",
                            fontSize: "14px",
                            fontWeight: "600",
                            color: month.color,
                          }}
                        >
                          {month.stories} stories
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#1f2937",
                        }}
                      >
                        {month.month}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="stories-grid" style={{ padding: "80px 0" }}>
        <div className="container">
          {filteredStories.length > 0 ? (
            <div className="row g-5">
              {filteredStories.map((story, index) => (
                <div key={story.id} className="col-lg-6">
                  <StoryCard story={story} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <div style={{ fontSize: "80px", marginBottom: "20px" }}>📝</div>
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#1f2937",
                }}
              >
                No stories found in this category
              </h3>
              <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>
                Check back soon for new success stories!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section
        className="video-testimonials"
        style={{
          background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
          padding: "100px 0",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  padding: "10px 25px",
                  borderRadius: "50px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                🎥 WATCH THEIR JOURNEYS
              </span>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginBottom: "20px",
                }}
              >
                Stories That{" "}
                <span style={{ color: "#FBBF24" }}>Come to Life</span>
              </h2>
              <p
                className="lead"
                style={{ fontSize: "1.2rem", opacity: "0.9" }}
              >
                Watch video testimonials from our clients sharing their
                transformation journeys
              </p>
            </div>
          </div>

          <div className="row g-4">
            {successStories
              .filter((story) => story.videoTestimonial)
              .slice(0, 3)
              .map((story, index) => (
                <div key={story.id} className="col-lg-4">
                  <div
                    className="video-card"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      height: "100%",
                      transition: "all 0.3s ease",
                      animation: `fadeInUp 1s ease-out ${index * 0.2}s both`,
                    }}
                  >
                    <div
                      style={{
                        height: "200px",
                        backgroundColor: "rgba(0,0,0,0.2)",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "28px",
                          color: "#8B5CF6",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                      >
                        ▶
                      </div>
                    </div>
                    <div style={{ padding: "25px" }}>
                      <h4
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "700",
                          marginBottom: "15px",
                        }}
                      >
                        {story.name}'s Journey
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          opacity: "0.9",
                          marginBottom: "20px",
                          display: "-webkit-box",
                          WebkitLineClamp: "3",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {story.story}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span style={{ fontSize: "13px", opacity: "0.8" }}>
                          {story.duration} transformation
                        </span>
                        <span
                          style={{
                            backgroundColor: "rgba(255,255,255,0.2)",
                            padding: "5px 15px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          Watch Video
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section
        className="share-story"
        style={{
          padding: "100px 0",
          background: "linear-gradient(135deg, #fef3c7 0%, #f0f9ff 100%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#F59E0B",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  margin: "0 auto 30px",
                  animation: "bounce 2s infinite",
                }}
              >
                ✍️
              </div>

              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginBottom: "20px",
                  color: "#1f2937",
                }}
              >
                Ready to Write{" "}
                <span style={{ color: "#F59E0B" }}>Your Success Story</span>?
              </h2>

              <p
                className="lead mb-5"
                style={{
                  fontSize: "1.2rem",
                  color: "#6b7280",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Join thousands who have transformed their health and lives with
                our guidance
              </p>

              <div className="d-flex justify-content-center gap-4 flex-wrap">
                <button
                  style={{
                    backgroundColor: "#F59E0B",
                    color: "white",
                    border: "none",
                    padding: "16px 40px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    fontSize: "18px",
                    cursor: "pointer",
                    boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Start Your Journey
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#F59E0B",
                    border: "2px solid #F59E0B",
                    padding: "16px 40px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    fontSize: "18px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  Share Your Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes growHeight {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: var(--target-height);
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .story-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15) !important;
        }

        .story-card:hover .floating-element {
          animation-play-state: paused;
        }

        .video-card:hover {
          transform: translateY(-10px);
          backdrop-filter: blur(20px) !important;
        }

        .featured-story.active {
          animation: pulse 2s infinite;
        }

        .floating-element {
          animation-play-state: running;
        }

        .story-card {
          --target-height: 0;
        }
      `}</style>
    </>
  );
};

export default Stories;
