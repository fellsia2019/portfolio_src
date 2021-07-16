// JS
import './js/'
import App from './App'
// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Routes
import router from './routes'
// Store
import store from './store'

// Libs
// import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// Vue components (for use in html)
Vue.component('post-component', require('./js/components/Post.vue').default)
Vue.component('post-form', require('./js/components/PostForm.vue').default)
Vue.component('header-router', require('./js/components/UI/Header-router.vue').default)
Vue.component('svg-inline', require('./js/components/svgInline.vue').default)
Vue.component('filter-ns', require('./js/components/Test.vue').default)
Vue.component('filter-hs', require('./js/components/Test2.vue').default)
Vue.component('repos', require('./js/components/Repos.vue').default)


// Vue init
const app = new Vue({
  store,
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
