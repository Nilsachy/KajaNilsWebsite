<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card elevation="10" class="pa-5">
          <v-toolbar color="transparent" elevation="0">
            <v-toolbar-side-icon />
            <v-toolbar-title class="headline">
              All the movies we want to watch! <span style="font-size:100%;color:red;">&hearts;</span>
            </v-toolbar-title>
            <v-spacer />
            <v-subheader class="headline">
              {{ day }}, {{ date }}{{ ord }} {{ year }}
            </v-subheader>
          </v-toolbar>
          <br>

          <v-list two-line subheader>
            <p class="mx-12 text-right">
              <b>{{ movies.length }}</b> movies
            </p>

            <v-list-item>
              <v-list-item-content>
                <v-text-field
                  id="newMovie"
                  v-model="newMovie.title"
                  outlined
                  name="newMovie"
                  label="Type your movie"
                  @keyup.enter="addNewMovie"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list subheader two-line flat>
            <v-subheader v-if="movies.length == 0" class="subheading">
              We have 0 movies, add some
            </v-subheader>
            <v-subheader v-else class="subheading">
              Our movies
            </v-subheader>

            <v-list-item-group>
              <v-list-item v-for="(movie, i) in movies" :key="i">
                <v-list-item-action>
                  <v-checkbox v-model="movie.watched" @change="editMovie(movie)" />
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title
                    :class="{
                      done: movie.watched
                    }"
                  >
                    {{ movie.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>Added on: {{ date }}{{ ord }} {{ day }} {{ year }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn
                  fab
                  ripple
                  small
                  color="red"
                  @click="removeMovie(movie)"
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
      movies: [],
      newMovie: {
        title: '',
        watched: false
      },
      day: this.movieDay(),
      date: new Date().getDate(),
      ord: this.nth(new Date().getDate()),
      year: new Date().getFullYear()
    }
  },
  mounted () {
    this.getAllMovies()
  },
  methods: {
    getAllMovies () {
      axios.get('http://localhost:8765/movies', {
      })
        .then((response) => {
          this.movies = response.data
        })
        .catch(error => console.log(error))
    },
    addNewMovie () {
      const formdata = new FormData()
      formdata.append('title', this.newMovie.title)
      formdata.append('watched', this.newMovie.watched)
      axios({
        url: 'http://localhost:8765/movies/create',
        method: 'POST',
        data: formdata
      }).then((response) => {
        window.location.reload()
      }).catch((error) => {
        const response = error.response
        window.alert('in catch' + JSON.stringify(response.data.errors))
      })
    },
    editMovie (movie) {
      const formdata = new FormData()
      formdata.append('id', movie.id)
      formdata.append('title', movie.title)
      formdata.append('watched', movie.watched)
      axios({
        url: 'http://localhost:8765/movies/edit_movie',
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
    removeMovie (movie) {
      const formdata = new FormData()
      formdata.append('id', movie.id)
      axios({
        url: 'http://localhost:8765/movies/delete_movie',
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
    movieDay () {
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
