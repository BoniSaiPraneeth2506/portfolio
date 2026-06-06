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
    category: 'Full Stack',
    overview: 'E-Prana is a state-of-the-art hospital management system designed to streamline operations across four distinct user roles. It digitizes the entire workflow from patient onboarding to prescription management and slot booking. The application ensures seamless communication and robust data security, addressing the critical needs of modern healthcare facilities.',
    role: 'Lead Full Stack Developer',
    duration: 'Jan 2024 - Present',
    linkedinPost: 'https://linkedin.com/in/yourprofile',
    challenges: [
      'Implementing real-time notifications for medication reminders across web and mobile platforms.',
      'Designing a secure role-based access control (RBAC) system for four different user types.',
      'Optimizing database queries for efficient slot management and appointment scheduling.'
    ],
    solutions: [
      'Integrated Firebase Cloud Messaging (FCM) and WebSockets for reliable real-time push notifications.',
      'Developed a robust JWT-based authentication flow with Spring Security for strict access control.',
      'Utilized PostgreSQL indexing and optimized queries to ensure lightning-fast scheduling operations.'
    ],
    gallery: [
      'https://placehold.co/800x450/111111/4f8cff?text=Dashboard+Overview',
      'https://placehold.co/800x450/111111/4f8cff?text=Appointment+Booking',
      'https://placehold.co/800x450/111111/4f8cff?text=Patient+Records'
    ]
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
    category: 'Full Stack',
    overview: 'This comprehensive E-Commerce platform provides a seamless shopping experience for users while offering powerful administrative tools for store owners. It features secure authentication, dynamic product cataloging, and a reliable checkout process powered by industry-standard payment gateways.',
    role: 'MERN Stack Developer',
    duration: 'Aug 2023 - Dec 2023',
    linkedinPost: 'https://linkedin.com/in/yourprofile',
    challenges: [
      'Handling complex cart state management and persistence across user sessions.',
      'Ensuring secure and reliable payment processing with proper error handling and webhooks.',
      'Building a highly responsive and performant product catalog with filtering and search capabilities.'
    ],
    solutions: [
      'Implemented Redux Toolkit for robust global state management and synced cart state with local storage.',
      'Integrated Stripe/Razorpay APIs securely using webhooks to verify transactions on the Node.js backend.',
      'Created optimized MongoDB aggregation pipelines and implemented pagination for the product catalog.'
    ],
    gallery: [
      'https://placehold.co/800x450/111111/4f8cff?text=Storefront+UI',
      'https://placehold.co/800x450/111111/4f8cff?text=Shopping+Cart',
      'https://placehold.co/800x450/111111/4f8cff?text=Admin+Dashboard'
    ]
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
    category: 'Web Development',
    overview: 'A high-performance real-time chat application designed to provide instant messaging capabilities similar to popular chat platforms. It supports live one-to-one messaging, online status indicators, and persistent chat history, all wrapped in a sleek, modern user interface.',
    role: 'Frontend & Backend Developer',
    duration: 'May 2023 - Jul 2023',
    linkedinPost: 'https://linkedin.com/in/yourprofile',
    challenges: [
      'Maintaining stable WebSocket connections and handling reconnections seamlessly.',
      'Designing an efficient database schema for storing and retrieving thousands of messages quickly.',
      'Updating the UI instantly upon receiving new messages without performance degradation.'
    ],
    solutions: [
      'Utilized Socket.IO for robust real-time bi-directional event-based communication with automatic fallbacks.',
      'Designed an optimized MongoDB schema with proper indexing for rapid message history retrieval.',
      'Implemented efficient React state updates and virtualization for rendering long chat lists smoothly.'
    ],
    gallery: [
      'https://placehold.co/800x450/111111/4f8cff?text=Chat+Interface',
      'https://placehold.co/800x450/111111/4f8cff?text=Active+Users+List',
      'https://placehold.co/800x450/111111/4f8cff?text=Mobile+Chat+View'
    ]
  }
];
