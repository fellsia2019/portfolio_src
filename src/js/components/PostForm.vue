<template>
  <form>
    <input type="text" placeholder="title" v-model="title" @input="validComputed">
    <input type="text" placeholder="body" v-model="body" @input="validComputed">
    <button type="submit" :class="{disabled : subDis}" @click.prevent="submit">Create Post</button>
  </form>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: "post-component",
  data() {
    return {
      title: '',
      body: '',
      subDis: true
    }
  },
  computed: {

  },
  methods: {
    validComputed (){
      if (this.title === null || this.body === null || this.title === '' || this.body === '') {
        // console.log("null " + this.title + " " + this.body)
        this.subDis = true
      } else {
        // console.log("ok " + this.title + " " + this.body)
        this.subDis = false
      }
    },
    ...mapMutations(['createPosts']),
    submit() {
      this.createPosts({
        title: this.title,
        body: this.body,
        id: Date.now()
      })
      this.title = this.body = "";
      this.subDis = true
    },
  }
}
</script>
<style lang="scss" scoped>
  input{
    width: 100%;
    border: 1px solid rgb(175, 26, 235);
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    border-radius: 30px;
  }
  button{
    width: 100%;
    background-color: rgb(175, 26, 235);
    border-radius: 30px;
    height: 36px;
    color:#fff;
    &.disabled{
      opacity: 0.5;
      pointer-events: none;
    }
  }
  form{
    margin-bottom: 30px;
  }
</style>