import { MdWork, MdGroups } from 'react-icons/md';

export const experienceData = [
  {
    id: 1,
    company: 'Tech Startup XYZ',
    role: 'Web Development Intern',
    duration: 'June 2024 - August 2024',
    location: 'Remote',
    type: 'Internship',
    description: 'Worked on frontend development and contributed to building responsive web applications.',
    responsibilities: [
      'Developed responsive UI components using React.js',
      'Collaborated with design team to implement user interfaces',
      'Fixed bugs and improved application performance',
      'Participated in code reviews and team meetings'
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Git'],
    icon: MdWork,
    status: 'Completed'
  },
  {
    id: 2,
    company: 'College Technical Club',
    role: 'Web Development Lead',
    duration: 'January 2024 - Present',
    location: 'SRKR Engineering College',
    type: 'Leadership',
    description: 'Leading the web development team and organizing technical workshops for students.',
    responsibilities: [
      'Organizing coding workshops and bootcamps',
      'Mentoring junior students in web development',
      'Managing club website and social media',
      'Coordinating technical events'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Git'],
    icon: MdGroups,
    status: 'Ongoing'
  }
];
