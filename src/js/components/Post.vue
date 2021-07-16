<template>
  <section class="content-block">
    <div class="container">
      <h2>{{postsCount}}</h2>
      <post-form></post-form>
      <div class="pagging">
        <button>Start << </button>
        <button>Prev < </button>

        <!-- pagging-count -->
        <p></p>

        <button>Next > </button>
        <button>Last >> </button>
      </div>
      <div class="posts-list">
        <div class="post-item" v-for="(post, index) in allPosts" :key="post.id">
          <span class="x" @click="allPosts.splice(index, 1)">X</span>
          <h3>{{post.title}}</h3>
          <p>{{post.body}}</p>
        </div>
      </div>
      <div class="post-more">
        <button @click="loadMore">More Posts</button>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
import postForm from '../components/PostForm.vue'
export default {
  data() {
    return {
      limit: 3
    }
  },
  computed: mapGetters(['allPosts', 'postsCount']),
  methods: {
    loadMore() {
      this.limit = this.$store.getters.postsCount + 3;
      console.log(this.$store.dispatch('fetchPosts', this.limit))
    },
    ...mapActions(['fetchPosts']),
  },
  async mounted() {
    this.fetchPosts(this.limit)
    console.log(this.limit)
  },
  component: { postForm }
}
</script>
<style lang="scss" scoped>
.post-more{
  margin: 30px 0;
  button{
    padding: 10px;
    background-color: rgb(155, 95, 224);
    color:#fff;
    cursor: pointer;
    transition: all 0.5s ease;
    border-radius: 20px;
    width: 100%;
    &:hover{
      background-color: rgb(140, 23, 250);
    }
  }
}
.pagging{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  margin-left: -10px;
  width: calc(100% + 20px);
  button{
    margin: 10px;
    padding: 10px;
    background-color: rgb(155, 95, 224);
    color:#fff;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
      background-color: rgb(140, 23, 250);
    }
  }
  p {
    font-size: 16px;
  }
}

h2{
  margin: 0 0 30px 0;
  font-size: 50px;
}
.container {
  text-align: center;
}
img {
  max-width: 200px;
}
.wrapper-content{
  width: 400px;
  margin: 0 auto;
  text-align: center;
}
.posts-list{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.x{
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 50px;
  width: 50px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    transform: rotate(90deg);
  }
}
.post-item{
  position: relative;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0px 0px 17px 2px rgba(67,0,250,0.66);
  background-color: rgba(cornflowerblue, 0.15);
  margin-bottom: 20px;
  padding: 15px;
  padding-top: 60px;

  h3{
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p{
    font-size: 20px;
  }
}
</style>
