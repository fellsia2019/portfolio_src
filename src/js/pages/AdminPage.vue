<template>
  <main class="wrapper-admin">
    <!-- <aside class="admin-panel">
      <ul class="edit-page" >
        <li
          v-for="tab in tabs"
          :key="tab.id"
          :class="{'edit-page__item--active': active(tab.id)}"
          @click="changeTab(tab.id)"
          class="edit-page__item color-default"
        >
          {{tab.name}}
        </li>
         
      </ul>
    </aside> -->
    <section class="block-content">
      <h1 class="title-page text-center color-main">
        Admin
      </h1>
      <div 
        class="admin-body"
        v-for="tab in tabs"
        :class="[active(tab.id), 'tab-content']" :key="tab.id"
          v-if="active(tab.id)"
      >
        <div class="admin-body__item">
          <h2 class="admin-body__item title-main color-main text-center">
            Неомного о моих инструментах
          </h2>
          <form class="admin-form">
            <div class="admin-form__field">
              <label for="field__01" class="label">
                Заголовок поста
              </label>
              <input
                type="text"
                name="field__01"
                id="field__01"
                class="input box-shadow-dark"
                v-model="post.title"
              >
            </div>
            <div class="admin-form__field">
              <label for="field__02" class="label" title="Сюда нужно прокинуть путь https://">
                Ридерект по клику на Заголовок поста
              </label>
              <input 
                type="text"
                name="field__02"
                id="field__02"
                class="input box-shadow-dark"
                v-model="post.url"
              >
            </div>
            <div class="admin-form__field">
              <label for="field__03" class="label" title="Сюда нужно прокинуть путь https://">
                Ссылка на превью IMG
              </label>
              <input 
                type="text"
                name="field__03"
                id="field__03"
                class="input box-shadow-dark"
                v-model="post.img"
              >
            </div>
            <div class="admin-form__field">
              <label for="field-textarea__01" class="label">
                Текст поста
              </label>
              <textarea
                name="field-textarea__01"
                id="field-textarea__01"
                class="textarea box-shadow-dark"
                v-model="post.text"
              ></textarea>
            </div>
            <div class="admin-form__field">
              <button
                class="btn btn-md btn-main"
                @click.prevent="onSubmit"
              >
                Добавить пост
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default{
  data() {
    return {
      post: {
        title: '',
        url: '',
        text: '',
        img: '',
      },
      currentTabId:1,
      nextTabId:4,
      tabs: [
        {
          id: 1,
          name: 'Главная страница'
        },
        {
          id: 2,
          name: 'Репозиторий'
        },
        {
          id: 3,
          name: 'Тест'
        },
      ]
    }
  },
  computed: {
    active() {
      return (id) => id === this.currentTabId && "active";
    },
  },
  methods: {
    changeTab(id) {
      this.currentTabId = id
    },
    onSubmit() {
      this.$store.dispatch('addPost', this.post)
        .then(() => {
          console.log('Done!')
          this.$router.push('/')
        })
    },
  }

}
</script>
