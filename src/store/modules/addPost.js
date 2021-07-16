import axios from 'axios'
export default{
  actions: {
    addPost({commit}, post) {
      axios
        .post('https://portfolio-f572a-default-rtdb.europe-west1.firebasedatabase.app/posts.json', post)
          .then(res => {
            post.id = res.data.name;
            commit('addPost', post)
          })
          .catch(err => {
            console.log(err)
          })
    }
  },
  mutations: {
    addPost(state, post) {
      state.postsLoaded.push(post)
    }
  },
  state: {
    postsLoaded: []
  },
  getters: {
    getPost (state) {
      return state.postsLoaded
    }
  }
}