<template>
  <v-app style="background-color:#546e7a;">
    <v-main>
      <v-icon v-show="$route.name !== 'index'" style="position:relative; left:50px; top:50px;" size="60px" color="white" @click="$router.back()">
        mdi-arrow-left
      </v-icon>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <br>
    <v-footer
      style="background-color:#546e7a;"
      class="mb-5"
      absolute
      app
    >
      <v-spacer />
      <span class="mr-2" style="color:white;">Made with love</span><span style="font-size:120%;color:red;">&hearts;</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
