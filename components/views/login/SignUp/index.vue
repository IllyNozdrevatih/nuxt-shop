<template>
    <div class="login__sign-up">
        <b-field label="Email" type="is-danger" message="This email is invalid">
            <b-input type="email" maxlength="30"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input type="password" password-reveal></b-input>
        </b-field>
        <button 
        @click="handleClickSignIn">Google</button>
    </div>
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
        async handleClickSignIn() {
            try {
                this.$nuxt.$loading.start()
                const googleUser = await this.$gAuth.signIn();
                if (!googleUser) {
                return null;
                }
                // console.log("googleUser", googleUser);
                // console.log("getId", googleUser.getId());
                console.log("getBasicProfile", googleUser.getBasicProfile().$t);
                // console.log("getAuthResponse", googleUser.getAuthResponse());
                // console.log(
                // "getAuthResponse",
                // this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
                // );
                this.isSignIn = this.$gAuth.isAuthorized;

                
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