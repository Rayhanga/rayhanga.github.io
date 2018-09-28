<template>
    <v-container fluid>
        <v-flex>
            <v-card py-2>
                <v-card-title primary-title>
                <h1>
                    <vue-markdown>{{content.title}}</vue-markdown>
                </h1>
                </v-card-title>
                <v-card-text>
                    <vue-markdown>{{content.text}}
                    </vue-markdown>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="$router.go(-1)">
                        Back
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import firebase from 'firebase'

export default {
    name: "ContentDetails",
    components: {
        VueMarkdown
    }, 
    data () {
        return {
            content: null
        }
    },
    created () {
        this.content = this.$route.params.postContent
    }
}
</script>

<style>

</style>
