export default {
    actions: {
      async fetchPosts(ctx, limit) {
        // limit = this.$store.state.post.limit;
        console.log(limit + " fetch")
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=" + limit);
        const posts = await res.json();
        // this.posts = posts;

        ctx.commit('updatePosts', posts)
      }
    },
    mutations: {
      updatePosts(state, posts) {
        state.posts = posts
      },
      createPosts(state, newPost) {
        state.posts.unshift(newPost)
      }
      // loadMoreMutation(state) {
      //   state.limit += 3;
      //   console.log(state.limit)
      // }
    },
    state: {
      posts: [],
      mewCountLimit: ''
    },
    getters: {
      allPosts(state) {
        return state.posts
      },
      postsCount(state) {
        return state.posts.length
      }
    }
  }