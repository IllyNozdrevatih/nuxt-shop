<template>
    <div class="login__sign-up">
        <b-field label="Email" type="is-danger" message="This email is invalid">
            <b-input  v-model="email" type="email" maxlength="30"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input v-model="password" type="password" password-reveal></b-input>
        </b-field>
        <button class="button is-primary" @click="login">Log in</button>
        <!-- <button @click="handleClickSignIn">Google</button> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        user() {
            return {                
                username: this.email,
                password: this.password
            }
        }
    },
    methods: {
        async login(){
            try {
                this.$nuxt.$loading.start()
                this.$store.commit('setAuth', true)

                const res =  await this.$auth.loginWith('local', {
                    data: this.user
                })
                this.$nuxt.$loading.finish()
                if(res) this.$router.push('cabinet')
            } catch (e){
                this.$nuxt.$loading.finish()
                console.log(e);
            }
        },
        // async handleClickUpdateScope() {
        //     const option = new window.gapi.auth2.SigninOptionsBuilder();
        //     option.setScope("email https://www.googleapis.com/auth/drive.file");
        //     const googleUser = this.$gAuth.GoogleAuth.currentUser.get();
        //     try {
        //         await googleUser.grant(option);
        //         console.log("success");
        //     } catch (error) {
        //         console.error(error);
        //     }
        // },
        //     handleClickLogin() {
        //     this.$gAuth
        //         .getAuthCode()
        //         .then((authCode) => {
        //         //on success
        //         console.log("authCode", authCode);
        //         })
        //         .catch((error) => {
        //         //on fail do something
        //         });
        // },
        // async handleClickSignIn({store}) {
        //     try {
        //         this.$nuxt.$loading.start()
        //         const googleUser = await this.$gAuth.signIn();
        //         if (!googleUser) {
        //             return null;
        //         }
        //         // console.log("googleUser", googleUser);
        //         // console.log("getId", googleUser.getId());
        //         const obj = {
        //             email: googleUser.getBasicProfile().$t
        //         } 
        //         // console.log("getBasicProfile", googleUser.getBasicProfile().$t);
                 
        //         await this.$store.dispatch('users/create', obj)

        //         // console.log("getAuthResponse", googleUser.getAuthResponse());
        //         // console.log(
        //         // "getAuthResponse",
        //         // this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
        //         // );
        //         // this.isSignIn = this.$gAuth.isAuthorized;

                
        //         this.$nuxt.$loading.finish()
        //         this.$router.push('cabinet')
        //     } catch (error) {
        //         //on fail do something
        //         console.error(error);
        //         return null;
        //     }
        // },
    }
}
</script>