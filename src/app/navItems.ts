export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'activity', label: 'Activity' },
  { id: 'contact', label: 'Contact' },
] as const

export type NavItemId = (typeof NAV_ITEMS)[number]['id']
