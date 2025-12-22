"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Server, Globe, Layers, Code, Zap } from 'lucide-react';

const BusinessVideo = () => {
    const [currentScene, setCurrentScene] = useState(0);

    const scenes = [
        {
            id: 0,
            duration: 5000,
            bg: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
            content: (
                <div style={{ textAlign: 'center', color: '#fff' }}>
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 45 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Rocket size={80} style={{ marginBottom: '1rem', color: '#64ffda' }} />
                    </motion.div>
                    <motion.h2 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                        Elevate Your Business
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px' }}
                    >
                        At Code Ascent, we don't just write code. We elevate businesses.
                    </motion.p>
                </div>
            )
        },
        {
            id: 1,
            duration: 7000,
            bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff' }}>
                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                        {[<Code key="c" size={50}/>, <Server key="s" size={50}/>, <Zap key="z" size={50}/>].map((icon, i) => (
                             <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.2 }}
                            >
                                {icon}
                            </motion.div>
                        ))}
                    </div>
                    <motion.h2 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                         style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                        Scalable Solutions
                    </motion.h2>
                    <motion.p
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 0.8 }}
                         style={{ fontSize: '1.2rem', marginTop: '1rem' }}
                    >
                        Transforming complex challenges into streamlined success.
                    </motion.p>
                </div>
            )
        },
        {
            id: 2,
            duration: 8000,
            bg: "linear-gradient(135deg, #667db6 0%, #0082c8 100%, #0082c8 100%, #667db6 100%)", // Blue variant
            content: (
                <div style={{ textAlign: 'center', color: '#fff' }}>
                     <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ marginBottom: '1rem', display: 'inline-block' }}
                    >
                        <Globe size={100} />
                    </motion.div>
                    <motion.h2 
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#ffcc00' }}>
                        150+ Projects
                    </motion.h2>
                    <motion.p 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>
                        Delivered by 50+ Experts
                    </motion.p>
                </div>
            )
        },
        {
            id: 3,
            duration: 5000,
            bg: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
            content: (
                <div style={{ textAlign: 'center', color: '#fff' }}>
                     <motion.div
                        initial={{ scale: 5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <Layers size={80} style={{ marginBottom: '1rem', color: '#00d2ff' }} />
                    </motion.div>
                    <motion.h2 
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 0.5, duration: 1 }}
                         style={{ fontSize: '4rem', fontWeight: '800', letterSpacing: '2px' }}>
                        Code Ascent
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        style={{ height: '4px', background: '#00d2ff', margin: '1rem auto', maxWidth: '300px' }}
                    />
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Let's build something extraordinary.</p>
                </div>
            )
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentScene((prev) => (prev + 1) % scenes.length);
        }, scenes[currentScene].duration);

        return () => clearTimeout(timer);
    }, [currentScene]);

    return (
        <section id="business-video" style={{ padding: '0', backgroundColor: '#000' }}>
            <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: '500px', // Fixed height for banner-like feel
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentScene}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: scenes[currentScene].bg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        {scenes[currentScene].content}
                    </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div style={{ 
                    position: 'absolute', 
                    bottom: '20px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    display: 'flex', 
                    gap: '10px',
                    zIndex: 10
                }}>
                    {scenes.map((_, index) => (
                        <div 
                            key={index}
                            onClick={() => setCurrentScene(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: index === currentScene ? '#fff' : 'rgba(255,255,255,0.3)',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s'
                            }}
                        />
                    ))}
                </div>
            </div>
            {/* Disclaimer for the user about voiceover - this is UI text */}
             <div style={{ padding: '0.5rem', textAlign: 'center', background: '#111', color: '#555', fontSize: '0.8rem' }}>
                {/* * Interactive Business Promo Visualization */}
            </div>
        </section>
    );
};

export default BusinessVideo;
