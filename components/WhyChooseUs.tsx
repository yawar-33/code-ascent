"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Rocket, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Monitor size={40} />,
      title: "Pixel Perfect Design",
      description:
        "We craft stunning, intuitive interfaces that captivate users and elevate your brand identity.",
    },
    {
      icon: <Server size={40} />,
      title: "Clean Architecture",
      description:
        "Our solutions are built on robust, scalable codebases designed for long-term growth and maintainability.",
    },
    {
      icon: <Rocket size={40} />,
      title: "Agile Development",
      description:
        "We deliver rapid results through iterative cycles, ensuring transparency and quick time-to-market.",
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Dedicated Support",
      description:
        "Your success is our priority. We provide ongoing maintenance and support to keep your digital assets performing optimally.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="why-choose-us" className="section relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-[clamp(1.8rem,8vw,3rem)] font-bold mb-4 lg:mb-6 text-[var(--color-text-light)]">
            Why Choose <span className="text-[var(--color-accent)]">Code Ascent</span>?
          </h2>
          <p className="text-[clamp(1rem,4vw,1.2rem)] text-[var(--color-text)] max-w-2xl mx-auto">
            We deliver excellence in every pixel and line of code.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-8 lg:p-12 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-2xl hover:border-[var(--color-accent)]/50 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 group flex flex-col items-center text-center h-full"
            >
              <div className="mb-6 text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300 inline-block p-4 bg-[var(--color-accent)]/10 rounded-full">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-light)] mb-4">
                {reason.title}
              </h3>
              <p className="text-[0.95rem] text-[var(--color-text)] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
