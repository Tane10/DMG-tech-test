<template>
  <v-app>
    <v-main>
      <Base />
    </v-main>
  </v-app>
</template>
 
<script lang="ts">
import Vue from "vue";
import Base from "./components/Base.vue";

export default Vue.extend({
  name: "App",

  components: {
    Base
  },

  data: () => ({
    //
  })
});
</script>
