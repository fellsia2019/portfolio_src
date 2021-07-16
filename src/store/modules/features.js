import axios from 'axios'
export default {
  actions:{
    axiosFeature(ctx, limitFeatures) {
      axios
        .get("https://portfolio-f572a-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
          .then(res => {
            return res.data
          })
          .then(data => {
            var feature = data
            var error = true
            feature.length = limitFeatures
            console.log(feature)
            ctx.commit('errorFeature', error)
            ctx.commit('updateFeature', feature)
          })
          .catch(err => {
            var error = false
            ctx.commit('errorFeature', error)
          })
    },
    
  },
  mutations: {
    updateFeature(state, feature) {
      state.feature = feature
    },
    errorFeature(state, error) {
      state.error = error
    }
  },
  state: {
    feature: [],
    error: true
  },
  getters: {
    allPostsFeature(state) {
      return state.feature
    },
    postsFeatureCount(state) {
      return state.feature.length
    },
    errorFeatureCode(state) {
      return state.error
    }
  }
}