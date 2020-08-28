<template>
    <div>
        <b-tabs type="is-toggle"  expanded>
            <b-tab-item label="Sign up" icon="login-variant" >
                <auth-form :create="true"/>   
            </b-tab-item>
            <b-tab-item label="Log in" icon="login">     
                <auth-form :create="false"/>
            </b-tab-item>
            <b-tab-item label="Loged by" icon="group">     
                <loged-by/>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
import SignUp from './SignUp'
import Loged from './Loged'
import LogedBy from './LogedBy'
import AuthForm from './AuthForm'

export default {
    components: {
        SignUp, Loged, LogedBy, AuthForm
    }
}
</script>

<style>

</style>