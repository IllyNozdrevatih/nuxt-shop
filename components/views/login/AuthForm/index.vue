<template>
    <div class="login__login">
        <b-field label="Email" >
            <b-input v-model="email" type="email"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input v-model="password" type="password" minlength="8" password-reveal></b-input>
        </b-field>
        <b-button class="button is-primary" @click="sumbit" :disabled="!valid">
            <span v-if="$props.create">Sign up</span>
            <span v-if="!$props.create">Log in</span>            
        </b-button>
    </div>
</template>
<script>
export default {
    props: {
        create: Boolean
    },
    data() {
        return {
            email: '',
            password: '',
            regEmail: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            regPasswd: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/           
        }
    },
    computed: {
        user() {
            return {                
                username: this.email,
                password: this.password,
           }
        },
        valid(){
            return this.regEmail.test(this.email) && this.regPasswd.test(this.password)
        }
    },
    methods: {
        async sumbit(){
            try {
                this.$nuxt.$loading.start()
                
                if(this.$props.create) {
                    const res =  await this.$store.dispatch('users/create', this.user)           
                    // const res =  await this.$auth.loginWith('local', {
                    //     data: this.userLogin
                    // })
                    
                    this.$store.commit('setAuth', true)

                    this.$nuxt.$loading.finish()
                    if(res) this.$router.push('cabinet')
                } else {                    
                    const res =  await this.$auth.loginWith('local', {
                        data: this.userLogin
                    })
                    this.$store.dispatch('setAuth', true)
    
                    this.$nuxt.$loading.finish()
                    if(res) this.$router.push('cabinet')
                }

            } catch (e){
                this.$nuxt.$loading.finish()
                console.log(e);
            }
        },
    }
}
</script>