<template lang="pug">
v-flex(xs12 sm8 md5)

  //- Login card
  v-card(v-if="!isLoggedIn")
    v-card-title
      .headline Login
    v-card-text
      v-form(
        v-model="form"
        ref="form"
      )
        v-text-field(
          v-model="username"
          label="Username"
          autofocus
          prepend-icon="mdi-account-circle"
        )
        v-text-field(
          v-model="password"
          label="Password"
          type="password"
          prepend-icon="mdi-key"
        )
        v-btn(
          :disabled="!form"
          :loading="loading"
          color="primary"
          @click="login"
          prominent depressed
        ) Login
        v-alert(
          :value="isError"
          type="warning"
          dismissible
        ) Username/password incorrect

  //- Logout card
  v-card(v-if="isLoggedIn")
    v-card-title
      .headline Logout
    v-card-text
      v-btn(
        color="primary"
        @click="logout"
        prominent depressed
      ) Logout
</template>

<script>
// Import Vuex helpers
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    form: false,
    username: undefined,
    password: undefined,
    loading: false,
    isError: false
  }),
  computed: mapGetters('Cognito', ['isLoggedIn']),
  methods: {
    async login () {
      // Implement me!
    },
    async logout () {
      // Implement me!
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
