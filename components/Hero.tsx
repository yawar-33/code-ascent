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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style jsx>{`
        #home {
          padding-top: 80px;
        }
        @media (min-width: 1024px) {
          #home {
            padding-top: 0;
          }
        }
      `}</style>
      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-between gap-20 py-20 lg:py-0">
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-1 z-20 text-center lg:text-left">
          
          {/* Main Headline */}
          <div style={{ marginBottom: "1rem" }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(28px, 9vw, 56px)',
                        fontWeight: 'bold',
                        color: 'var(--color-text-light)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem'
                    }}>
                        We build digital experiences <br className="hidden md:inline" />
                        <span style={{ color: 'var(--color-accent)' }}>that grow revenue.</span>
                    </h1>
                </motion.div>
          </div>

          <div
            style={{
              maxWidth: "600px",
              marginBottom: "2.5rem",
              margin: "0 auto lg:0"
            }}
          >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)", color: "var(--color-text-light)", marginBottom: "1.2rem", lineHeight: 1.5 }}>
                    We craft scalable software, beautiful interfaces, and digital tools that users love.
                </p>
                <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", color: "var(--color-text)", fontWeight: 500 }}>
                    From idea to launch — we’re your full-stack partner.
                </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="#portfolio"
              className="btn-primary"
              style={{
                display: "inline-block",
                padding: "1rem 2.5rem",
                fontSize: "1rem",
                marginTop: "0.5rem"
              }}
            >
              Check out our work
            </a>
          </motion.div>
        </div>

        {/* Right Column: Enhanced Visual Animations */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-2 relative py-10 lg:py-0 scale-75 md:scale-90 lg:scale-100 origin-center lg:origin-right">
          {/* Main Container */}
          <div className="relative w-full max-w-[400px] md:max-w-lg aspect-square">
            
            {/* 1. Code Card (Top Left) */}
            <motion.div
              variants={floatingVariant}
              animate="animate"
              className="absolute top-0 left-0 -ml-4 md:-ml-8 w-56 md:w-64 p-3 md:p-4 rounded-xl bg-[#1e293b]/90 border border-[var(--color-accent)]/20 backdrop-blur-md shadow-2xl z-20"
              style={{ rotate: -5 }}
            >
              <div className="flex items-center gap-2 mb-3 border-b border-gray-700 pb-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] text-gray-400 font-mono ml-2">App.tsx</span>
              </div>
              <div className="font-mono text-[10px] md:text-xs space-y-1">
                <div className="text-purple-400">const <span className="text-blue-400">App</span> = () ={">"} {"{"}</div>
                <div className="pl-3 text-gray-300">return (</div>
                <div className="pl-6 text-green-400">{"<CodeAscent />"}</div>
                <div className="pl-3 text-gray-300">);</div>
                <div className="text-purple-400">{"}"};</div>
              </div>
            </motion.div>

            {/* 2. Performance Gauge (Top Right) */}
            <motion.div
               variants={floatingVariant}
               animate="animate"
               transition={{ delay: 1 }}
               className="absolute top-8 md:top-10 right-0 -mr-4 md:-right-4 w-40 md:w-48 p-3 md:p-4 rounded-xl bg-[#1e293b]/90 border border-[var(--color-accent)]/20 backdrop-blur-md shadow-2xl z-10 flex flex-col items-center"
               style={{ rotate: 5 }}
            >
                <div className="relative w-20 h-10 md:w-24 md:h-12 overflow-hidden mb-2">
                    <div className="absolute top-0 left-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 md:border-8 border-gray-700" />
                    <motion.div 
                        className="absolute top-0 left-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 md:border-8 border-transparent border-t-[var(--color-accent)] border-r-[var(--color-accent)]"
                        style={{ rotate: -45 }}
                        animate={{ rotate: [ -45, 45, -45 ] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
                <div className="text-[var(--color-accent)] font-bold text-lg md:text-xl">100%</div>
                <span className="text-[10px] text-gray-400 font-mono">Performance</span>
            </motion.div>

            {/* 3. SDLC Cycle (Bottom Center) - Hidden on very small screens to save space */}
            <motion.div
               className="absolute bottom-4 md:bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-60 md:w-72 md:h-72 rounded-full border border-[var(--color-accent)]/10 flex items-center justify-center z-0"
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
               {/* Orbital Icons */}
                <div className="absolute -top-3 md:-top-4 bg-[#0f172a] p-1.5 md:p-2 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]"><Layout size={18}/></div>
                <div className="absolute -bottom-3 md:-bottom-4 bg-[#0f172a] p-1.5 md:p-2 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]"><CheckCircle size={18}/></div>
                <div className="absolute -left-3 md:-left-4 bg-[#0f172a] p-1.5 md:p-2 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]"><GitMerge size={18}/></div>
                <div className="absolute -right-3 md:-right-4 bg-[#0f172a] p-1.5 md:p-2 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]"><Cloud size={18}/></div>
            </motion.div>

            {/* Central Hub */}
            <motion.div
                variants={pulseVariant}
                animate="animate"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent rounded-full backdrop-blur-sm border border-[var(--color-accent)]/30 flex flex-col items-center justify-center z-10"
            >
                <Globe size={32} className="text-[var(--color-accent)] mb-1" />
                <span className="text-[8px] md:text-[10px] text-[var(--color-text-light)] font-bold tracking-widest">GLOBAL</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

