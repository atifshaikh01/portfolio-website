export const profile = {
  name: 'Md Atif Shaikh',
  role: 'Full Stack Developer',
  location: 'Mumbai, Maharashtra, India',
  email: 'shaikhatif8583020@gmail.com',
  phone: '+91 85830 20150',
  resume: '/Md_Atif_Shaikh_Resume.pdf',
  avatar: '/test-employee.webp',
  tagline: 'I build scalable, real-time web & desktop experiences.',
  summary:
    'Full Stack Developer with 2+ years of experience designing and shipping scalable web and desktop applications. I specialize in real-time systems, performance optimization, and clean, accessible interfaces — turning complex, high-frequency data into fast, intuitive products.',
  about: [
    'I’m a Full Stack Developer based in Mumbai who enjoys working across the entire stack — from architecting REST APIs and real-time data pipelines to refining the smallest interaction in the UI. My work centers on building systems that stay fast and reliable even under heavy, high-frequency data loads.',
    'Currently at Acevin Solutions, I build real-time monitoring platforms, cross-platform desktop tooling, and internal systems used daily by ~70 employees. I care deeply about performance: profiling render bottlenecks, trimming payloads, and adding caching layers where they matter most.',
    'Beyond code, I design end-to-end UI/UX flows in Figma and have led a team of interns — coordinating tasks, mentoring, and shipping milestones on time.',
  ],
  socials: [
    { label: 'Email', href: 'mailto:shaikhatif8583020@gmail.com', icon: 'mail' },
    { label: 'Phone', href: 'tel:+918583020150', icon: 'phone' },
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ],
}

export type Experience = {
  period: string
  role: string
  company: string
  description: string
  highlights: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    period: 'Feb 2024 — Present',
    role: 'Software Developer',
    company: 'Acevin Solutions',
    description:
      'Lead full-stack development across real-time monitoring systems, desktop testing tools, and internal company platforms.',
    highlights: [
      'Architected a real-time Centralized Monitoring Control System (CMCS) using React, Node.js, Express, MongoDB and MQTT to track industrial devices and live sensor data.',
      'Eliminated dashboard and map UI lag from high-frequency data streams by refactoring component architecture and removing unnecessary re-renders.',
      'Cut API response times by optimizing data payloads and introducing Redis caching for heavy data requests.',
      'Built scalable REST APIs and schemas for high-volume device records, deployed and maintained on AWS EC2.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'MQTT', 'Redis', 'AWS EC2'],
  },
  {
    period: 'Oct 2023 — Jan 2024',
    role: 'Software Developer Intern',
    company: 'Acevin Solutions',
    description:
      'Contributed to frontend and backend development across production projects while learning real-world engineering practices.',
    highlights: [
      'Implemented features and fixed bugs alongside senior developers using the MERN stack.',
      'Helped redesign and modernize the company website, improving responsiveness and UX.',
      'Gained hands-on experience with React, Node.js, MongoDB, REST APIs, Git and Redis.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Git', 'Redis'],
  },
]

export type Project = {
  title: string
  category: string
  description: string
  highlights: string[]
  stack: string[]
}

export const projects: Project[] = [
  {
    title: 'CMCS — Centralized Monitoring Control System',
    category: 'Real-Time Systems',
    description:
      'A real-time platform for monitoring industrial devices and live sensor data, built to stay fast under continuous high-frequency updates.',
    highlights: [
      'MQTT-based two-way communication with connected hardware',
      'Redis caching + optimized payloads for heavy data requests',
      'Refactored dashboard & map to remove render bottlenecks',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'MQTT', 'Redis', 'AWS EC2'],
  },
  {
    title: 'TestJig — Hardware Testing Desktop App',
    category: 'Desktop / Electron',
    description:
      'A cross-platform desktop application for hardware-based automated testing workflows, processing live image frames from connected devices.',
    highlights: [
      'Socket.IO for real-time hardware ↔ app communication',
      'Automated test execution from real-time captured data',
      'Tuned rendering for large data transfers; Figma-designed UX',
    ],
    stack: ['React', 'Electron', 'Socket.IO', 'Figma'],
  },
  {
    title: 'Acevin Internal Tool',
    category: 'Enterprise Platform',
    description:
      'A comprehensive internal management system used by ~70 employees covering attendance, leave, timesheets and appraisals.',
    highlights: [
      'Role-based access control for Admin, HR & Employee',
      'AI-powered timesheet assistance using Google Gemini',
      'Scalable REST APIs for records, approvals & appraisals',
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Gemini'],
  },
  {
    title: 'Acevin Solutions Website',
    category: 'Web / Marketing',
    description:
      'The official company website with a modern, fully responsive design and an integrated job application portal.',
    highlights: [
      'Job portal with resume upload & submission',
      'Automated email confirmations for applicants & HR',
      'SEO best practices and optimized page load performance',
    ],
    stack: ['Next.js', 'TypeScript', 'Email Integration', 'SEO'],
  },
  {
    title: 'OTS OGI — Android App (Design)',
    category: 'UI/UX · Figma',
    description:
      'A complete end-to-end UI/UX prototype for an Android application covering all key screens, flows and interactions.',
    highlights: [
      'High-fidelity mockups following Material Design',
      'Full user-flow coverage across key screens',
      'Iterative refinement from stakeholder feedback',
    ],
    stack: ['Figma', 'Material Design', 'Prototyping'],
  },
]

export type SkillGroup = {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Frameworks',
    skills: [
      'JavaScript',
      'TypeScript',
      'Python',
      'React.js',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'GSAP',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'MQTT'],
  },
  {
    title: 'Databases & Caching',
    skills: ['MongoDB', 'Redis'],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      'AWS EC2',
      'Docker',
      'Git',
      'GitHub',
      'Postman',
      'Electron',
      'Figma',
      'AI Integration',
    ],
  },
]

export type Education = {
  period: string
  degree: string
  field: string
  institution: string
}

export const education: Education[] = [
  {
    period: '2025',
    degree: 'MCA',
    field: 'Master of Computer Applications',
    institution: 'North Maharashtra University',
  },
  {
    period: '2023',
    degree: 'BCA',
    field: 'Bachelor of Computer Applications',
    institution: 'North Maharashtra University',
  },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
