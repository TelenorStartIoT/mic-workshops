<template lang="pug">
v-app
  v-content
    v-container(fill-height)
      v-layout(row wrap align-center justify-center)
        v-flex(xs12)
          .display-1
            v-icon.mr-3(x-large color="green") mdi-emoticon-cool
            | Awesome Vue.js Web App
        login
        display-info
</template>

<script>
import DisplayInfo from '@/components/DisplayInfo'
import Login from '@/components/Login'

export default {
  name: 'App',
  components: {
    DisplayInfo,
    Login
  },
  async mounted () {
    try {
      await this.$store.dispatch('Cognito/fetchSession')
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
