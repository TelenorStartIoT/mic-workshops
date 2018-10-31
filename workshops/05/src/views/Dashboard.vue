<template lang="pug">
v-container(fluid fill-height)
  v-layout(align-center justify-center)
    thing-type-list
</template>

<script>
import unauthGuard from '@/mixins/unauthGuard'
import ThingTypeList from '@/components/ThingTypeList'

export default {
  name: 'Dashboard',
  mixins: [ unauthGuard ],
  components: {
    ThingTypeList
  }
}
</script>
