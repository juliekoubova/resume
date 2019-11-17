export interface TechSection {
  name: string
  items: string[]
}

export function loadTech(): TechSection[] {
  return require('~/content/tech.json')
}
