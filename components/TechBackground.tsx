"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TechBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement with spring physics
  const springConfig = { damping: 25, stiffness: 150 };
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
    <div className="tech-background" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      backgroundColor: 'var(--color-bg)',
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {/* Interactive Pointer Glow */}
      <motion.div
        style={{
          position: 'absolute',
          top: -250,
          left: -250,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100, 255, 218, 0.15) 0%, transparent 70%)',
          x: smoothX,
          y: smoothY,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Subtle Grid Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px), 
                        linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px)`,
        backgroundSize: 'clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px)',
      }} />

      {/* Animated Data Flows / Lines */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.15 }}>
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${-100} ${20 + i * 20} Q ${500} ${50 + i * 10} ${1200} ${20 + i * 20}`}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            strokeDasharray="10 20"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0, 1, 0],
              x: [0, 100],
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 3
            }}
          />
        ))}
        
        {/* Vertical Pulse Lines */}
        {[...Array(3)].map((_, i) => (
           <motion.rect
            key={`rect-${i}`}
            x={20 + i * 35 + "%"}
            y="-10%"
            width="1"
            height="120%"
            fill="var(--color-accent)"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.1, 0],
              y: ["-10%", "10%"]
            }}
            transition={{ 
              duration: 15 + i * 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 4
            }}
          />
        ))}
      </svg>

      {/* Background Soft Glows (Static Atmosphere) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Abstract Code Fragments (Hidden on small screens) */}
      <div className="hidden md:block" style={{ position: 'absolute', top: '15%', right: '5%', opacity: 0.05, fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-accent)' }}>
        <pre>{`01010110
11010010
00110101
10101111`}</pre>
      </div>
      <div className="hidden md:block" style={{ position: 'absolute', bottom: '20%', left: '5%', opacity: 0.05, fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-accent)' }}>
        <pre>{`const data = flow();
process(ascent);
deploy(future);`}</pre>
      </div>
    </div>
  );
};

export default TechBackground;
