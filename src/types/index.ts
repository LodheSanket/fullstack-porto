// Shared type definitions for the portfolio. Keeping these centralized
// means every component reads from the same shape, so content changes
// in one place (constants/data.ts) never break a component's props.

export interface NavLink {
  label: string
  href: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface ExperienceEntry {
  role: string
  company: string
  location: string
  duration: string
  current: boolean
  responsibilities: string[]
  technologies: string[]
}

export interface ProjectEntry {
  title: string
  description: string
  technologies: string[]
  contribution: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export interface EducationEntry {
  institution: string
  degree: string
  location: string
  duration: string
}

export interface QuickFact {
  label: string
  value: string
}

export interface StatCounter {
  label: string
  value: number
  suffix: string
}
