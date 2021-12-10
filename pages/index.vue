<template>
  <div class="mt-10">
    <h1 style="color: #fff;">
      Bonjour
      <vue-typer
        :text="text"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="70"
        :type-delay="100"
        :pre-erase-delay="2000"
        :erase-delay="500"
        erase-style="select-all"
        :erase-on-complete="false"
        caret-animation="blink"
      />
    </h1>
    <br>
    <div class="center-screen mt-10">
      <v-row justify="center">
        <v-col cols="12" sm="4">
          <v-card
            class="vcard"
            style="background-image: linear-gradient(to right, #6666ff , #ccccff);"
            hover
            width="250"
            height="250"
            @click.stop="$router.push('/todo')"
          >
            <v-card-title class="title">
              Things to do
            </v-card-title>
            <v-icon size="500%" class="icon">
              mdi-playlist-check
            </v-icon>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card
            class="vcard"
            style="background-image: linear-gradient(to right, #993366 , #e6b3cc);"
            hover
            width="250"
            height="250"
            @click.stop="$router.push('/movies')"
          >
            <v-card-title size="800%" class="title">
              Movies to watch
            </v-card-title>
            <v-icon size="500%" class="icon">
              mdi-movie-open
            </v-icon>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card
            class="vcard"
            style="background-image: linear-gradient(to right, #993300 , #ffbb99);"
            hover
            width="250"
            height="250"
            @click.stop="$router.push('/places')"
          >
            <v-card-title class="title">
              Places to visit
            </v-card-title>
            <v-icon size="500%" class="icon">
              mdi-earth
            </v-icon>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card
            class="vcard"
            style="background-image: linear-gradient(to right, #996633 , #e6ccb3);"
            hover
            width="250"
            height="250"
            @click.stop="$router.push('/pictures')"
          >
            <v-card-title class="title">
              Favorite pictures
            </v-card-title>
            <v-icon size="500%" class="icon">
              mdi-panorama-variant
            </v-icon>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card
            class="vcard"
            style="background-image: linear-gradient(to right, #339933 , #b3e6b3);"
            hover
            width="250"
            height="250"
            @click.stop="$router.push('/restaurants')"
          >
            <v-card-title class="title">
              Restaurants to try
            </v-card-title>
            <v-icon justify="center" size="500%" class="icon">
              mdi-silverware
            </v-icon>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {

  layout: 'simpleview',
  data () {
    return {
      text: ['Kaja', 'baby', 'my love', 'Nils']
    }
  }
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

.vue-typer .custom.char.typed {
  color: #FD6B6B
}

.vue-typer .custom.char.selected {
  color: #FD6B6B
}

.vue-typer .custom.caret {
  color: #E57373
}

.icon {
  color: white !important;
  margin-top: 20px;
}

.vcard {
  border-radius: 10px !important;
  margin:auto;
}

</style>
