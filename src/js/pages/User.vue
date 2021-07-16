<template>
  <section class="entry bg-dark">
    <div class="entry-wrapper">
      <div class="entry-wrapper__header">
        <h1 class="title-main color-default">
          Вход в админку
        </h1>
        <router-link
          title="На главную"
          to="/"
          class="btn btn-sm btn-white"
        >
          На главную
        </router-link>
      </div>
      <form 
        class="entry-form"
        
        @submit.prevent="submit">
        <div class="entry-field">
          <label for="name" class="label text color-default">
            Введите Имя
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="input input--white color-default"
            placeholder="Имя"
            v-model.trim="$v.form.name.$model"
            autocomplete="userName"
          >
          <span class="error-form color-primary" v-if="!$v.form.name.required">
            Это поле обязательное для заполнения!
          </span>
          <span class="error-form color-main" v-if="!$v.form.name.minLength">
            Минимальное количество символов: {{$v.form.name.$params.minLength.min}}
          </span>
        </div>
        <div class="entry-field">
          <label 
            for="password"
            class="label text color-default"
            
          >
            Введите пароль
          </label>
          <input
            type="password"
            name="password"
            id="password"
            class="input input--white color-default"
            placeholder="Пароль"
            v-model.trim="$v.form.password.$model"
            autocomplete="current-password"
          >
          <span class="error-form color-primary" v-if="!$v.form.password.required">
            Это поле обязательное для заполнения!
          </span>
           <span class="error-form color-main" v-if="!$v.form.password.minLength">
            Минимальное количество символов: {{$v.form.password.$params.minLength.min}}
          </span>
        </div>
        <div class="entry-field">
          <router-link
            type="submit"
            class="btn btn-white btn-100"
            :class="{'disabled': $v.form.name.$error || $v.form.password.$error || form.name == '' || form.password == ''}"
            to="adminPage"
          >
            Войти
          </router-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
        submitStatus: null
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4)
      },
      password: {
        required,
        minLength: minLength(6)
      },
     
    }
  },
  
}
</script>
