export default {
  actions: {
    async fetchRepos(ctx, limitRepo) {

      const res = await fetch("https://api.github.com/users/fellsia2019/repos")
      if (res.ok) {
        const reposAll = await res.json()
        reposAll.length = limitRepo
        var repos = reposAll
        var error = res.ok
        ctx.commit('errorFetch', error)
        ctx.commit('updateRepos', repos)
      } else {
        var error = res.ok
        ctx.commit('errorFetch', error)
      }
    }
  },
  mutations: {
    updateRepos(state, repos) {
      state.repos = repos
    },
    errorFetch(state, error) {
      state.error = error
    }
  },
  state: {
    repos: [],
    error: true
  },
  getters: {
    allRepos(state) {
      return state.repos
    },
    reposCount(state) {
      return state.repos.length
    },
    errorFetchCode(state) {
      return state.error
    }
  }
}