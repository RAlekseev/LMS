<template>
  <q-card
    class="login-form"
    v-bind:style="$q.platform.is.mobile ? { width: '80%' } : { width: '30%' }">
    <q-card-section>
      <q-avatar
        size="74px"
        class="absolute"
        style="top: 0;right: 25px;transform: translateY(-50%); background-color: #006432">
        <img src="/statics/images/white_logo.png"/>
      </q-avatar>
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          Авторизация
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-form class="q-gutter-md" @keyup.enter="sendForm">

        <q-input filled v-model="form.login" label="Login" lazy-rules/>

        <q-input
          type="password"
          filled
          v-model="form.password"
          label="Пароль"
          lazy-rules/>

        <div class="row">
          <q-checkbox v-model="form.stay" label="Запомнить меня"/>
          <router-link to="/" class="forgot text">Забыли пароль?</router-link>
        </div>

        <div>
          <q-btn
            label="Войти"
            type="button"
            color="primary"
            style="width: 100%"
            @click="sendForm"/>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
  export default {
    name: 'Login',
    metaInfo: {
      title: 'Авторизация'
    },
    data() {
      return {
        form: {
          login: null,
          password: null,
          stay: false,
        }
      }
    },
    methods: {
      sendForm() {
        this.$store.dispatch('login', this.form)
          .then(() => {this.$router.push(this.$router.currentRoute.query?.redirect || '/');});
      }
    }
  }
</script>

<style scoped>
  @media screen and (min-width: 600px) {
    div.col.text-h6 {
      text-align: center;
    }
  }

  .forgot {
    margin: auto 0 auto auto;
    text-decoration: none;
    font-weight: bold;
  }
</style>

