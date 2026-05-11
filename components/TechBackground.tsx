"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TechBackground = () => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 30, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: '#0a192f',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* ── Subtle dot grid ──────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(100,255,218,0.18) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          opacity: 0.35,
        }}
      />

      {/* ── Orb 1 — top-left, primary teal ──────────────────── */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.18, 0.12],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(100,255,218,1) 0%, transparent 65%)',
          filter: 'blur(120px)',
        }}
      />

      {/* ── Orb 2 — bottom-right, deeper teal/blue ───────────── */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.14, 0.08],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(56,189,248,1) 0%, transparent 65%)',
          filter: 'blur(140px)',
        }}
      />

      {/* ── Orb 3 — centre accent (very subtle) ─────────────── */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.09, 0.04],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        style={{
          position: 'absolute',
          top: '35%',
          left: '40%',
          width: '35vw',
          height: '35vw',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(100,255,218,1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* ── Mouse-follow glow ────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          top: -200,
          left: -200,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(100,255,218,0.08) 0%, transparent 70%)',
          x: smoothX,
          y: smoothY,
          pointerEvents: 'none',
        }}
      />

      {/* ── Top edge gradient vignette ────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '35%',
          background:
            'linear-gradient(to bottom, rgba(10,25,47,0.6) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Bottom edge gradient vignette ────────────────────── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background:
            'linear-gradient(to top, rgba(10,25,47,0.7) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default TechBackground;
