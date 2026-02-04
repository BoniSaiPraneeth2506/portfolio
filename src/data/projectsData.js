import { FaHospital, FaShoppingCart, FaComments } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

export const projectsData = [
  {
    id: 1,
    title: 'E-Prana - Hospital Management System',
    description: 'Comprehensive healthcare platform with Spring Boot backend, React.js dashboard, and React Native mobile app serving 4 user roles (Developer, Super Admin, Compounder, Patient).',
    techStack: ['Spring Boot', 'React.js', 'React Native', 'PostgreSQL'],
    features: [
      'Patient registration and appointment scheduling',
      'Prescription management system',
      'Automated medication reminders with real-time notifications',
      'Hospital slot management',
      'Communication system (email & push notifications)',
      'Multi-role access control'
    ],
    github: 'https://github.com/praneeth/e-prana',
    liveDemo: 'https://e-prana-demo.vercel.app',
    status: 'Ongoing',
    icon: FaHospital,
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'Full Stack E-Commerce Platform',
    description: 'A fully functional e-commerce system with user authentication, product management, and payment gateway integration (Razorpay/Stripe).',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    features: [
      'User authentication and authorization',
      'Product catalog management',
      'Shopping cart and checkout',
      'Payment gateway integration (Razorpay/Stripe)',
      'Order management and order history',
      'Admin dashboard',
      'Responsive UI design',
      'RESTful API architecture'
    ],
    github: 'https://github.com/praneeth/ecommerce',
    liveDemo: 'https://ecommerce-demo.vercel.app',
    status: 'Ongoing',
    icon: FaShoppingCart,
    category: 'Full Stack'
  },
  {
    id: 3,
    title: 'Real-Time Chat Application',
    description: 'Built real-time chat with one-to-one messaging using Socket.IO and WebSockets with comprehensive chat features.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO'],
    features: [
      'Real-time one-to-one messaging',
      'WebSocket implementation with Socket.IO',
      'User authentication with JWT',
      'Private and public chat rooms',
      'Online user indicators',
      'Message history and persistence'
    ],
    github: 'https://github.com/praneeth/chat-app',
    liveDemo: 'https://chat-app-demo.vercel.app',
    status: 'Completed',
    icon: FaComments,
    category: 'Web Development'
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with React.js featuring smooth animations, dynamic content, and professional design.',
    techStack: ['React.js', 'CSS3', 'JavaScript', 'HTML5'],
    features: [
      'Single Page Application with smooth navigation',
      'Responsive design for all devices',
      'Dynamic typing animation',
      'Smooth scroll effects',
      'Contact form with validation',
      'Premium mobile UI'
    ],
    github: 'https://github.com/praneeth/portfolio',
    liveDemo: 'https://praneeth-portfolio.vercel.app',
    status: 'Completed',
    icon: MdDashboard,
    category: 'Web Development'
  }
];
