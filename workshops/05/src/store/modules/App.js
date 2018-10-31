import * as _ from 'lodash'
import * as t from '@/store/types'

const set = property => (store, payload) => (store[property] = payload)

const state = {
  isReady: false,
  isLoading: false,
  snackbar: {},
  drawer: false
}

const mutations = {
  [t.APP_SET_IS_READY]: set('isReady'),
  [t.APP_SET_IS_LOADING]: set('isLoading'),
  [t.APP_SET_SNACKBAR] (state, payload) {
    state.snackbar = _.clone(payload)
  }
}

const actions = {
  setIsReady ({ commit }, payload) {
    commit(t.APP_SET_IS_READY, payload)
  },
  setIsLoading ({ commit }, payload) {
    commit(t.APP_SET_IS_LOADING, payload)
  },
  setSnackbar ({ commit }, payload) {
    commit(t.APP_SET_SNACKBAR, payload)
  },
  async getThingTypes ({ commit }) {
    commit(t.APP_SET_IS_LOADING, true)

    try {
      // TODO: API call
    } catch (e) {
      console.error(e)
    } finally {
      commit(t.APP_SET_IS_LOADING, false)
    }
  }
}

const getters = {
  isReady (state) {
    return state.isReady
  },
  isLoading (state) {
    return state.isLoading
  },
  snackbar (state) {
    return state.snackbar
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
