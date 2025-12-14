// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { HelmetProvider } from "react-helmet-async";
import "./styles/App.scss";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Coach from "./pages/Coach";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Stories from "./pages/Stories";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogSingle />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
