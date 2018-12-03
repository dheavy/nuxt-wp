import Vuex from 'vuex'
import wp from '~/lib/wp'

export const types = {
  SITE_DATA_UPDATE: 'SITE_DATA_UPDATE',
  POST_LIST_UPDATE: 'POST_LIST_UPDATE',
  AUTHORS_UPDATE: 'AUTHORS_UPDATE',
  CURRENT_POST_UPDATE: 'CURRENT_POST_UPDATE'
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      site: {},
      posts: [],
      authors: {},
      currentPost: {}
    },
    mutations: {
      [types.SITE_DATA_UPDATE] (state, payload) {
        state.site = {...payload}
      },

      [types.POST_LIST_UPDATE] (state, payload) {
        state.posts = [...payload]
      },

      [types.AUTHORS_UPDATE] (state, payload) {
        state.authors = {...payload}
      },

      [types.CURRENT_POST_UPDATE] (state, payload) {
        state.currentPost = {...payload}
      }
    },
    actions: {
      async nuxtServerInit ({commit}) {
        const {site} = await wp.site()
        commit(types.SITE_DATA_UPDATE, site)

        const {users} = await wp.authors()
        const authors = users.reduce((out, val) => {
          return {
            ...out,
            [val.id]: val
          }
        }, {})
        commit(types.AUTHORS_UPDATE, authors)

        return Promise.all([site, users])
      }
    }
  })
}

export default createStore
