<template>
  <section class="content-block mt-0">
    <div class="intro">
      <div class="intro-info">
        <h1 class="intro-info__title title-page color-main text-center m-0">
          Welcome to the my Portfolio!
        </h1>
      </div>
      <slick-carousel v-if="postIntroCount" :arrows="true" :dots="true" class="slick-intro">
        <div
          v-for="(img, index) in allPostsIntro"
          :key="index"
          v-bind:style='{ backgroundImage: "url(" + img.url + ")", }'
          class="slick-intro__item"
        >
          <!-- <img :src="img.url" :alt="img.id"> -->
        </div>
        <!-- <div>22</div> -->
      </slick-carousel>
    </div>
  </section>
</template>
<script>
import slickCarousel from 'vue-slick-carousel'
import {mapActions, mapGetters, mapMutations} from 'vuex'
import axios from 'axios'
export default {
  
  components: {slickCarousel},
  computed:{
    ...mapGetters(['allPostsIntro', 'postIntroCount'])
  },
  methods: {
    ...mapActions(['axiosIntro']),
    ...mapMutations(['errorIntro']),
  },
  async mounted() {
    this.axiosIntro()
  },
  beforeUpdate() {
    if (this.$refs.slick) {
      this.$refs.slick.destroy();
    }
    // this.axiosIntro()

  },
  updated() {
    this.$nextTick(function () {
      if (this.$refs.slick) {
        this.$refs.slick.create(this.slickOptions);
      }
    });
  },
}
</script>
<style lang="scss" scoped>
  .intro-info{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>