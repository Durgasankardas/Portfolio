export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  graphicType: 'churn' | 'sales' | 'vision' | 'nlp' | 'finance';
  metrics?: { label: string; value: string }[];
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    impact: string[];
    techStack: string[];
    repoUrl: string;
    liveDemoUrl?: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: 'code' | 'database' | 'brain' | 'grid';
  skills: string[];
}

export interface UserProfile {
  name: string;
  kicker: string;
  role: string;
  tagline: string;
  aboutBio: string;
  heroBio: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  avatarUrl: string;
  resumeFileName: string;
  stats: {
    projects: string;
    leetcodeSolved: string;
    codingHours: string;
    accuracy: string;
  };
  details: {
    education: string;
    focus: string;
    interests: string;
    goal: string;
  };
}
