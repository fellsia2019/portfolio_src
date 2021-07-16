<template>
  <section class="content-block">
    <div class="container">
      <div class="about">
        <div class="about-header outbox-border mb-30">
          <h2 class="about-header__title title-main color-primary outbox-border__item">
            Обо мне
          </h2>
        </div>
        <div class="about-error" v-if="!this.$store.getters.errorAboutCode">
          <h2 class="error-api color-main text-center title-h2">
            Упс, произошла ошибка!
          </h2>
        </div>
        <div class="about-body" v-else>
          <div class="flex-rov">
            <div 
              class="flex-col-33"
              v-for="(post, index) in allPostsAbout"
              :key="post.id"
            >
              <h3 class="title-h3 color-primary">
                {{post.title}}
              </h3>
              <p class="text">
                {{post.text}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      limitAbout: 3
    }
  },
  computed: {
    ...mapGetters(['allPostsAbout', 'postsAboutCount'])
  },
  methods: {
    ...mapActions(['axiosAbout']),
    ...mapMutations(['errorAbout'])
  },
  async mounted() {
    this.axiosAbout(this.limitAbout)
  }
}
</script>
