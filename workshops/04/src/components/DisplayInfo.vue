<template lang="pug">
v-flex(xs12)
  v-card
    v-card-title
      .headline User State
    v-card-text
      v-list(two-line)

        //- Foo
        v-list-tile
          v-list-tile-content
            v-list-tile-title User logged in
            v-list-tile-sub-title {{ isLoggedIn }}
        //- Username
        v-list-tile
          v-list-tile-content
            v-list-tile-title Username
            v-list-tile-sub-title {{ user.username }}
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'DisplayInfo',
  computed: {
    ...mapGetters('Cognito', ['isLoggedIn']),
    ...mapState('Cognito', ['user']),
  }
}
</script>

<style lang="stylus" scoped>
</style>
