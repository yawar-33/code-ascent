"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, GitMerge, Layout, CheckCircle, Cloud, ArrowRight, Star, Shield, Zap } from "lucide-react";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Software", "Mobile Apps", "Web Platforms", "ERP Systems"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const floatingVariant = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const },
    },
  };

  const floatingVariant2 = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 1 },
    },
  };

  const pulseVariant = {
    animate: {
      scale: [1, 1.06, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const },
    },
  };


  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      <div className="container mx-auto px-4" style={{ width: "100%" }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
          padding: "3rem 0",
        }}>

          {/* Left Column */}
          <div style={{ flex: "1 1 500px", maxWidth: "620px" }}>

            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(100,255,218,0.08)",
                border: "1px solid rgba(100,255,218,0.3)",
                borderRadius: "50px",
                padding: "0.4rem 1rem",
                marginBottom: "1.5rem",
              }}
            >
              <Star size={14} style={{ color: "var(--color-accent)" }} />
              <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>
                Top-Rated Software Development Company
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 style={{
                fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
                fontWeight: 800,
                color: "var(--color-text-light)",
                lineHeight: 1.1,
                marginBottom: "0.5rem",
                letterSpacing: "-0.02em",
              }}>
                We Engineer
              </h1>
              <h1 style={{
                fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.4rem",
              }}>
                <span style={{
                  background: "linear-gradient(135deg, var(--color-accent) 0%, #4dd9f0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.35 }}
                      style={{ display: "inline-block" }}
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span style={{ color: "var(--color-text-light)" }}>That Performs.</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "var(--color-text)",
                lineHeight: 1.75,
                marginBottom: "2rem",
                maxWidth: "540px",
              }}
            >
              Code Ascent is a full-service software development company. We build
              custom web apps, mobile apps, ERP systems, and cloud solutions for
              <strong style={{ color: "var(--color-text-light)" }}> businesses worldwide</strong> — from startups to enterprises.
            </motion.p>

            {/* Trust Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginBottom: "2.5rem" }}
            >
              {[
                { icon: <CheckCircle size={15} />, text: "200+ Projects Delivered" },
                { icon: <Shield size={15} />, text: "10+ Years Experience" },
                { icon: <Zap size={15} />, text: "Agile & Fast Delivery" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-text)" }}>
                  <span style={{ color: "var(--color-accent)" }}>{item.icon}</span>
                  <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}
            >
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0.9rem 2rem",
                  background: "linear-gradient(135deg, var(--color-accent) 0%, #4dd9f0 100%)",
                  color: "var(--color-primary)",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px rgba(100,255,218,0.25)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(100,255,218,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(100,255,218,0.25)"; }}
              >
                Get a Free Consultation <ArrowRight size={16} />
              </a>
              <a
                href="#portfolio"
                className="btn-primary"
                style={{ padding: "0.9rem 2rem", fontSize: "0.95rem" }}
              >
                View Our Work
              </a>
            </motion.div>

            {/* Global Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p style={{ fontSize: "0.75rem", color: "var(--color-text)", marginBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Trusted by clients worldwide
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {["🌍 Global Delivery", "⚡ Fast Turnaround", "🔒 Secure & Scalable", "🤝 Long-Term Partners"].map((badge) => (
                  <span key={badge} style={{
                    display: "inline-block",
                    padding: "0.3rem 0.75rem",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    color: "var(--color-text-light)",
                    fontWeight: 500,
                  }}>
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Animation */}
          <div style={{ flex: "1 1 360px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px" }}>
            <div style={{ position: "relative", width: "360px", height: "380px" }}>

              {/* Code Card */}
              <motion.div
                variants={floatingVariant}
                animate="animate"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "220px",
                  padding: "1.1rem",
                  borderRadius: "14px",
                  backgroundColor: "rgba(17,34,64,0.95)",
                  border: "1px solid rgba(100,255,218,0.2)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                  zIndex: 20,
                  rotate: -4,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ff5f57" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#febc2e" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#28c840" }} />
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)", marginLeft: "6px" }}>solution.ts</span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", lineHeight: "1.7" }}>
                  <div style={{ color: "#c792ea" }}>const <span style={{ color: "#82aaff" }}>build</span> = async () =&gt; {"{"}</div>
                  <div style={{ paddingLeft: "14px", color: "#a6accd" }}>const idea = <span style={{ color: "#c3e88d" }}>"yours"</span>;</div>
                  <div style={{ paddingLeft: "14px", color: "#a6accd" }}>return <span style={{ color: "#64ffda" }}>deploy</span>(idea);</div>
                  <div style={{ color: "#c792ea" }}>{"}"}</div>
                  <div style={{ color: "#89ddff", marginTop: "6px" }}>// 🚀 Built by Code Ascent</div>
                </div>
              </motion.div>

              {/* Performance Card */}
              <motion.div
                variants={floatingVariant2}
                animate="animate"
                style={{
                  position: "absolute",
                  top: "30px",
                  right: 0,
                  width: "155px",
                  padding: "1rem",
                  borderRadius: "14px",
                  backgroundColor: "rgba(17,34,64,0.95)",
                  border: "1px solid rgba(100,255,218,0.2)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                  zIndex: 10,
                  rotate: 4,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)", marginBottom: "6px" }}>Lighthouse Score</div>
                <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--color-accent)", lineHeight: 1 }}>100</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>Performance</div>
                <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginTop: "10px" }}>
                  {["Perf", "A11y", "SEO"].map((l) => (
                    <span key={l} style={{ fontSize: "9px", padding: "2px 6px", borderRadius: "4px", backgroundColor: "rgba(100,255,218,0.1)", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>{l}</span>
                  ))}
                </div>
              </motion.div>

              {/* Orbit ring */}
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "230px",
                  height: "230px",
                  borderRadius: "50%",
                  border: "1px solid rgba(100,255,218,0.12)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", backgroundColor: "#0f172a", padding: "6px", borderRadius: "50%", border: "1px solid var(--color-accent)", color: "var(--color-accent)" }}>
                  <Layout size={16} />
                </div>
                <div style={{ position: "absolute", bottom: "-14px", left: "50%", transform: "translateX(-50%)", backgroundColor: "#0f172a", padding: "6px", borderRadius: "50%", border: "1px solid var(--color-accent)", color: "var(--color-accent)" }}>
                  <CheckCircle size={16} />
                </div>
                <div style={{ position: "absolute", left: "-14px", top: "50%", transform: "translateY(-50%)", backgroundColor: "#0f172a", padding: "6px", borderRadius: "50%", border: "1px solid var(--color-accent)", color: "var(--color-accent)" }}>
                  <GitMerge size={16} />
                </div>
                <div style={{ position: "absolute", right: "-14px", top: "50%", transform: "translateY(-50%)", backgroundColor: "#0f172a", padding: "6px", borderRadius: "50%", border: "1px solid var(--color-accent)", color: "var(--color-accent)" }}>
                  <Cloud size={16} />
                </div>
              </motion.div>

              {/* Central Hub */}
              <motion.div
                variants={pulseVariant}
                animate="animate"
                style={{
                  position: "absolute",
                  bottom: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(100,255,218,0.15) 0%, transparent 70%)",
                  border: "1px solid rgba(100,255,218,0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 5,
                }}
              >
                <Code size={28} style={{ color: "var(--color-accent)" }} />
                <span style={{ fontSize: "8px", color: "var(--color-text-light)", fontWeight: 700, letterSpacing: "0.12em", marginTop: "4px" }}>CODE ASCENT</span>
              </motion.div>

              {/* Stats badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  padding: "0.6rem 0.9rem",
                  borderRadius: "10px",
                  backgroundColor: "rgba(17,34,64,0.9)",
                  border: "1px solid rgba(100,255,218,0.15)",
                  backdropFilter: "blur(8px)",
                  zIndex: 25,
                }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-accent)" }}>200+</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>Projects Done</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                style={{
                  position: "absolute",
                  bottom: "60px",
                  right: 0,
                  padding: "0.6rem 0.9rem",
                  borderRadius: "10px",
                  backgroundColor: "rgba(17,34,64,0.9)",
                  border: "1px solid rgba(100,255,218,0.15)",
                  backdropFilter: "blur(8px)",
                  zIndex: 25,
                }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-accent)" }}>98%</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>Client Satisfaction</div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.4,
        }}
      >
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--color-accent), transparent)" }} />
      </motion.div>
    </section>
  );
};

export default Hero;
