<template>
    <b-tabs type="is-toggle" expanded>
        <b-tab-item label="Sign up" icon="login-variant">
            <loged/>
        </b-tab-item>
        <b-tab-item label="Log in" icon="login">     
            <sign-up/>   
        </b-tab-item>
    </b-tabs>
</template>

<script>
import SignUp from './SignUp'
import Loged from './Loged'

export default {
    components: {
        SignUp, Loged
    }
}
</script>

<style>

</style>