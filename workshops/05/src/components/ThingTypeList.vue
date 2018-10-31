<template lang="pug">
v-flex(xs12 sm6)
  v-list
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ThingTypeList',
  methods: mapActions('App', ['getThingTypes']),
  mounted () {
    this.getThingTypes()
  }
}
</script>
