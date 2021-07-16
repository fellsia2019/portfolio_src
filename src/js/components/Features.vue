<template>
  <section class="block-content">
    <div class="container">
      <div class="features">
        <div class="features-header outbox-border mb-30">
          <h2 class="features-header__title title-main color-primary outbox-border__item">
            Неомного о моих инструментах
          </h2>
        </div>
        <div class="cards" >
          <div 
            class="card box-shadow-dark" 
            v-for="(post, index) in allPostsFeature" 
            :key="post.id"
            v-if="post.title != null"
            >
            <div class="card-img">
              <div class="card-img__bg"
              :style='{ backgroundImage: "url(" + post.img + ")", }'
              ></div>
            </div>
            <div class="card-info">
              <h3 class="card-info__title title-h3 color-primary">
                <a
                  :href="post.url"
                  class="link"
                  target="_blank">{{post.title}}</a>
              </h3>
              <p class="card-txt text">
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
import {mapActions, mapMutations, mapGetters} from 'vuex'
export default {
  data() {
    return {
      limitFeatures: 1,
    }
  },
  computed: {
    ...mapGetters(['allPostsFeature', 'postsFeatureCount'])
  },
  methods: {
    ...mapActions(['axiosFeature']),
    ...mapMutations(['errorFeature'])
  },
  async mounted() {
    this.axiosFeature(this.limitFeatures)
  }
}
</script>