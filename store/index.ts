import { getAccessorType, mutationTree, actionTree } from 'nuxt-typed-vuex'
import * as contact from './contact'
import * as experience from './experience'

export const state = () => ({
  isDev: false
})

export const mutations = mutationTree(state, {
  setIsDev(state, isDev) {
    state.isDev = isDev
  }
})

export const actions = actionTree({ state, mutations }, {
  nuxtServerInit(_, { isDev }: { isDev: boolean }) {
    this.app.$accessor.setIsDev(isDev)
  }
})

export const accessorType = getAccessorType({
  actions,
  modules: {
    contact,
    experience
  },
  mutations,
  state
})
