export const portfolioData = {
  personal: {
    name: 'Gautam Dash',
    title: 'AI Engineer | Backend Developer | Python Developer',
    phone: '+91-7077248302',
    email: 'gautamdash.dev@gmail.com',
    github: 'https://github.com/Gautam-Dash',
    linkedin: 'https://linkedin.com/in/gautam-dash-117a2520a',
    hackerrank: 'https://www.hackerrank.com/profile/gautamdashhh',
    resume: "https://drive.google.com/uc?export=download&id=1BL2U5bLzy09wuk5QkJor0h1e6GsaUpPi",
  },
  summary:
    'Results-driven Software Engineer specializing in scalable AI-powered applications and distributed systems. Experienced in RAG-based intelligent systems, backend architecture optimization, and robust testing frameworks. Achieved 30% performance improvement, 99.9% reliability, and 95% test coverage.',

  skills: [
    { category: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'TypeScript'] },
    {
      category: 'Backend',
      items: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'Microservices', 'Redis', 'Celery'],
    },
    {
      category: 'AI/ML',
      items: [
        'RAG Systems',
        'LangChain',
        'FAISS',
        'Pinecone',
        'Vector Databases',
        'Prompt Engineering',
        'NLP',
        'Embeddings',
      ],
    },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
    { category: 'Cloud & DevOps', items: ['AWS (EC2, S3, Lambda)', 'Docker', 'CI/CD', 'GitHub Actions', 'Linux'] },
    { category: 'Testing', items: ['Pytest', 'Unit Testing', 'Integration Testing', 'TDD'] },
    {
      category: 'Concepts',
      items: ['Data Structures', 'Algorithms', 'Agile/Scrum', 'System Design'],
    },
  ],

  experience: [
    {
      role: 'Risk Analyst 1',
      company: 'Ernst & Young (EY) GDS',
      duration: 'Jul 2025 – Sep 2025',
      location: 'India',
      achievements: [
        'Improved application performance by 30% via frontend optimization and API caching.',
        'Evaluated 30+ ITGC/ITAC control points for SOX and ISO 27001 compliance.',
        'Built automation scripts reducing audit defects by 15%.',
      ],
    },
  ],

  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'KIIT University',
      duration: '2023 – 2025',
      cgpa: '9.09',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'GIET University',
      duration: '2020 – 2023',
      cgpa: '9.66',
    },
  ],

  projects: [
    {
      title: 'AI-Powered Codebase Intelligence Assistant',
      description:
        'Built a sophisticated RAG-based system that parses and indexes large codebases, enabling developers to perform intelligent semantic searches on code with sub-200ms latency.',
      technologies: ['Python', 'LangChain', 'FAISS', 'OpenAI API', 'FastAPI'],
      highlights: [
        'Parsed 5000+ code chunks with semantic understanding',
        'Sub-200ms semantic search latency optimization',
        '40% improvement in search accuracy using reranking algorithms',
      ],
      github: 'https://github.com/Gautam-Dash',
      featured: true,
    },
    {
      title: 'Distributed Task Processing System',
      description:
        'Architected a scalable distributed job queue system capable of handling 1000+ concurrent tasks with fault-tolerant workers and comprehensive testing coverage.',
      technologies: ['Python', 'FastAPI', 'Redis', 'Celery', 'Pytest'],
      highlights: [
        'Handled 1000+ concurrent tasks with 99.9% reliability',
        'Fault-tolerant worker architecture with automatic retries',
        '95% test coverage using Pytest and TDD methodology',
      ],
      github: 'https://github.com/Gautam-Dash',
      featured: true,
    },
  ],

  certifications: [
    {
      name: 'Oracle Generative AI Professional',
      issuer: 'Oracle University',
      year: 2025,
    },
    {
      name: 'JPMorgan Chase Software Engineering',
      issuer: 'JPMorgan Chase & Co. (Forage)',
      year: 2025,
    },
    {
      name: 'HackerRank 5-Star Python Badge',
      issuer: 'HackerRank',
      year: 2025,
    },
  ],
}
