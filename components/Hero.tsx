"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Zap, GitMerge, Layout, CheckCircle, Smartphone, Globe, Cloud } from "lucide-react";

const Hero = () => {
  const descriptions = [
    "We are a software development company specializing in building exceptional digital experiences. From mobile apps to enterprise ERP solutions, we transform ideas into reality.",
    "Empowering businesses with scalable cloud infrastructure and dedicated development teams that integrate seamlessly with your vision.",
    "Crafting intuitive mobile applications and robust web platforms using cutting-edge technologies like React, Flutter, and Node.js.",
    "Delivering custom ERP solutions that streamline operations and drive efficiency for enterprises worldwide.",
  ];

  const headlines = [
    "We build digital experiences.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const floatingVariant = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const pulseVariant = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-1 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4
              style={{
                color: "var(--color-accent)",
                marginBottom: "1.5rem",
                fontSize: "1.1rem",
              }}
            >
              Hi, we are
            </h4>
          </motion.div>

          {/* Animated Main Headline */}
          <div style={{ minHeight: "140px", marginBottom: "0.5rem" }}>
            {/* <AnimatePresence mode="wait" key={"waot"}> */}
               <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(40px, 8vw, 80px)',
                        fontWeight: 'bold',
                        color: 'var(--color-text-light)',
                        lineHeight: 1.1,
                        marginBottom: '1rem'
                    }}>
                        Code Ascent.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 style={{
                        fontSize: 'clamp(30px, 6vw, 60px)',
                        fontWeight: 'bold',
                        color: 'var(--color-text)',
                        lineHeight: 1.1,
                        marginBottom: '2rem'
                    }}>
                        We build digital experiences.
                    </h2>
                </motion.div>
            {/* </AnimatePresence> */}
          </div>

          <div
            style={{
              maxWidth: "600px",
              minHeight: "100px",
              marginBottom: "3rem",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ fontSize: "1.1rem" }}
              >
                {descriptions[index % descriptions.length]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "1.25rem 1.75rem",
                border: "1px solid var(--color-accent)",
                borderRadius: "4px",
                color: "var(--color-accent)",
                fontSize: "1rem",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.backgroundColor =
                  "rgba(100, 255, 218, 0.1)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.backgroundColor =
                  "transparent")
              }
            >
              Check out our work
            </a>
          </motion.div>
        </div>

        {/* Right Column: Enhanced Visual Animations */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-2 relative h-[500px] md:h-auto">
          {/* Main Container */}
          <div className="relative w-full max-w-lg aspect-square">
            
            {/* 1. Code Card (Top Left) */}
            <motion.div
              variants={floatingVariant}
              animate="animate"
              className="absolute top-0 left-0 md:-left-8 w-64 p-4 rounded-xl bg-[#1e293b]/90 border border-[var(--color-accent)]/20 backdrop-blur-md shadow-2xl z-20"
              style={{ rotate: -5 }}
            >
              <div className="flex items-center gap-2 mb-3 border-b border-gray-700 pb-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-400 font-mono ml-2">App.tsx</span>
              </div>
              <div className="font-mono text-xs space-y-1">
                <div className="text-purple-400">const <span className="text-blue-400">App</span> = () ={">"} {"{"}</div>
                <div className="pl-4 text-gray-300">return (</div>
                <div className="pl-8 text-green-400">{"<CodeAscent />"}</div>
                <div className="pl-4 text-gray-300">);</div>
                <div className="text-purple-400">{"}"};</div>
              </div>
            </motion.div>

            {/* 2. Performance Gauge (Top Right) */}
            <motion.div
               variants={floatingVariant}
               animate="animate"
               transition={{ delay: 1 }}
               className="absolute top-10 right-0 md:-right-4 w-48 p-4 rounded-xl bg-[#1e293b]/90 border border-[var(--color-accent)]/20 backdrop-blur-md shadow-2xl z-10 flex flex-col items-center"
               style={{ rotate: 5 }}
            >
                <div className="relative w-24 h-12 overflow-hidden mb-2">
                    <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-8 border-gray-700" />
                    <motion.div 
                        className="absolute top-0 left-0 w-24 h-24 rounded-full border-8 border-transparent border-t-[var(--color-accent)] border-r-[var(--color-accent)]"
                        style={{ rotate: -45 }}
                        animate={{ rotate: [ -45, 45, -45 ] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
                <div className="text-[var(--color-accent)] font-bold text-xl">100%</div>
                <span className="text-xs text-gray-400 font-mono">Performance</span>
            </motion.div>

            {/* 3. SDLC Cycle (Bottom Center) */}
            <motion.div
               className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 md:translate-y-0 w-72 h-72 rounded-full border border-[var(--color-accent)]/10 flex items-center justify-center z-0"
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
               {/* Orbital Icons */}
                <div className="absolute -top-4 bg-[#0f172a] p-2 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]"><Layout size={20}/></div>
                <div className="absolute -bottom-4 bg-[#0f172a] p-2 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]"><CheckCircle size={20}/></div>
                <div className="absolute -left-4 bg-[#0f172a] p-2 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]"><GitMerge size={20}/></div>
                <div className="absolute -right-4 bg-[#0f172a] p-2 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]"><Cloud size={20}/></div>
            </motion.div>

            {/* Central Hub */}
            <motion.div
                variants={pulseVariant}
                animate="animate"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent rounded-full backdrop-blur-sm border border-[var(--color-accent)]/30 flex flex-col items-center justify-center z-10"
            >
                <Globe size={40} className="text-[var(--color-accent)] mb-1" />
                <span className="text-[10px] text-[var(--color-text-light)] font-bold tracking-widest">GLOBAL</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

