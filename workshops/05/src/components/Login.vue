<template lang="pug">
v-card
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
        @keydown.enter="login"
      )
      v-btn(
        :disabled="!form"
        :loading="isLoading"
        color="primary"
        @click="login"
        prominent depressed
      ) Login
      v-alert(
        :value="isError"
        type="warning"
        dismissible
      ) Username/password incorrect
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
  computed: mapGetters('App', ['isLoading']),
  methods: {
    ...mapActions('App', ['setIsLoading', 'setSnackbar']),
    ...mapActions('Cognito', ['signInUser']),
    async login () {
      this.setIsLoading(true)
      try {
        await this.signInUser({
          username: this.username,
          password: this.password
        })
        this.setSnackbar({
          type: 'success',
          msg: `Successfully signed in user ${this.username}`
        })
        this.$router.push('/dashboard')
      } catch (e) {
        this.setSnackbar({
          type: 'error',
          msg: 'Failed to login'
        })
      } finally {
        this.setIsLoading(false)
      }
    }
  }
}
</script>
