---
title: Create a Login Form
url: api-workshop-4/create-a-login-form/
weight: 1630
menu:
  api:
    parent: "Workshop 4: Vue.js"
    identifier: Create a Login Form
---

With the Cognito Vuex Module in place, let's continue with creating a login form.

Open the Login component in `src/components/Login.vue`.

{{< note title="Vue.js Single File Component" >}}
A Vue.js [Single File Component (SFC)](https://vuejs.org/v2/guide/single-file-components.html) is a **.vue** file which usually contains a **template**, **script** and a **style** section. Only the template is required.
{{< /note >}}

There's already a `template` and a `script` section setup. We'll continue on the `script` section.

```javascript
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
```

We'll start to implement the `login()` method. To do this we need the `signInUser()` action from the Cognito Vuex Module. We'll utilize the [mapActions](https://vuex.vuejs.org/api/#mapactions) Vuex helper to inject the required action into our Login-component:

```javascript
methods: {
  ...mapActions('Cognito', ['signInUser']), // Inject 'signInUser' from Cognito module into our component
  async login () {
    // Implement me!
  },
  async logout () {
    // Implement me!
  }
}
```

Next, call the method in `login()`:

```javascript
methods: {
  ...mapActions('Cognito', ['signInUser']), // Inject 'signInUser' from Cognito module into our component
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
  }
}
```

## Run the Web App Locally

To run our little Vue.js web app we'll start a local development server with [hot reloading](https://vue-loader.vuejs.org/guide/hot-reload.html) enabled. This is included in the Vue CLI.

Run the following command in the root of Workshop 4, `mic-workshops/workshops/04`:

```sh
npm run serve
```

If all went well you should see a `DONE  Compiled successfully` message in your terminal and be able to access the web app from http://localhost:8080/.

![Vue.js login form](/images/workshop-4-00-webapp.png "Vue.js login form")

Try logging in with your MIC user and see if the user state changes.

Next we'll implement the `logout()` method.
