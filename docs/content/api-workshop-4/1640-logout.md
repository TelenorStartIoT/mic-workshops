---
title: Logout
url: api-workshop-4/logout/
weight: 1640
menu:
  api:
    parent: "Workshop 4: Vue.js"
    identifier: Logout
---

We've now added login functionality to our Login component and we'll continue to implement the `logout()` method.

To do this we need the `signOut()` action from the Cognito Vuex Module. We'll utilize the [mapActions](https://vuex.vuejs.org/api/#mapactions) Vuex helper again to inject the required action into our Login-component:

Open the Login component in `src/components/Login.vue`.

```javascript
methods: {
  ...mapActions('Cognito', ['signInUser', 'signOut']), // Add 'signOut' from Cognito module into our component
  async logout () {
    // Implement me!
  }
}
```

Next, call the method in `logout()`:

```javascript
methods: {
  ...mapActions('Cognito', ['signInUser', 'signOut']), // Add 'signOut' from Cognito module into our component
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
```

## Run the Web App Locally

In the previous page we started a local development server with hot reloading enabled. This means that while you keep the server up and running, updates will reflect on the server and there's no need to rebuild the project.

If you've implemented `logout()` correcly you should now be able to click the "logout" button on http://localhost:8080/.
