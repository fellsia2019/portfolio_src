<template>
  <div class="wrapper-main">
    <header class="header" :class="{'header--fixed' : stikyHeader}">
      <div class="container">
        <div class="header-main">
          <router-link :to="links[0].url" class="header-logo logo">
           MushketCO
          </router-link>
          <nav class="navbar">
            <button type="button" class="header-burger" data-js="header-burger">
              <span class="header-burger__span"></span>
            </button>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link
                  class="navbar-link link"
                  :title="link.title"
                  :to="link.url"
                >
                  {{ link.title }}
                </router-link>
              </li>
            </ul>
            <div class="navbar-login" v-for="(entry, index) in this.$router.options.routes" :key="index" v-if="entry.name === 'user'">
              <router-link :to="entry.path" class="btn btn-main btn-sm" v-if="entry.name === 'user'">
                Войти
              </router-link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  data () {
    return {
      links: [
        { title: 'Главная', url: '/' },
        { title: 'Проекты', url: '/projects' },
        { title: 'Фильтры Vue', url: '/test-vue' },

      ],
      stikyHeader: false
    }
  },
  methods: {
    headerFixed () {
      if (window.scrollY > 10) {
        this.stikyHeader = true
      } else {
        this.stikyHeader = false
      }
    },
  },
  created () {
    window.addEventListener('scroll', this.headerFixed);
  },
  destroyed () {
    window.removeEventListener('scroll', this.headerFixed);
  }
}
</script>

<style lang="scss" scrope>

</style>