import { getAccessorType } from "nuxt-typed-vuex"

export interface ExperienceItem {
  description: string
  from?: Date
  to: Date
  title: string
  vendor: string
}

export interface ExperienceState {
  items: ExperienceItem[]
}

export const state = (): ExperienceState => ({
  items: [
    {
      description: '',
      from: new Date('2018-10-01'),
      to: new Date('2019-12-31'),
      title: '3D Machining Visualization',
      vendor: 'IPS s.r.o.'
    }, {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus odio lorem, in porta elit finibus id. Phasellus tincidunt ipsum eu venenatis sagittis. Suspendisse in felis tincidunt, elementum elit ac, sollicitudin turpis. Donec sit amet turpis sapien. Donec nec odio turpis. Nunc faucibus, enim eget ornare lacinia, mi nisl porttitor nibh, ut tristique orci urna ac magna. Aliquam imperdiet, tortor a molestie vulputate, est lacus tincidunt lectus, eget iaculis eros leo sed magna. Maecenas cursus sem vitae viverra luctus.',
      from: new Date('2016-04-01'),
      to: new Date('2019-12-31'),
      title: 'Industrial Internet of Things',
      vendor: 'IPS s.r.o.'
    }, {
      description: 'I designed and implemented a single page application for  employee shift scheduling.',
      from: new Date('2015-07-01'),
      to: new Date('2016-01-31'),
      title: 'uTop',
      vendor: 'Principal Engineering s.r.o.'
    }, {
      description: 'Implemented a background job that assigned tasks to users, either periodically or based on RSS feed items. Linked webpages were printed to PDF and attached to the task item and a custom workflow was started to track progress of the task.',
      to: new Date('2015-06-01'),
      title: 'Study Interactive',
      vendor: 'Principal Engineering s.r.o.'
    }
  ]
})

export const accessorType = getAccessorType({
  state
})
