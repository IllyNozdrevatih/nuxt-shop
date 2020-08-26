<template>
  <v-facebook-login @login="login" app-id="777628779658255"></v-facebook-login>
</template>

<script>
  import VFacebookLogin from 'vue-facebook-login-component'

  export default {
    components: {
      VFacebookLogin
    },
    methods: {
        login(res) {
            console.log('login', res);
        }
    }
  }
</script>