<template>
  <section class="wrapper-content mt-0">
      <intro/>
      <about/>
      <features/>
  </section>
</template>
<script>
import intro from '@/components/Intro.vue'
import about from '@/components/About.vue'
import features from '@/components/Features.vue'

export default {
  components: { intro, about, features },
  
}
</script>
