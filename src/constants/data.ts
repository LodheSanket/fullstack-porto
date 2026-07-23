import type {
  NavLink,
  SkillCategory,
  ExperienceEntry,
  ProjectEntry,
  EducationEntry,
  QuickFact,
  StatCounter,
} from '@/types'

// Personal and contact info, taken directly from the resume header.
export const personalInfo = {
  name: 'Sanket Lodhe',
  title: 'Full-Stack Software Engineer',
  location: 'Pune, Maharashtra',
  phone: '+91 9923666493',
  email: 'sanketlodhe9923@gmail.com',
  github: 'https://github.com/LodheSanket',
  linkedin: 'https://www.linkedin.com/in/sanket-lodhe-328441191',
  summary:
    'Full-Stack Software Engineer with 2+ years of experience in full-stack development, specializing in Python, Django, Angular, and PostgreSQL. Skilled in building scalable, secure, and high-performance web applications. Adaptable to emerging AI technologies, including ChatGPT, Claude, and AI agent workflows, with a focus on integrating intelligent solutions into modern software systems.',
  availability: 'Open to new opportunities',
  yearsExperience: 2,
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

// Quick facts shown in the About section, all derived from the resume.
export const quickFacts: QuickFact[] = [
  { label: 'Experience', value: '2+ years' },
  { label: 'Based in', value: 'Pune, Maharashtra' },
  { label: 'Focus', value: 'Full-stack + AI integration' },
  { label: 'Current role', value: 'Python Full-Stack Developer' },
]

// Animated counters in the hero / about area. Numbers come straight
// from the resume bullet points, not invented for effect.
export const statCounters: StatCounter[] = [
  { label: 'API response time cut', value: 40, suffix: '%' },
  { label: 'Daily requests handled', value: 100, suffix: 'K+' },
  { label: 'Reporting efficiency gain', value: 50, suffix: '%' },
  { label: 'Dev cycle time reduced', value: 20, suffix: '%' },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frameworks',
    skills: ['Django', 'Django REST Framework', 'FastAPI', 'Angular', 'React'],
  },
  {
    category: 'Data Management',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    category: 'Web Technologies',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Angular Material', 'Node.js', 'Leaflet.js'],
  },
  {
    category: 'Tools',
    skills: ['GitLab', 'GitHub', 'VS Code', 'PyCharm', 'Postman', 'GitBash', 'GeoServer'],
  },
  {
    category: 'Platforms',
    skills: ['Linux', 'Windows 11', 'Ubuntu'],
  },
  {
    category: 'AI Tools & Assistants',
    skills: ['ChatGPT', 'Claude', 'GitHub Copilot', 'AI Agents'],
  },
]

export const experience: ExperienceEntry[] = [
  {
    role: 'Python Full-Stack Developer',
    company: 'CodeRize Technologies Pvt Ltd',
    location: 'Pune, Maharashtra',
    duration: 'May 2024 - Present',
    current: true,
    responsibilities: [
      'Developed and optimized scalable backend services using Django REST Framework and PostgreSQL, cutting API response time by 40% and reliably handling 100K+ daily requests.',
      'Designed and implemented interactive dashboards with advanced data visualization, increasing reporting efficiency by 50% and enhancing user engagement by 30%.',
      'Integrated AI-driven capabilities using ChatGPT APIs, Claude, and AI Agent workflows to automate data insights, streamline content generation, and improve user experience.',
      'Led Agile practices, including sprint planning and backlog grooming, achieving a 20% reduction in overall development cycle time.',
    ],
    technologies: ['Django', 'DRF', 'PostgreSQL', 'ChatGPT API', 'Claude', 'AI Agents'],
  },
]

