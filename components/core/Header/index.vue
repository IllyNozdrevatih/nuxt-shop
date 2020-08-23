<template>
    <b-navbar>
        <template slot="brand">
            <logo/>
        </template>
        <template slot="start">
            <navigation/>
        </template>

        <template slot="end">
            <auth/>
        </template>
    </b-navbar>
</template>


<script>
import Auth from './Auth'
import Logo from './Logo'
import Navigation from './Navigation'

export default {
    components: {
        Auth, Logo, Navigation
    }
}
</script>

<style>

</style>