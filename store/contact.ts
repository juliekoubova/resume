import { getAccessorType } from 'nuxt-typed-vuex'
export interface ContactItem {
  href: string
  icon: string
  iconTransform?: string
  text: string
}

export interface ContactState {
  items: ContactItem[]
}

export const state = (): ContactState => ({
  items: [
    {
      href: 'mailto:julie@koubova.net',
      icon: 'paper-plane',
      text: 'julie@koubova.net'
    }, {
      href: 'tel:+420724557212',
      icon: 'mobile-alt',
      text: '+420 724 557 212'
    }
  ]
})

export const accessorType = getAccessorType({
  state
})
