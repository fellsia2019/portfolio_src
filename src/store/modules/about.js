import axios from 'axios'
export default {
  actions: {
    axiosAbout(ctx, limitAbout) {
      axios
        .get("http://my-json-server.typicode.com/fellsia2019/dbPorfolio/about")
          .then(res => {
            return res.data
          })
          .then(data => {
            var about = data
            var error = true
            about.length = limitAbout
            ctx.commit('errorAbout', error)
            ctx.commit('updateAbout', about)
          })
          .catch(err => {
            var error = false
            ctx.commit('errorAbout', error)
            console.log(err)
          })
    }
  },
  mutations: {
    updateAbout(state, about) {
      state.about = about
    },
    errorAbout(state, error) {
      state.error = error
    }
  },
  state: {
    about: [],
    error: true
  },
  getters: {
    allPostsAbout(state) {
      return state.about
    },
    postsAboutCount(state) {
      return state.about.lenght
    },
    errorAboutCode(state) {
      return state.error
    }
  }
}