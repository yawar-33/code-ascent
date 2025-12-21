
export const projects = [
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard',
    description: 'A comprehensive financial dashboard for a leading banking institution, featuring real-time data visualization.',
    fullDescription: 'This project involved creating a high-performance financial dashboard that aggregates data from multiple sources to provide real-time insights for banking executives. The challenge was to handle large datasets without compromising UI responsiveness.',
    challenge: 'Handling real-time WebSocket data streams and rendering complex D3.js charts simultaneously without UI lag.',
    solution: 'Implemented a custom virtualization layer for data grids and optimized D3.js rendering using Canvas API where appropriate.',
    tags: ['React', 'D3.js', 'Node.js'],
    image: '/assets/fintech.png',
    link: '#',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Scalable e-commerce solution with advanced inventory management and AI-driven recommendations.',
    fullDescription: 'A headless e-commerce platform built for a fashion retailer. It features a custom checkout flow, inventory synchronization across multiple warehouses, and an AI recommendation engine.',
    challenge: 'Synchronizing inventory state across 5 different warehouses in real-time to prevent overselling.',
    solution: 'Built a distributed event-driven architecture using Kafka to handle inventory updates with eventual consistency guarantees.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    image: '/assets/ecommerce.png',
    link: '#',
  },
  {
    id: 'healthcare-app',
    title: 'Healthcare App',
    description: 'HIPAA-compliant telemedicine application connecting patients with doctors for virtual consultations.',
    fullDescription: 'A secure mobile application allowing patients to book appointments, chat with doctors, and conduct video consultations. Security and compliance were paramount.',
    challenge: 'Ensuring end-to-end encryption for video calls and chat messages while maintaining high call quality.',
    solution: 'Utilized WebRTC for peer-to-peer video encryption and implemented a secure signaling server with strict authentication.',
    tags: ['Flutter', 'WebRTC', 'Firebase'],
    image: '/assets/healthcare.png',
    link: '#',
  },
  {
    id: 'smarthome-iot',
    title: 'Smart Home IoT',
    description: 'Mobile application for controlling smart home devices with voice integration and automation routines.',
    fullDescription: 'An intuitive app to control various smart home devices from different manufacturers in one interface. Supports scene creation and automation based on time or sensor triggers.',
    challenge: 'Unifying different IoT protocols (Zigbee, Z-Wave, WiFi) into a single abstraction layer.',
    solution: 'Developed a middleware layer that normalizes device states and commands, providing a consistent API for the frontend.',
    tags: ['React Native', 'IoT', 'MQTT'],
    image: '/assets/smarthome.png',
    link: '#',
  },
  {
    id: 'logistics-tracker',
    title: 'Logistics Tracker',
    description: 'Real-time fleet tracking and supply chain management system for a global logistics company.',
    fullDescription: 'A web-based platform for tracking vehicle locations, optimizing delivery routes, and managing cargo manifests. Includes a driver mobile app.',
    challenge: 'Optimizing route calculation for thousands of deliveries with changing traffic conditions.',
    solution: 'Integrated a graph-hopper based routing engine with real-time traffic data to dynamically update routes.',
    tags: ['Vue.js', 'Python', 'Google Maps API'],
    image: '/assets/logistics.png',
    link: '#',
  },
  {
    id: 'education-platform',
    title: 'EdTech Platform',
    description: 'Interactive learning management system with video courses, quizzes, and progress tracking.',
    fullDescription: 'An engaging LMS designed for remote learning. Features include interactive video players, automated quiz grading, and student progress analytics.',
    challenge: 'Delivering high-quality video content to users with varying internet speeds globally.',
    solution: 'Implemented adaptive bitrate streaming (HLS) and a multi-region CDN strategy.',
    tags: ['React', 'Django', 'AWS'],
    image: '/assets/education.png',
    link: '#',
  },
];

export const services = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs. We build scalable and robust applications.',
    details: 'We follow a rigorous SDLC process to deliver high-quality software. Our team is proficient in modern architectures like Microservices and Serverless.',
    iconName: 'Code',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android using Flutter and React Native.',
    details: 'From consumer-facing apps to enterprise mobility solutions, we build apps that provide excellent user experiences on all devices.',
    iconName: 'Smartphone',
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    description: 'Modern, responsive, and high-performance web applications using React, Next.js, and Node.js.',
    details: 'We build SPAs and PWAs that feel like native apps. SEO optimization and performance are baked into our development process.',
    iconName: 'Globe',
  },
  {
    id: 'erp-solutions',
    title: 'ERP Solutions',
    description: 'Comprehensive ERP systems to streamline your business operations and improve efficiency.',
    details: 'We implement and customize ERP solutions to integrate all facets of an operation, including product planning, development, manufacturing, sales and marketing.',
    iconName: 'Layers',
  },
  {
    id: 'dedicated-teams',
    title: 'Dedicated Teams',
    description: 'Extend your in-house team with our skilled developers. Flexible engagement models.',
    details: 'Hire a dedicated team of developers, QA engineers, and project managers who work exclusively on your project, integrating seamlessly with your processes.',
    iconName: 'Users',
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Secure and scalable cloud architecture design and migration services (AWS, Azure, GCP).',
    details: 'We help businesses migrate to the cloud, optimize their existing cloud infrastructure, and implement DevOps best practices.',
    iconName: 'Server',
  },
];

export const aboutData = {
  stats: [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Delivered', value: '150+' },
    { label: 'Team Members', value: '50+' },
    { label: 'Happy Clients', value: '100%' },
  ],
  technologies: [
    'React', 'Node.js', 'Python', 'AWS', 'Flutter', 'Docker', 'Kubernetes', 'TypeScript'
  ],
  story: "We are a team of passionate developers, designers, and strategists dedicated to building cutting-edge software solutions. Founded in 2015, we have grown from a small startup to a full-service software house. Our expertise spans across the entire software development lifecycle, from concept to deployment. We believe in writing clean, maintainable code and designing intuitive user interfaces.",
  values: [
    { title: 'Innovation', description: 'We constantly explore new technologies to deliver the best solutions.' },
    { title: 'Quality', description: 'We never compromise on code quality or user experience.' },
    { title: 'Transparency', description: 'We believe in open communication with our clients throughout the process.' }
  ]
};
