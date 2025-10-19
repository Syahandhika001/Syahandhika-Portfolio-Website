export const navLinks = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const personalInfo = {
  name: 'Syahandhika',
  fullName: 'Syahandhika Naufal Farizi',
  roles: [
    'Frontend Developer',
    'Outsystem Developer',
    'CCTV Specialist',
    'UI/UX Enthusiast',
  ],
  tagline: 'Building beautiful and functional web experiences',
  description:
    'Passionate developer focused on creating elegant solutions to complex problems. I specialize in modern web technologies and love bringing ideas to life through code.',
  email: 'dhika.farizi@gmail.com',
  location: 'Indonesia',
  cvUrl: '/cv/syahandhika-cv.pdf', 
} as const;

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Syahandhika001',
    icon: 'FiGithub',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/syahandhika-f/',
    icon: 'FiLinkedin',
  },
  {
    name: 'Email',
    url: 'mailto:dhika.farizi@gmail.com',
    icon: 'FiMail',
  },
] as const;


export const aboutMe = {
  bio: [
    "Hi! I'm Syahandhika, a passionate Frontend Developer with expertise in building modern web applications. I love creating intuitive user interfaces and solving complex problems with elegant code.",
    'Currently working as an OutSystems Developer, I combine low-code platforms with traditional development to deliver efficient solutions. My background in CCTV systems has taught me the importance of attention to detail and systematic thinking.',
    'When I\'m not coding, you can find me exploring new technologies, contributing to open-source projects, or designing user-friendly interfaces.',
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      items: ['Golang', 'PostgreSQL', 'REST APIs'],
    },
    {
      category: 'Tools & Platforms',
      items: ['OutSystems', 'Git', 'VS Code', 'Figma', 'Postman'],
    },
    {
      category: 'Specialties',
      items: ['CCTV Installation', 'Network Configuration', 'System Integration'],
    },
  ],
  stats: [
    {
      label: 'Years Experience',
      value: '2+',
    },
    {
      label: 'Projects Completed',
      value: '20+',
    },
    {
      label: 'Technologies',
      value: '15+',
    },
    {
      label: 'Client Satisfaction',
      value: '100%',
    },
  ],
} as const;


export const projects = [
  /* 
  {
  id: 1,
  title: 'Nama Project Real Anda',
  description: 'Deskripsi project, fitur utama, problem yang dipecahkan',
  image: '/images/projects/your-project.jpg', // Screenshot project
  category: 'Web', // atau 'System', 'Platform'
  techStack: ['Tech', 'Yang', 'Dipakai'],
  liveUrl: 'https://live-project-url.com', // Atau null jika private
  githubUrl: 'https://github.com/username/repo', // Atau null
  featured: true, // true untuk project penting
  }
  */
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
    image: '/images/projects/ecommerce.jpg',
    category: 'Web',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Syahandhika001/ecommerce',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, team workspaces, and drag-and-drop functionality.',
    image: '/images/projects/task-manager.jpg',
    category: 'Web',
    techStack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Syahandhika001/task-manager',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website Template',
    description:
      'Modern and responsive portfolio template for developers and designers with dark mode support.',
    image: '/images/projects/portfolio.jpg',
    category: 'Web',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Syahandhika001/portfolio-template',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description:
      'Beautiful weather application with 7-day forecast, location search, and interactive maps.',
    image: '/images/projects/weather.jpg',
    category: 'Web',
    techStack: ['React', 'OpenWeather API', 'Chart.js', 'CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Syahandhika001/weather-app',
    featured: false,
  },
  {
    id: 5,
    title: 'CCTV Monitoring System',
    description:
      'Professional CCTV system integration with remote monitoring, motion detection, and cloud storage.',
    image: '/images/projects/cctv.jpg',
    category: 'System',
    techStack: ['Network Config', 'IP Cameras', 'NVR Setup'],
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 6,
    title: 'OutSystems Business App',
    description:
      'Enterprise business application built with OutSystems low-code platform for process automation.',
    image: '/images/projects/outsystems.jpg',
    category: 'Platform',
    techStack: ['OutSystems', 'SQL Server', 'REST APIs'],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
] as const;

{/*export const projectCategories = ['All', 'Web', 'Mobile', 'System', 'Platform', 'category baru'] as const; */}
export const projectCategories = ['All', 'Web', 'System', 'Platform'] as const;


export const experiences = [
  {
    id: 1,
    title: 'OutSystems Developer',
    company: 'PT Mitra Integrasi Informatika',
    location: 'Jakarta, Indonesia',
    period: 'January 2024 - Present',
    type: 'Full-time',
    responsibilities: [
      'Developed and maintained web applications using OutSystems low-code platform',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented responsive UI/UX designs following modern best practices',
      'Participated in code reviews and knowledge sharing sessions',
      'Optimized application performance and database queries',
    ],
    technologies: ['OutSystems', 'SQL Server', 'REST APIs', 'JavaScript', 'CSS'],
    achievements: [
      'Successfully delivered 5+ projects on time',
      'Improved application load time by 40%',
    ],
  },
  {
    id: 2,
    title: 'CCTV Installer & Technician',
    company: 'PT Paperocks Technology Indonesia',
    location: 'Jakarta, Indonesia',
    period: 'July 2022 - December 2023',
    type: 'Full-time',
    responsibilities: [
      'Installed and configured CCTV surveillance systems for commercial properties',
      'Conducted network configuration and IP camera setup',
      'Performed system maintenance and troubleshooting',
      'Provided technical support and training to clients',
      'Documented installation procedures and system specifications',
    ],
    technologies: ['IP Cameras', 'NVR Systems', 'Network Configuration', 'Hikvision', 'Dahua'],
    achievements: [
      'Completed 50+ successful installations',
      'Maintained 99% client satisfaction rate',
      'Reduced system downtime by implementing proactive maintenance',
    ],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2021 - 2022',
    type: 'Freelance',
    responsibilities: [
      'Built responsive websites for small businesses and startups',
      'Implemented modern UI/UX designs using React and Next.js',
      'Collaborated with clients to gather requirements and deliver solutions',
      'Maintained and updated existing web applications',
      'Provided technical consultation and recommendations',
    ],
    technologies: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    achievements: [
      'Completed 10+ client projects',
      'Achieved 5-star ratings on freelance platforms',
    ],
  },
] as const;

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Computer Science Education',
    institution: 'Universitas Pendidikan Indoensia', // Ganti dengan universitas Anda
    location: 'Indonesia',
    period: '2021 - 2025',
    gpa: '3.7 / 4.0', // Optional, bisa dihapus jika tidak ingin ditampilkan
    achievements: [
      'Final Project: Web-based Multimedia Algorithm Learning Application',
    ],
  },
] as const;

export const certifications = [
  {
    id: 1,
    name: 'OutSystems Reactive Developer',
    issuer: 'OutSystems',
    date: '2024',
    credentialUrl: '#', // Ganti dengan URL credential jika ada
  },
  {
    id: 2,
    name: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: '2023',
    credentialUrl: '#',
  },
  // Tambahkan sertifikasi lain jika ada
] as const;
