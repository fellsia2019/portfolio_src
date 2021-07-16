<template>
  <section class="content-block">
    <div class="repos-error" v-if="!this.$store.getters.errorFetchCode">
      <h2 class="error-api color-main text-center title-h2">
        Упс, произошла ошибка!
      </h2>
    </div>
    <div class="repos" v-else>
      <h2 class="title-h2">{{reposCount}}</h2>
      <div class="repos-content">
        <div 
          class="repos__item box-shadow-dark"
          v-for="(repo, index) in allRepos"
          :key="repo.id"
        >
          <span class="detele-x" @click="allRepos.splice(index, 1)">X</span>
          <h3 class="repos__item-name title-h3">
            {{repo.name}}
          </h3>
          <a
            :href="repo.html_url"
            class="repos__item-link text link"
            target="_blank"
          >
            Перейти {{repo.html_url}}
          </a>
          <p class="repos__item-date color-secondary text">
            {{repo.created_at}}
          </p>
        </div>
      </div>
      <div class="repos__more">
      <button class="btn btn-main btn-md" @click="moreRepos">
        Загрузить ещё
      </button>
    </div>
    </div>
  </section>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      limitRepo: 3,
    }
  },
  computed: mapGetters(['allRepos', 'reposCount']),
  methods: {
    moreRepos() {
      this.limitRepo = this.$store.getters.reposCount + 3;
      console.log(this.$store.dispatch('fetchRepos', this.limitRepo))
    },
    ...mapActions(['fetchRepos']),
    ...mapMutations(['errorFetch'])
  },
  async mounted() {
    this.fetchRepos(this.limitRepo)
  }
}
</script>