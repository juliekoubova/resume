export interface ContactItem {
  href: string
  icon: string
  iconTransform?: string
  text: string
}

export function loadContacts(): ContactItem[] {
  return require('~/content/contact.json')
}
