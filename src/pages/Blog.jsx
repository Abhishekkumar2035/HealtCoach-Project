import React, { useState, useEffect } from "react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");

  const postsPerPage = 6;

  // --- DATA: Categories ---
  const blogCategories = [
    { id: "all", name: "View All", color: "#4f46e5", icon: "💠" },
    { id: "nutrition", name: "Nutrition", color: "#10b981", icon: "🥗" },
    { id: "fitness", name: "Fitness", color: "#f43f5e", icon: "💪" },
    { id: "mental", name: "Mental Health", color: "#8b5cf6", icon: "🧠" },
    { id: "tech", name: "Health Tech", color: "#0ea5e9", icon: "🤖" },
  ];

  // --- DATA: Featured Post (Big Highlight) ---
  const featuredPost = {
    id: 99,
    title: "The Future of Health: AI & Genomics",
    excerpt:
      "Discover how Artificial Intelligence is combining with genomic sequencing to create hyper-personalized nutrition and workout plans tailored to your DNA.",
    author: "Dr. Abhishek Kumar",
    authorImg:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
    date: "Dec 14, 2025",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    tags: ["Technology", "Future"],
    color: "#4f46e5",
  };

  // --- DATA: Blog Posts ---
  const blogPosts = [
    {
      id: 1,
      title: "Intermittent Fasting: Science vs. Myths",
      category: "nutrition",
      excerpt:
        "Separate fact from fiction. We analyze the latest clinical trials on fasting windows and metabolic flexibility.",
      author: "Sarah J.",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      date: "Dec 12, 2025",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
      tags: ["Diet", "Metabolism"],
      color: "#10b981",
    },
    {
      id: 2,
      title: "Mastering the Home Workout",
      category: "fitness",
      excerpt:
        "You don't need a gym to build muscle. Here is the ultimate guide to progressive overload using bodyweight.",
      author: "Mike Tyson",
      authorImg:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100",
      date: "Dec 10, 2025",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600",
      tags: ["Strength", "Home"],
      color: "#f43f5e",
    },
    {
      id: 3,
      title: "Digital Detox & Brain Health",
      category: "mental",
      excerpt:
        "Constant notifications are rewiring your dopamine receptors. Learn how to reclaim your focus.",
      author: "Emily R.",
      authorImg:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100",
      date: "Dec 08, 2025",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
      tags: ["Wellness", "Focus"],
      color: "#8b5cf6",
    },
    {
      id: 4,
      title: "Smart Rings vs. Watches: Which is Best?",
      category: "tech",
      excerpt:
        "A comprehensive comparison of the Oura Ring 4 and Apple Watch Series 10 for sleep tracking.",
      author: "Tech Guru",
      authorImg:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
      date: "Dec 05, 2025",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
      tags: ["Gadgets", "Reviews"],
      color: "#0ea5e9",
    },
    {
      id: 5,
      title: "The Gut-Brain Connection",
      category: "nutrition",
      excerpt:
        "How your gut bacteria influence your mood, anxiety levels, and overall mental performance.",
      author: "Dr. A. Kumar",
      authorImg:
        "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=100",
      date: "Dec 01, 2025",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
      tags: ["Science", "Health"],
      color: "#10b981",
    },
    {
      id: 6,
      title: "Meditation for Coders",
      category: "mental",
      excerpt:
        "Specific mindfulness techniques to reduce burnout and improve logical thinking for developers.",
      author: "Zen Dev",
      authorImg:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100",
      date: "Nov 28, 2025",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600",
      tags: ["Dev", "Burnout"],
      color: "#8b5cf6",
    },
  ];

  // --- LOGIC: Filtering & Search ---
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <div className="page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-bg-elements">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        <div className="container hero-content">
          <span className="pill-label">Welcome to the Blog</span>
          <h1>
            Insights for a <br />
            <span className="gradient-text">Healthier Life</span>
          </h1>
          <p className="subtitle">
            Expert articles, tech reviews, and wellness guides curated for the
            modern developer and fitness enthusiast.
          </p>

          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search articles (e.g., 'React', 'Keto')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 2. TRENDING TICKER (Animation) */}
      <div className="ticker-wrap">
        <div className="ticker">
          <div className="ticker-item">🔥 Trending: AI in Healthcare</div>
          <div className="ticker-item">🥗 New: Keto Recipes 2025</div>
          <div className="ticker-item">🦾 Tech: Oura Ring 4 Review</div>
          <div className="ticker-item">🧘‍♂️ Wellness: Dopamine Fasting</div>
          <div className="ticker-item">💻 Dev: React 19 Updates</div>
          {/* Duplicate for seamless loop */}
          <div className="ticker-item">🔥 Trending: AI in Healthcare</div>
          <div className="ticker-item">🥗 New: Keto Recipes 2025</div>
          <div className="ticker-item">🦾 Tech: Oura Ring 4 Review</div>
          <div className="ticker-item">🧘‍♂️ Wellness: Dopamine Fasting</div>
        </div>
      </div>

      <div className="container main-layout">
        {/* 3. FEATURED SPOTLIGHT */}
        {activeCategory === "all" && !searchQuery && (
          <section className="featured-section fade-in">
            <div className="featured-card">
              <div className="featured-image">
                <img src={featuredPost.image} alt="Featured" />
                <span className="featured-badge">Editor's Pick</span>
              </div>
              <div className="featured-info">
                <div className="meta-tags">
                  <span style={{ color: featuredPost.color }}>
                    {featuredPost.tags[0]}
                  </span>
                  <span className="dot">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>

                <div className="author-row">
                  <img
                    src={featuredPost.authorImg}
                    alt={featuredPost.author}
                    className="author-avatar"
                  />
                  <div>
                    <div className="author-name">{featuredPost.author}</div>
                    <div className="post-date">{featuredPost.date}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. FILTER TABS */}
        <section className="filter-bar sticky-top">
          <div className="filter-scroll">
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setCurrentPage(1);
                }}
                className={`filter-chip ${
                  activeCategory === cat.id ? "active" : ""
                }`}
                style={{ "--highlight": cat.color }}
              >
                <span>{cat.icon}</span> {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* 5. MAIN CARD GRID */}
        <section className="posts-grid">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <div key={post.id} className="blog-card fade-up">
                <div className="card-media">
                  <img src={post.image} alt={post.title} />
                  <div
                    className="category-overlay"
                    style={{ background: post.color }}
                  >
                    {post.category}
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-top-meta">
                    <span className="read-time">⏱️ {post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <div className="card-divider"></div>

                  <div className="card-footer">
                    <div className="author-mini">
                      <img src={post.authorImg} alt="Author" />
                      <span>{post.author}</span>
                    </div>
                    <button className="arrow-btn" style={{ color: post.color }}>
                      →
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <h3>No articles found 🧐</h3>
              <p>Try clearing the search or changing the category.</p>
            </div>
          )}
        </section>

        {/* 6. PAGINATION */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* 7. NEWSLETTER SECTION */}
      <section className="newsletter">
        <div className="container newsletter-content">
          <div className="newsletter-text">
            <h2>
              Join our <span className="highlight-yellow">Health Tech</span>{" "}
              Community
            </h2>
            <p>
              Get the latest articles, coding tips, and fitness hacks delivered
              to your inbox weekly. No spam, ever.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        /* --- RESET & VARS --- */
        :root {
          --primary: #4f46e5;
          --bg: #f8fafc;
          --text-main: #1e293b;
          --text-muted: #64748b;
          --card-bg: #ffffff;
        }

        .page-wrapper {
          font-family: "Inter", sans-serif;
          background-color: var(--bg);
          color: var(--text-main);
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* --- HERO --- */
        .hero {
          position: relative;
          padding: 80px 0 60px;
          text-align: center;
          background: white;
          overflow: hidden;
        }
        .hero-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
        }
        .blob-1 {
          top: -10%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: #e0e7ff;
        }
        .blob-2 {
          bottom: -10%;
          right: -10%;
          width: 300px;
          height: 300px;
          background: #ffe4e6;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }
        .pill-label {
          background: #f1f5f9;
          color: var(--text-muted);
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin: 20px 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .gradient-text {
          background: linear-gradient(135deg, #4f46e5, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .search-bar {
          max-width: 500px;
          margin: 0 auto;
          position: relative;
        }
        .search-bar input {
          width: 100%;
          padding: 18px 20px 18px 50px;
          border-radius: 50px;
          border: 1px solid #cbd5e1;
          font-size: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          outline: none;
          transition: all 0.3s;
        }
        .search-bar input:focus {
          border-color: var(--primary);
          box-shadow: 0 4px 25px rgba(79, 70, 229, 0.15);
        }
        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.5;
        }

        /* --- TICKER --- */
        .ticker-wrap {
          background: #1e293b;
          color: white;
          padding: 12px 0;
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker {
          display: inline-block;
          animation: ticker 30s linear infinite;
        }
        .ticker-item {
          display: inline-block;
          padding: 0 40px;
          font-size: 0.9rem;
          font-weight: 500;
        }
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* --- FEATURED SECTION --- */
        .featured-section {
          margin-top: 60px;
          margin-bottom: 50px;
        }
        .featured-card {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 0;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }
        .featured-image {
          position: relative;
          height: 100%;
          min-height: 400px;
        }
        .featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .featured-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: bold;
          backdrop-filter: blur(5px);
        }
        .featured-info {
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .meta-tags {
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
        }
        .dot {
          color: #cbd5e1;
        }
        .featured-info h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
          color: #1e293b;
        }
        .featured-info p {
          color: #64748b;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .author-row {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .author-name {
          font-weight: 700;
          color: #1e293b;
        }
        .post-date {
          font-size: 0.85rem;
          color: #94a3b8;
        }

        /* --- FILTER BAR --- */
        .filter-bar {
          background: rgba(248, 250, 252, 0.9);
          backdrop-filter: blur(10px);
          padding: 20px 0;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 40px;
        }
        .filter-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 5px;
          scrollbar-width: none;
        }
        .filter-scroll::-webkit-scrollbar {
          display: none;
        }
        .filter-chip {
          background: white;
          border: 1px solid #e2e8f0;
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        .filter-chip:hover {
          background: #f1f5f9;
          transform: translateY(-2px);
        }
        .filter-chip.active {
          background: var(--highlight);
          color: white;
          border-color: var(--highlight);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        /* --- MAIN GRID --- */
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .blog-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          border: 1px solid #f1f5f9;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
        }
        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .card-media {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .blog-card:hover .card-media img {
          transform: scale(1.1);
        }
        .category-overlay {
          position: absolute;
          top: 15px;
          right: 15px;
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-body {
          padding: 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .card-top-meta {
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: #94a3b8;
        }
        .blog-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1e293b;
          line-height: 1.4;
        }
        .blog-card p {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-divider {
          height: 1px;
          background: #f1f5f9;
          margin: 20px 0;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .author-mini {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .author-mini img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
        .author-mini span {
          font-size: 0.9rem;
          font-weight: 600;
          color: #475569;
        }
        .arrow-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: transform 0.3s;
          padding: 0;
        }
        .blog-card:hover .arrow-btn {
          transform: translateX(5px);
        }

        /* --- PAGINATION --- */
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-bottom: 80px;
        }
        .pagination button {
          padding: 10px 20px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          color: #475569;
          transition: all 0.2s;
        }
        .pagination button:hover:not(:disabled) {
          border-color: var(--primary);
          color: var(--primary);
        }
        .pagination button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* --- NEWSLETTER --- */
        .newsletter {
          background: #111827;
          padding: 80px 20px;
          border-radius: 30px 30px 0 0;
          position: relative;
          overflow: hidden;
        }
        .newsletter-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .newsletter-text {
          flex: 1;
          min-width: 300px;
          color: white;
        }
        .newsletter-text h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 15px;
        }
        .highlight-yellow {
          color: #facc15;
        }
        .newsletter-text p {
          color: #94a3b8;
          font-size: 1.1rem;
        }

        .newsletter-form {
          flex: 1;
          min-width: 300px;
          display: flex;
          gap: 10px;
          background: rgba(255, 255, 255, 0.1);
          padding: 10px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .newsletter-form input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 15px;
          color: white;
          outline: none;
          font-size: 1rem;
        }
        .newsletter-form button {
          background: #facc15;
          color: #111827;
          border: none;
          padding: 15px 30px;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .newsletter-form button:hover {
          transform: scale(1.05);
        }

        /* --- ANIMATIONS --- */
        .fade-in {
          animation: fadeIn 1s ease-out;
        }
        .fade-up {
          animation: fadeUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .blog-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .blog-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .blog-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 900px) {
          .featured-card {
            grid-template-columns: 1fr;
          }
          .featured-image {
            min-height: 250px;
          }
          .featured-info {
            padding: 30px;
          }
          .hero h1 {
            font-size: 2.5rem;
          }
        }
        @media (max-width: 600px) {
          .newsletter-form {
            flex-direction: column;
            background: transparent;
            padding: 0;
            border: none;
          }
          .newsletter-form input {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
          }
          .author-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
