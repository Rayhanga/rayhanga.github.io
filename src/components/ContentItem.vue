<template>
  <v-flex xs6 pa-2>
      <v-card py-2 class="ContentItem">
        <v-card-title primary-title>
          <h1>{{ content.title }}</h1>
        </v-card-title>
        <v-card-text>
          <p>
            {{ content.text}}
          </p>
        </v-card-text>
      </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'ContentItem',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
}
</script>
