import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
// import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import BusinessVideo from '@/components/BusinessVideo';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <WhyChooseUs /> */}
      <BusinessVideo />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
