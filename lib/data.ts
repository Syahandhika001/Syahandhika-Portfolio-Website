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
  

    socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/Syahandhika001',
      icon: 'FiGithub',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/syahandhika-f/',
      icon: 'FiLinkedin',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/syahandhika', // Update with your actual Twitter
      icon: 'FiTwitter',
    },
    {
      platform: 'Email',
      url: 'mailto:dhika.farizi@gmail.com',
      icon: 'FiMail',
    },
  ],
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
      value: '3+',
    },
    {
      label: 'Projects Completed',
      value: '7+',
    },
    {
      label: 'Technologies',
      value: '12+',
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
  image: '/images/projects/your-project.jpg', 
  category: 'Web', // atau 'System', 'Platform'
  techStack: ['Tech', 'Yang', 'Dipakai'],
  liveUrl: 'https://live-project-url.com', // Atau null
  githubUrl: 'https://github.com/username/repo', // Atau null
  featured: true, // true untuk project penting
  }
  */
  // ⭐ Featured Projects (Paling Menarik)
  {
    id: 1,
    title: 'PRIMM - Algorithm Learning Platform',
    description:
      'Interactive web-based multimedia learning application for programming algorithms using PRIMM methodology. Features video tutorials, quizzes, and real-time code execution for students.',
    image: '/images/projects/primm.svg',
    category: 'Platform',
    techStack: ['OutSystems', 'Reactive Web', 'SQL Server', 'REST APIs'],
    liveUrl: 'https://personal-duj70ena.outsystemscloud.com/PRIMM/',
    githubUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Kage Booking System',
    description:
      'Modern booking frontend application with responsive design, room search, booking management, and interactive UI. Built with React and Tailwind CSS for seamless user experience.',
    image: '/images/projects/kage-booking.svg',
    category: 'Web',
    techStack: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: null,
    githubUrl: 'https://github.com/Syahandhika001/kage-booking-fe',
    featured: true,
  },
  {
    id: 3,
    title: 'Jajanan Anira - E-Commerce Platform',
    description:
      'Full-featured e-commerce website for traditional snacks with product catalog, shopping cart, order management, and admin dashboard. Built with PHP and MySQL for robust performance.',
    image: '/images/projects/jajanan-anira.svg',
    category: 'Web',
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    liveUrl: null,
    githubUrl: 'https://github.com/Syahandhika001/JajananAnira',
    featured: true,
  },

  // 📚 Regular Projects
  {
    id: 4,
    title: 'SekolahCekR ',
    description:
      'School Competency Checker with machine learning integration.',
    image: '/images/projects/sekolah-cekr.svg',
    category: 'System',
    techStack: ['R'],
    liveUrl: null,
    githubUrl: 'https://github.com/Syahandhika001/SekolahCekR',
    featured: false,
  },
  {
    id: 5,
    title: 'Python E-Learning Platform',
    description:
      'Educational platform with course management, interactive quizzes, progress tracking, and student analytics. Built with Python Flask for backend efficiency.',
    image: '/images/projects/python-elearning.svg',
    category: 'Platform',
    techStack: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'JavaScript'],
    liveUrl: null,
    githubUrl: 'https://github.com/Syahandhika001/Python-E.learning',
    featured: false,
  },
  {
    id: 6,
    title: 'ToDo List Manager',
    description:
      'Clean and intuitive task management application with add, edit, delete, and mark complete features. Perfect for daily productivity tracking.',
    image: '/images/projects/todolist.svg',
    category: 'Web',
    techStack: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    liveUrl: null,
    githubUrl: 'https://github.com/Syahandhika001/ToDoList',
    featured: false,
  },
  {
    id: 7,
    title: 'Polaris - Telkomsel Enterprise System',
    description:
      'Enterprise-level business application built with OutSystems for Telkomsel internal processes. Features workflow automation, data management, and reporting (Private/VPN Access).',
    image: '/images/projects/polaris.svg',
    category: 'Platform',
    techStack: ['OutSystems', 'SQL Server', 'REST APIs', 'Enterprise Integration'],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
];

