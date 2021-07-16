import axios from 'axios'
export default {
  actions: {
    axiosIntro(ctx) {
      axios
        .get("http://my-json-server.typicode.com/fellsia2019/dbPorfolio/gallery")
          .then(res => {
            return res.data
          })
          .then(data => {
            var int = data
            var error = true
            ctx.commit('errorIntro', error)
            ctx.commit('updateIntro', int)
          })
          .catch(err => {
            var error = false
            ctx.commit('errorIntro', error)
          })
    }
  },
  mutations: {
    updateIntro(state, int) {
      state.int = int
    },
    errorIntro(state, error) {
      state.error = error
    }
  },
  state: {
    int: [],
    error: true
  },
  getters: {
    allPostsIntro(state) {
      return state.int
    },
    postIntroCount(state) {
      return state.int.length
    },
    errorIntroCode(state) {
      return state.error
    }
  }
}