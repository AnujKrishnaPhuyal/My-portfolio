import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'AdViT-RE',
    category: ['AI/ML', 'Research'],
    description: 'Adversarial Vision Transformer with Rényi Entropy for multimodal epileptic seizure prediction from wearable EEG and ECG, forecasting preictal activity up to approximately 40 minutes before onset in experiments.',
    technologies: ['PyTorch', 'Vision Transformer', 'EEG', 'ECG', 'Rényi Entropy', 'Multimodal AI'],
    featured: true,
    research: true,
    status: "Master's Thesis · EIT 2026",
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=FOgtKu0AAAAJ&citation_for_view=FOgtKu0AAAAJ:u-x6o8ySG0sC',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85',
    visual: 'wave',
  },

  {
    title: 'AI-Generated Code Detection',
    category: ['AI/ML', 'Generative AI', 'Research'],
    description: 'Ongoing research distinguishing human-written and AI-generated source code through token probabilities, surprisal, entropy, complexity, AST, style, compression, and embedding-based signals.',
    technologies: ['Qwen2.5-Coder', 'CodeBERT', 'XGBoost', 'Random Forest', 'SHAP'],
    featured: true,
    research: true,
    status: 'Research in Progress',
    url: 'https://huggingface.co/spaces/InfiniteTsukuyomi/Detector',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85',
    visual: 'code',
  },
  {
  title: 'Real-Time Pothole Detection',
  category: ['AI/ML','Computer Vision'],
  description:
    'Developed a real-time pothole detection system using YOLOv5 and a camera module connected to a Raspberry Pi 4. The system detects potholes from live road footage, records their GPS coordinates, and sends the location data to a central department to support faster inspection and repair.',
  technologies: [
    'YOLOv5',
    'Python',
    'PyTorch',
    'Computer Vision',
    'Raspberry Pi 4',
    'GPS',
    'Deep Learning'
  ],
  featured: true,
  status: 'Completed',
  url: 'https://github.com/AnujKrishnaPhuyal/Pothole-Detection',
  image:
    'https://media.istockphoto.com/id/174662203/photo/pot-hole.webp?a=1&b=1&s=612x612&w=0&k=20&c=yaf-icnDIlpR4sUD_hsJuB1x0z8bTsxUbl8xhh84niU=',
  visual: 'vision',
},
{
  title: 'Property Adda',
  category: ['Software Engineering'],
  description:
    'Beta version of a real-estate rental platform built to help users browse, list, and manage rental properties through a modern web interface. Developed with a separate React frontend and Django backend for property management, user interactions, and API-driven data handling.',
  technologies: [
    'React',
    'JavaScript',
    'Django',
    'Python',
    'REST API',
    'MySQL',
    'HTML',
    'CSS'
  ],
  status: 'Beta',
  demo: 'https://propertyadda.netlify.app/',
  githubFrontend: 'https://github.com/AnujKrishnaPhuyal/PropertyAdda_Frontend',
  githubBackend: 'https://github.com/AnujKrishnaPhuyal/Rental_Backend',
  image:
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
  visual: 'api',
},

  {
  title: 'RAG PDF Question Answering',
  category: ['Generative AI', 'AI/ML'],
  description:
    'Built a Retrieval-Augmented Generation system for querying multiple PDF documents. The pipeline extracts document content, generates semantic embeddings with Gemini, stores vectors in Pinecone, retrieves relevant context using similarity search, and uses Groq-powered inference to generate accurate, context-aware answers.',
  technologies: [
    'RAG',
    'Gemini',
    'Pinecone',
    'Groq',
    'Vector Embeddings',
    'PDF Processing',
    'LLMs'
  ],
  featured: true,
  status: 'Completed',
  image:
    'https://plus.unsplash.com/premium_photo-1725326157274-4677383431eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpJTIwYW5zd2VyfGVufDB8fDB8fHwwauto=format&fit=crop&w=1200&q=85',
  visual: 'text',
},
  // {
  //   title: 'NLP Intelligence Pipeline',
  //   category: ['AI/ML', 'Generative AI'],
  //   description: 'Editable project entry for document understanding, semantic search, classification, or information extraction.',
  //   technologies: ['NLP', 'Transformers', 'Python'],
  //   status: 'Portfolio placeholder',
  //   url: 'https://github.com/Anujkrishnaphuyal',
  //   image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85',
  //   visual: 'text',
  // },

  
];
