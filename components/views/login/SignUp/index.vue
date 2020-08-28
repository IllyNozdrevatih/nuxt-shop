<template>
    <div class="login__sign-up">
        <b-field label="Email" >
            <b-input  v-model="email" type="email" ></b-input>
        </b-field>
        <b-field label="Password">
            <b-input v-model="password" type="password" minlength="8" password-reveal></b-input>
        </b-field>
        <button class="button is-primary" @click="login" >Log in</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
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
    }
}
</script>