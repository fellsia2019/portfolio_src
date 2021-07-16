import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import repo from './modules/repos'
import about from './modules/about'
import intro from './modules/intro'
import features from './modules/features'
import addPost from './modules/addPost'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    repo,
    about,
    intro,
    features,
    addPost,
  },
})
