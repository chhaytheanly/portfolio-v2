import type { MessageFunction, VueMessageType } from 'vue-i18n'

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  thumbnail: string
  images: string[]
  tech: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  date: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  description: string
  cover: string
  tags: string[]
  date: string
  readTime: number
  author: string
}

export interface Skill {
  name: string
  icon: string
  level: number
  category: string
}

export interface NavItem {
  label: string
  to: string
}