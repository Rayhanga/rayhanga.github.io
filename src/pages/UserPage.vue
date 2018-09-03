<template>
    <v-layout wrap>
        <v-flex xs12 pa-3 text-xs-center>
            <h1>{{email}}</h1>
        </v-flex>
        <v-flex xs6 pa-3 text-xs-center>
            <v-btn @click="logout">
                Logout
            </v-btn>
        </v-flex>
        <v-flex xs6 pa-3 text-xs-center>
            <h1>{{email}}</h1>
        </v-flex>
        
    </v-layout>
</template>

<script>
import firebase from 'firebase'
import App from '../App.vue'

export default {
    name: "UserPage",
    data () {
        return {
            email: firebase.auth().currentUser.email
        }
    },
    methods: {
        logout: function() {
            firebase.auth().signOut().then(function() {
                App.router.replace('/')
            }, function(err) {
                alert("Uh Oh! " + err.message)
            });
        }
    }
}
</script>

<style>

</style>
