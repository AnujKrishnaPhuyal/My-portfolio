export type SocialKey = 'github' | 'linkedin' | 'scholar' | 'email';
export type ProjectCategory = 'AI/ML' | 'Generative AI' | 'Research' | 'Software Engineering';
export interface Project { title: string; category: ProjectCategory[]; description: string; technologies: string[]; featured?: boolean; research?: boolean; status?: string; github?: string; githubFrontend?: string; githubBackend?: string; demo?: string; paper?: string; url?: string; image?: string; visual: string; }
export interface Experience { title: string; organization: string; location: string; dates: string; description: string; achievements: string[]; technologies: string[]; placeholder?: boolean; category?: string; }
export interface Publication { title: string; authors: string; venue: string; year: string; abstract: string; keywords: string[]; status: 'Published Research' | 'Research in Progress'; pdf?: string; doi?: string; scholar?: string; }
