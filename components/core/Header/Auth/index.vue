<template>
    <b-navbar-item tag="div">
        <div class="buttons">
            <template v-if="$store.getters.isAuthenticated">
                <button @click="logout" class="button is-primary">
                    <strong>Log out</strong>
                </button>
            </template>
            <template v-if="!$store.getters.isAuthenticated">
                <nuxt-link  to="/login" class="button is-primary">
                    <strong>Log in</strong>
                </nuxt-link>
            </template>
        </div>
    </b-navbar-item>
</template>
<script>
export default {
    methods: {
        async logout(){
            try {
                await this.$store.dispatch('users/logout')
                
                    this.$store.dispatch('setAuth', false)
                await this.$auth.logout()

                this.$router.push('/')
            } catch (e){
                console.log(e);
            }
        }
    }
}
</script>