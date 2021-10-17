<template>
  <v-container>
 
<v-card>
  <v-card-text>
    {{this.repos}}
  </v-card-text>
</v-card>

<v-card>
  <v-card-text>
    {{this.issues}}
  </v-card-text>
</v-card>
    
  </v-card>
    <p>this is here</p>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { getRepos, getIssues } from "../api/api.ts";

export default Vue.extend({
  name: "Base",
  data() { return {
    repos: {},
    issues: {},
  }},
  async created() {
    const getReposData = await getRepos();
    this.repos = getReposData;
  },
});
</script>
