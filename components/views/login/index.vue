<template>
    <div>
        <b-tabs type="is-toggle"  expanded>
            <b-tab-item label="Sign up" icon="login-variant" >
                <loged/>
            </b-tab-item>
            <b-tab-item label="Log in" icon="login">     
                <sign-up/>   
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

export default {
    components: {
        SignUp, Loged, LogedBy
    }
}
</script>

<style>

</style>