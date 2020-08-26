<template>
    <b-navbar-item tag="div">
        <div class="buttons">
            <template v-if="$cookies.get('vuex')">
                <template v-if="$cookies.get('vuex').users.isAuth">
                    <button @click="logout" class="button is-primary">
                        <strong>Log out</strong>
                    </button>
                </template>
                <template v-if="!$cookies.get('vuex').users.isAuth">
                    <!-- <nuxt-link  to="/login/sign" class="button is-primary">
                        <strong>Sign up</strong>
                    </nuxt-link> -->
                    <nuxt-link  to="/login" class="button is-primary">
                        <strong>Log in</strong>
                    </nuxt-link>
                </template>
            </template>
            <template v-if="!$cookies.get('vuex')">
                <!-- <nuxt-link  to="/login/sign" class="button is-primary">
                    <strong>Sign up</strong>
                </nuxt-link> -->
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
                this.$router.push('/')
            } catch (e){
                console.log(e);
            }
        }
    }
}
</script>