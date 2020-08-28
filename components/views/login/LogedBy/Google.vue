<template>
    <button @click="handleClickSignIn">Google</button>
</template>

<script>
export default {
    methods: {
        async handleClickUpdateScope() {
            const option = new window.gapi.auth2.SigninOptionsBuilder();
            option.setScope("email https://www.googleapis.com/auth/drive.file");
            const googleUser = this.$gAuth.GoogleAuth.currentUser.get();
            try {
                await googleUser.grant(option);
                console.log("success");
            } catch (error) {
                console.error(error);
            }
        },
        handleClickLogin() {
            this.$gAuth
                .getAuthCode()
                .then((authCode) => {
                //on success
                console.log("authCode", authCode);
                })
                .catch((error) => {
                //on fail do something
                });
        },
        async handleClickSignIn({store}) {
            try {
                this.$nuxt.$loading.start()
                this.$auth.loginWith('google')

                // const googleUser = await this.$gAuth.signIn();
                // if (!googleUser) {
                //     return null;
                // }
                
                // const obj = {
                //     email: googleUser.getBasicProfile().$t
                // } 
                 
                // const res = await this.$store.dispatch('users/create', obj)

                
                this.$nuxt.$loading.finish()
                this.$router.push('cabinet')
            } catch (error) {
                //on fail do something
                console.error(error);
                return null;
            }
        },
    }
}
</script>