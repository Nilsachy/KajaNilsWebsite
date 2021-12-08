<template>
  <div>
    <h1 class="mt-10" style="color:white;">
      Bonjour Kaja
    </h1>
    <vue-typer text="Hello World! I was registered locally!" />
    <div class="center-screen mt-10">
      <v-row justify="center">
        <v-col cols="12" sm="4">
          <v-card style="margin:auto; background-image: linear-gradient(to right, #6666ff , #ccccff);" width="250" height="250" @click.stop="$router.push('/todo')">
            <v-card-title class="title">Things to do</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card style="margin:auto; background-image: linear-gradient(to right, #993366 , #e6b3cc);" width="250" height="250" @click.stop="$router.push('/films')">
            <v-card-title class="title">Films to watch</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card style="margin:auto; background-image: linear-gradient(to right, #993300 , #ffbb99);" width="250" height="250" @click.stop="$router.push('/places')">
            <v-card-title class="title">Places to visit</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card style="margin:auto; background-image: linear-gradient(to right, #996633 , #e6ccb3);" width="250" height="250" @click.stop="$router.push('/pictures')">
            <v-card-title class="title">Favorite pictures</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card style="margin:auto; background-image: linear-gradient(to right, #339933 , #b3e6b3);" width="250" height="250" @click.stop="$router.push('/restaurants')">
            <v-card-title class="title">Restaurants to try</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// import { VueTyper } from 'vue-typer'
export default {
  // components: {
  //   VueTyper
  // },
  layout: 'simpleview'
}
</script>

<style>
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 50vh;
}

.title {
  color: white;
  font-family: "Lucida Console", "Courier New", monospace;
}

</style>
