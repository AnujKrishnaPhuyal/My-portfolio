import type { Experience } from '../types';

export const experiences: Experience[] = [

   {
    title: 'Graduate Research Assistant',
    category: 'Research Experience',
    organization: 'Texas Tech University',
    location: 'Lubbock, Texas',
    dates: 'May 2025 - Feb 2026',

    description:
      'Researched AI-generated code detection with language models, code embeddings, and explainable machine learning.',

    achievements: [
      'Fine-tuned CodeGen 350M with LoRA on 51K AI-human code pairs, improving F1 by 3%.',
      'Built AST-enhanced UniXcoder pipelines with 99% accuracy and used SHAP to reduce false positives.',
      'Optimized H100 experiments, cutting epoch time from 4.0 to 2.5 hours.',
    ],

    technologies: [
      'Python',
      'PyTorch',
      'Transformers',
      'CodeGen',
      'LoRA',
      'UniXcoder',
      'AST',
      'SHAP',
      'Hugging Face',
      'HPC',
      'SLURM',
      'NVIDIA H100',
    ],
  },

  {
    title: "Graduate Researcher / Master's Thesis Research",
    category: 'Thesis Research',
    organization: 'Cyber-Physical Systems Lab · Texas Tech University', location: 'Lubbock, Texas', dates: 'Aug 2025 - May 2026',
    description: 'Developed multimodal seizure forecasting methods using wearable physiological signals.',
    achievements: [
      'Designed an AI framework combining wearable EEG and ECG signals.',
      'Applied Vision Transformers, Rényi entropy, and multimodal learning.',
      'Improved noise robustness with adversarial training and reproducible PyTorch workflows.',
    ],
    technologies: ['Python', 'PyTorch', 'Vision Transformer', 'EEG', 'ECG', 'Signal Processing', 'Adversarial Learning']
  },
  


  {
    title: 'Full Stack Developer',
    category: 'Software Engineering',
    organization: 'Property Adda',
    location: 'Kathmandu, Nepal',
    dates: 'Apr 2022 - Aug 2024',

    description:
      'Built a real-estate platform with property listings, role-based access, and backend services.',

    achievements: [
      'Scaled the platform to 100+ listings and three RBAC user roles.',
      'Built 25+ Django REST endpoints and reduced frontend-backend latency by 25%.',
      'Improved MySQL performance and delivered features across React, Django, and API layers.',
    ],

    technologies: [
      'Python',
      'Django',
      'React',
      'JavaScript',
      'REST API',
      'MySQL',
      'RBAC',
      'HTML',
      'CSS',
      'Git',
    ],
  },

  {
    title: 'Computer Vision Engineer',
    category: 'Computer Vision',
    organization: 'Boltek Enterprises',
    location: 'Kathmandu, Nepal',
    dates: 'Mar 2021 - Feb 2022',

    description:
      'Built computer vision systems for infrastructure inspection and real-time hazard detection.',

    achievements: [
      'Deployed YOLOv5 hazard detection at 92% mAP on 30 FPS video.',
      'Built a Django and React dashboard mapping 1,200+ GPS-tagged detections.',
      'Integrated web-based tracking and reduced estimated inspection costs by 60%.',
    ],

    technologies: [
      'Python',
      'YOLOv5',
      'Computer Vision',
      'PyTorch',
      'OpenCV',
      'Django',
      'React',
      'GPS',
      'Deep Learning',
    ],
  },
];