{/*export const projectCategories = ['All', 'Web', 'Mobile', 'System', 'Platform', 'category baru'] as const; */}
export const projectCategories = ['All', 'Web', 'System', 'Platform'] as const;


export const experiences = [
  {
    id: 1,
    title: 'CCTV Installer & Technician',
    company: 'CV. DKComputindo',
    location: 'Bekasi, Indonesia',
    period: 'July 2021 - Present',
    type: 'Freelance',
    responsibilities: [
      'Installed and configured CCTV surveillance systems for commercial properties',
      'Conducted network configuration and IP camera setup',
      'Performed system maintenance and troubleshooting',
      'Provided technical support and training to clients',
      'Documented installation procedures and system specifications',
    ],
    technologies: ['IP Cameras', 'NVR Systems', 'Network Configuration', 'Hikvision'],
    achievements: [
      'Completed 50+ successful installations',
      'Maintained 99% client satisfaction rate',
      'Reduced system downtime by implementing proactive maintenance',
    ],
  },
  {
    id: 2,
    title: 'OutSystems Developer',
    company: 'PT Mitra Integrasi Informatika',
    location: 'Jakarta, Indonesia',
    period: 'February 2024 - March 2025',
    type: 'Internship',
    responsibilities: [
      'Developed and maintained web applications using OutSystems low-code platform',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented responsive UI/UX designs following modern best practices',
      'Participated in code reviews and knowledge sharing sessions',
      'Optimized application performance and database queries',
    ],
    technologies: ['OutSystems', 'SQL Server', 'REST APIs', 'JavaScript', 'CSS'],
    achievements: [
      'Successfully delivered 3+ projects on time',
      'Improved application looks and performance by 20%',
    ],
  },
  {
    id: 3,
    title: 'Teaching Assistant – Programming Algorithms Course',
    company: 'Universitas Pendidikan Indonesia',
    location: 'Bandung, Indonesia',
    period: 'September 2022 – February 2023',
    type: 'Part-time', // Tipe pekerjaan diasumsikan sebagai 'Part-time'
    responsibilities: [
      'Collaborated with lecturers to prepare and curate course materials for a class of 80 students, focusing on core algorithm and programming concepts.',
      'Conducted weekly practical lab sessions for 35+ students, providing live coding demonstrations and hands-on assistance with programming assignments.',
      'Evaluated and provided constructive feedback on over 100 student assignments and exams, guiding them to improve their algorithmic thinking.',
      'Authored and refined supplementary learning materials.'
    ],
    technologies: ["C, PowerPoint, Learning Management Systems (LMS), Hackerank"], 
    achievements: [
      'Contributed to a 25% increase in student comprehension based on semester-end evaluations.'
    ],
  },
] as const;

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Computer Science Education',
    institution: 'Universitas Pendidikan Indoensia', 
    location: 'Indonesia',
    period: '2021 - 2025',
    gpa: '3.7 / 4.0',
    achievements: [
      'Final Project: Web-based Multimedia Algorithm Learning Application',
    ],
  },
] as const;

export const certifications = [
  {
    id: 1,
    name: 'PostgreSQL',
    issuer: 'IDN.ID',
    date: '2025',
    credentialUrl: 'https://drive.google.com/file/d/1wP-fRTsr0BWdWUP50mZ0PCd5RABkCyIE/view?usp=sharing', 
  },
  {
    id: 2,
    name: 'Senior Programmer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    date: '2024',
    credentialUrl: 'https://drive.google.com/file/d/14D6xOUWQpjeoipnGZSlZ84y-pv9C9bJ4/view?usp=sharing',
  },
  {
    id: 3,
    name: 'IC3 Digital Literacy',
    issuer: 'Certiport',
    date: '2023',
    credentialUrl: 'https://drive.google.com/file/d/1x6lQEQUmshD4EPkw1fXwre2f8vu2B4yh/view?usp=sharing',
  },

] as const;


export const contactInfo = {
  email: 'dhika.farizi@gmail.com',
  phone: '+62 81317570936', 
  location: 'Bekasi, Indonesia',
  availability: 'Available for freelance projects',
} as const;