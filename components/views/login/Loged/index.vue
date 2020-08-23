<template>
    <div class="login__login">
        <b-field label="Email" type="is-danger" message="This email is invalid">
            <b-input type="email" maxlength="30"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input type="password" password-reveal></b-input>
        </b-field>
    </div>
</template>