<template lang="pug">
v-app
  snackbar
  v-content
    router-view(v-if="isReady")
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Snackbar from '@/components/Snackbar'

export default {
  name: 'App',
  components: { Snackbar },
  computed: mapGetters('App', ['isReady']),
  methods: mapActions('App', ['setIsReady', 'setSnackbar']),
  async mounted () {
    try {
      await this.$store.dispatch('Cognito/fetchSession')
    } catch (e) {
      // Silent
    } finally {
      this.setIsReady(true)
      this.setSnackbar({ msg: 'App inited' })
    }
  }
}
</script>
