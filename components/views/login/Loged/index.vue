<template>
    <div class="login__login">
        <b-field label="Email" type="is-danger" message="This email is invalid">
            <b-input v-model="email" type="email" maxlength="30"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input v-model="password" type="password" password-reveal></b-input>
        </b-field>
        <button class="button is-primary" @click="create">Sign up</button>
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
                email: this.email,
                password: this.password
            }
        }
    },
    methods: {
        async create(){
            try {
                this.$nuxt.$loading.start()
                const res =  await this.$store.dispatch('users/create', this.user)
                console.log('res', res);
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