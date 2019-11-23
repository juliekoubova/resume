export interface ContactItem {
  href: string
  icon: string
  iconTransform?: string
  key: string
  text: string
}

export function loadContacts(): Map<string, ContactItem> {
  return new Map(
    Object.entries<ContactItem>(require('~/content/contact.json')).map(
      ([key, item]) => [key, { ...item, key }]
    )
  )
}
