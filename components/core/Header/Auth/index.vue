<template>
    <b-navbar-item tag="div">
        <div class="buttons">
            <template v-if="$cookies.get('vuex')">
                <template v-if="$cookies.get('vuex').users.isAuth">
                    <button @click="$store.dispatch('users/logout')" class="button is-primary">
                        <strong>Log out</strong>
                    </button>
                </template>
                <template v-if="!$cookies.get('vuex').users.isAuth">
                    <nuxt-link  to="/login" class="button is-primary">
                        <strong>Sign up</strong>
                    </nuxt-link>
                    <a class="button is-light">
                        Log in
                    </a>
                </template>
            </template>
            <template v-if="!$cookies.get('vuex')">
                <nuxt-link  to="/login" class="button is-primary">
                    <strong>Sign up</strong>
                </nuxt-link>
                <a class="button is-light">
                    Log in
                </a>
            </template>
        </div>
    </b-navbar-item>
</template>