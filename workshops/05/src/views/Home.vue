<template lang="pug">
v-container(fluid fill-height)
  v-layout(align-center justify-center)
    v-flex(xs12 sm8 md5)
      login
</template>

<script>
import authGuard from '@/mixins/authGuard'
import Login from '@/components/Login'

export default {
  name: 'Home',
  mixins: [ authGuard ],
  components: { Login }
}
</script>
