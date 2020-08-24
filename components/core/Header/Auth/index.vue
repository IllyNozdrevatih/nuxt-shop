<template>
    <b-navbar-item tag="div">
        <div class="buttons">
            <template v-if="$store.getters['users/isAuth']">
                <button @click="$store.dispatch('users/logout')" class="button is-primary">
                    <strong>Log out</strong>
                </button>
            </template>
            <template v-if="!$store.getters['users/isAuth']">
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