export const projects: ProjectEntry[] = [
  {
    title: 'Missing Person Tracking Web Application',
    description:
      'A real-time, map-based platform for reporting and tracking missing persons, built to integrate multiple national and state databases for rapid case resolution.',
    technologies: ['Angular', 'Django', 'Python', 'REST Framework', 'Redis', 'Leaflet', 'GeoServer', 'CI/CD'],
    contribution: [
      'Conceptualized and implemented a real-time, map-based interface leveraging Leaflet.js for missing person reporting and tracking.',
      'Integrated Redis caching to enhance server performance, achieving a 40% reduction in response time.',
      'Developed a comprehensive backend system to integrate multiple national and state databases for rapid case resolutions.',
      'Designed cross-referencing algorithms, improving case resolution efficiency by 25%.',
    ],
    liveUrl: 'https://tracemapr.com',
    featured: true,
  },
  {
    title: 'Air Quality Benefit Quantification System - Abu Dhabi',
    description:
      'A geospatial analytics and digital twin platform for environmental and air-quality data, built for a government-scale deployment in Abu Dhabi.',
    technologies: ['Python', 'FastAPI', 'REST API', 'React', 'Databricks', 'Sentry', 'Unreal Engine Integration'],
    contribution: [
      'Developed scalable backend APIs using FastAPI for a geospatial analytics and digital twin platform.',
      'Designed and implemented RESTful services compliant with OpenAPI 3.1 standards.',
      'Integrated backend systems with Databricks for real-time environmental and air-quality data processing.',
      'Built APIs for geospatial querying, analytics workflows, and data visualization support.',
      'Implemented asynchronous API handling and optimized backend performance for large-scale datasets.',
    ],
    liveUrl: 'https://prototype.ead.coderize.in/',
    featured: true,
  },
  {
    title: 'Auto Count Web Application',
    description:
      'An interactive financial dashboard for tracking sales, purchases, payments, and profit and loss across an organization.',
    technologies: ['Angular', 'Django', 'Python', 'Django REST Framework', 'PostgreSQL'],
    contribution: [
      'Developed an interactive financial dashboard for tracking sales, purchases, payments, and profit/loss using Angular for frontend and Django REST Framework with PostgreSQL for backend.',
      'Implemented dynamic charts (Sales vs Purchase, Profit/Loss, Payments Made/Received) to provide real-time business insights.',
      'Integrated modules including Organization, Sales, Purchase, Accounting, Banking, OCR Automation, and Reports.',
      'Optimized data retrieval and visualization, supporting multiple users and large datasets.',
    ],
     liveUrl: 'https://13.233.60.111/',
    featured: true,
  },
  {
    title: 'Access-controlled Banking System',
    description:
      'A full-stack banking application with a secure backend API for balance and statement retrieval, built with multi-tenancy in mind.',
    technologies: ['Angular', 'Django', 'Python', 'Bootstrap', 'PostgreSQL'],
    contribution: [
      'Developed a full-stack web application using Angular and Django with a secure backend API for balance and statement retrieval.',
      'Implemented multi-tenancy, Base64 encoding, and token-based authentication to ensure data integrity.',
    ],
      liveUrl: 'https://cib.fruitly.in/banking/',
    featured: true,
  },
  {
    title: 'YCMOU Student Enquiry Portal',
    description:
      'An interactive map interface for a student enquiry system spanning 1,000+ institutes, with GeoServer-backed spatial data.',
    technologies: ['Angular', 'Leaflet.js', 'GeoServer', 'REST APIs'],
    contribution: [
      'Integrated GeoServer for spatial data management and rendering institute coordinates on the map.',
      'Designed an interactive map interface with customized markers showing detailed institute data.',
      'Optimized map performance for 1000+ institutes using clustering and lazy loading techniques.',
      'Built a student enquiry form to streamline query submissions and data handling.',
    ],
      liveUrl: 'https://ycmou.coderize.in/',
    featured: true,
  },
  {
    title: 'GeoSphere',
    description:
      'A responsive Angular frontend focused on performance and a consistent mobile-friendly experience.',
    technologies: ['Angular', 'Material Design'],
    contribution: [
      'Built a responsive frontend by implementing lazy loading and reusable components, improving performance and scalability.',
      'Designed a mobile-friendly UI with Angular Material, ensuring consistent experience across desktop and mobile.',
      'Improved data handling using RxJS operators to manage API streams efficiently, reducing redundant calls.',
    ],
       liveUrl: 'http://geosphere.coderize.in/',
    featured: true,
  },
  {
    title: 'AI-Powered Smart Report Summarizer',
    description:
      'An AI-driven report summarization system that delivers context-aware summaries while preserving critical insights.',
    technologies: ['Angular', 'Python', 'ChatGPT API', 'REST APIs'],
    contribution: [
      'Developed an AI-driven report summarization system using the ChatGPT API.',
      'Demonstrated real-world AI integration in a production-ready Django backend with Angular frontend.',
      'Provided secure REST APIs for integration with dashboards.',
    ],
  },
]

export const education: EducationEntry[] = [
  {
    institution: 'SavitriBai Phule Pune University',
    degree: 'Bachelor of Engineering (B.E.) in Computer Engineering',
    location: 'Ahilyanagar, MH',
    duration: 'Aug 2019 - Jun 2023',
  },
  {
    institution: 'Residential Junior College of Science',
    degree: 'Higher Secondary College (HSC)',
    location: 'Shevgaon, Ahilyanagar',
    duration: 'Jun 2018 - Mar 2019',
  },
]
