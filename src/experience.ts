const resolve = require.context('~/content/experience', true, /\.md$/)

interface ExperienceItem {
  from?: Date
  github?: string
  html: string
  key: string
  name: string
  vendor?: string
  to?: Date
}

const FUTURE = new Date('2101-01-01').valueOf()

export function loadExperience(): ExperienceItem[] {
  const items: ExperienceItem[] = []

  for (const key of resolve.keys()) {
    const data = resolve(key)
    const { attributes } = data

    items.push({
      name: key,
      ...attributes,
      from: attributes.from && new Date(attributes.from),
      to: attributes.to && new Date(attributes.to),
      tech: attributes.tech || [],
      key,
      html: data.html
    })
  }

  items.sort((a, b) => {
    let an = Number(a.to || FUTURE)
    let bn = Number(b.to || FUTURE)

    if (an === bn) {
      an = Number(a.from || 0)
      bn = Number(b.from || 0)
    }

    return bn - an
  })

  return items
}
