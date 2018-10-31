---
title: Final Code
url: api-workshop-4/final-code/
weight: 1650
menu:
  api:
    parent: "Workshop 4: Vue.js"
    identifier: Vue.js Final Code
---

```javascript
// mic-workshops/workshops/04/src/components/Login.vue

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
    ...mapActions('Cognito', ['signInUser', 'signOut']),
    async login () {
      this.loading = true
      this.isError = false
      try {
        // Call 'signInUser' to login our user
        await this.signInUser({
          username: this.username,
          password: this.password
        })
      } catch (e) {
        this.isError = true
      } finally {
        this.loading = false
      }
    },
    async logout () {
      try {
        // Call 'signOut' to sign out our user
        await this.signOut()
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    }
  }
}
```
