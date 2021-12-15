<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card elevation="10" class="pa-5">
          <v-toolbar color="transparent" elevation="0">
            <v-toolbar-side-icon />
            <v-toolbar-title class="headline">
              All the places we want to visit! <span style="font-size:100%;color:red;">&hearts;</span>
            </v-toolbar-title>
            <v-spacer />
            <v-subheader class="headline">
              {{ day }}, {{ date }}{{ ord }} {{ year }}
            </v-subheader>
          </v-toolbar>
          <br>

          <v-list two-line subheader>
            <p class="mx-12 text-right">
              <b>{{ places.length }}</b> places
            </p>

            <v-list-item>
              <v-list-item-content>
                <v-text-field
                  id="newPlace"
                  v-model="newPlace.name"
                  outlined
                  name="newPlace"
                  label="Type your place"
                  @keyup.enter="addNewPlace"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list subheader two-line flat>
            <v-subheader v-if="places.length == 0" class="subheading">
              We have 0 places, add some
            </v-subheader>
            <v-subheader v-else class="subheading">
              Our places
            </v-subheader>

            <v-list-item-group>
              <v-list-item v-for="(place, i) in places" :key="i">
                <v-list-item-action>
                  <v-checkbox v-model="place.visited" @change="editPlace(place)" />
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title
                    :class="{
                      done: place.visited
                    }"
                  >
                    {{ place.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>Added on: {{ date }}{{ ord }} {{ day }} {{ year }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn
                  fab
                  ripple
                  small
                  color="red"
                  @click="removePlace(place)"
                >
                  <v-icon class="white--text">
                    mdi-close
                  </v-icon>
                </v-btn>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { VueTyper } from 'vue-typer'
import axios from 'axios'
export default {
  data () {
    return {
      places: [],
      newPlace: {
        name: '',
        visited: false
      },
      day: this.placeDay(),
      date: new Date().getDate(),
      ord: this.nth(new Date().getDate()),
      year: new Date().getFullYear()
    }
  },
  mounted () {
    this.getAllPlaces()
  },
  methods: {
    getAllPlaces () {
      axios.get('https://api-noe-workspace.com/backend-kn/places', {
      })
        .then((response) => {
          this.places = response.data
        })
        .catch(error => console.log(error))
    },
    addNewPlace () {
      const formdata = new FormData()
      formdata.append('name', this.newPlace.name)
      formdata.append('visited', this.newPlace.visited)
      axios({
        url: 'https://api-noe-workspace.com/backend-kn/places/create',
        method: 'POST',
        data: formdata
      }).then((response) => {
        window.location.reload()
      }).catch((error) => {
        const response = error.response
        window.alert('in catch' + JSON.stringify(response.data.errors))
      })
    },
    editPlace (place) {
      const formdata = new FormData()
      formdata.append('id', place.id)
      formdata.append('name', place.name)
      formdata.append('visited', place.visited)
      axios({
        url: 'https://api-noe-workspace.com/backend-kn/places/edit_place',
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: formdata
      }).then((response) => {
        window.location.reload()
      }).catch((error) => {
        console.log('in catch')
        window.alert('An error occurred. Please try again!')
        const response = error.response
        console.log(JSON.stringify(response.data.errors))
      })
    },
    removePlace (place) {
      const formdata = new FormData()
      formdata.append('id', place.id)
      axios({
        url: 'https://api-noe-workspace.com/backend-kn/places/delete_place',
        method: 'DELETE',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: formdata
      }).then((response) => {
        window.location.reload()
      }).catch((error) => {
        console.log('in catch')
        window.alert('An error occurred. Please try again!')
        const response = error.response
        console.log(JSON.stringify(response.data.errors))
      })
    },
    nth (d) {
      if (d > 3 && d < 21) { return 'th' }
      switch (d % 10) {
        case 1:
          return 'st'
        case 2:
          return 'nd'
        case 3:
          return 'rd'
        default:
          return 'th'
      }
    },
    placeDay () {
      const d = new Date()
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
      return days[d.getDay()]
    }
  }
}
</script>

<style>

.done {
  text-decoration: line-through;
}

.headline {
  font-weight: bold !important;
}

</style>
