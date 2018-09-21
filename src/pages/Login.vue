<template>
    <div class="text-xs-center">
        <v-dialog v-model="dialog" persistent width="500">
            <v-layout>
                <v-flex pa-4 xs6 class="display-1" text-xs-left>
                Login
                </v-flex>
                <v-flex xs6 text-xs-right>
                    <v-btn dark icon to="/">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>

            <v-form v-model="valid" @submit="login">
                <v-flex pa-2 xs12>
                    <v-text-field
                        dark
                        v-model="email"
                        label="Email"
                        prepend-icon="email"
                        :rules="emailRules"
                        required
                        ></v-text-field>
                </v-flex>

                <v-flex xs12 pa-2>
                    <v-text-field
                        dark
                        v-model="password"
                        :type="'password'"
                        label="Password"
                        prepend-icon="vpn_key"
                        required
                        ></v-text-field>
                </v-flex>

                    <v-flex pa-2 xs12 text-xs-right>
                        <v-btn
                            dark
                            :disabled="!valid"
                            type="submit"
                            >
                            Login</v-btn>
                    </v-flex>
            </v-form>
        </v-dialog>
    </div>
</template>

<script>
import firebase,{ functions } from 'firebase'
import App from '../App.vue'

export default {
    name: 'Login',
    beforeMount () {
        this.dialog = true
    },
    data() {
        return {
            valid: true,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            email: '',
            password: ''
        }
    },
    methods: {
        login: function () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                function(user){
                    App.router.replace('usr')
                },
                function(err){
                    alert("Oh no! " + err.message)
                }
            )
        }
    }
}
</script>
