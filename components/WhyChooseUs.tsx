"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Rocket, HeartHandshake, Shield, Clock } from "lucide-react";

const reasons = [
  {
    icon: Monitor,
    title: "Pixel-Perfect Design",
    description: "Every interface we craft is intuitive, accessible, and visually stunning — driving engagement and brand trust from the first click.",
    stat: "98% design approval rate",
  },
  {
    icon: Server,
    title: "Scalable Architecture",
    description: "We build on clean, modular codebases designed to handle 10x growth. No technical debt shortcuts — ever.",
    stat: "99.9% uptime delivered",
  },
  {
    icon: Rocket,
    title: "Agile & On-Time Delivery",
    description: "Two-week sprints, daily standups, and transparent project boards. You always know where your project stands.",
    stat: "94% on-time delivery",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description: "We don't disappear after launch. Post-release support, maintenance, and feature iterations are built into every engagement.",
    stat: "85% clients stay 2+ years",
  },
  {
    icon: Shield,
    title: "Security-First Development",
    description: "OWASP best practices, encrypted data pipelines, and regular security audits are standard on every project we deliver.",
    stat: "Zero critical incidents",
  },
  {
    icon: Clock,
    title: "Global Time-Zone Coverage",
    description: "With team members spread across multiple continents, we ensure working-hours overlap with your team — no matter where you are in the world.",
    stat: "Worldwide availability",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background accents */}
      <div style={{ position: "absolute", top: "10%", left: "-10%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "-5%", width: "30vw", height: "30vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(77,217,240,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
            WHY CODE ASCENT
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--color-text-light)", lineHeight: 1.2, marginBottom: "1rem" }}>
            The Difference You Can{" "}
            <span style={{ background: "linear-gradient(135deg, var(--color-accent) 0%, #4dd9f0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Measure
            </span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--color-text)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            We don&#39;t just write code — we build products that perform, scale, and delight users from day one.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                style={{
                  padding: "2rem",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(100,255,218,0.3)";
                  e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(100,255,218,0.08)",
                  border: "1px solid rgba(100,255,218,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-accent)",
                  flexShrink: 0,
                }}>
                  <Icon size={26} />
                </div>

                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text-light)", marginBottom: "0.5rem" }}>
                    {reason.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text)", lineHeight: 1.65 }}>
                    {reason.description}
                  </p>
                </div>

                {/* Stat */}
                <div style={{
                  marginTop: "auto",
                  padding: "0.5rem 0.85rem",
                  backgroundColor: "rgba(100,255,218,0.06)",
                  borderRadius: "6px",
                  border: "1px solid rgba(100,255,218,0.12)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  alignSelf: "flex-start",
                }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-accent)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.78rem", color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>
                    {reason.stat}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
