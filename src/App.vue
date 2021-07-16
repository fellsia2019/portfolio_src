<template>
  <div id="app">
    <main class="wrapper" :class="{'bg-dark' : headerShow}">
      <header-router v-if="!headerShow"/>
      <router-view/>
      <footerContent v-if="!headerShow"/>
    </main>
  </div>
</template>
<script>
import HeaderRouter from './js/components/UI/Header-router.vue'
import FooterContent from './js/components/UI/FooterContent.vue'

export default {
  name: 'App',
  components: {
    HeaderRouter,
    FooterContent
  },
  computed: {
    headerShow() {
      return this.$route.meta.headerHide
    }
  }
}
</script>

