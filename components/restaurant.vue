<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card elevation="10" class="pa-5">
          <v-toolbar color="transparent" elevation="0">
            <v-toolbar-title class="headline">
              All the restaurants we want to visit! <span style="font-size:100%;color:red;">&hearts;</span>
            </v-toolbar-title>
            <v-spacer />
            <v-subheader class="headline">
              {{ day }}, {{ date }}{{ ord }} {{ year }}
            </v-subheader>
          </v-toolbar>
          <br>

          <v-list two-line subheader>
            <p class="mx-12 text-right">
              <b>{{ restaurants.length }}</b> restaurants
            </p>

            <v-list-item>
              <v-list-item-content>
                <v-row>
                  <v-col cols="12" sm="5">
                    <v-text-field
                      id="newRestaurant"
                      v-model="newRestaurant.name"
                      outlined
                      name="newRestaurant"
                      label="Type your restaurant"
                    />
                  </v-col>
                  <v-col cols="12" sm="5">
                    <v-text-field
                      id="newRestaurant"
                      v-model="newRestaurant.city"
                      outlined
                      name="newRestaurant"
                      label="Type the city"
                    />
                  </v-col>
                  <v-col cols="12" sm="1">
                    <v-btn v-if="newRestaurant.name !== '' && newRestaurant.city !== ''" class="mt-3" icon @click="addNewRestaurant">
                      <v-icon>mdi-send</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list subheader two-line flat>
            <v-subheader v-if="restaurants.length == 0" class="subheading">
              We have 0 restaurants, add some
            </v-subheader>
            <v-subheader v-else class="subheading">
              Our restaurants
            </v-subheader>

            <v-list-item-group>
              <v-list-item v-for="(restaurant, i) in restaurants" :key="i">
                <v-list-item-action>
                  <v-checkbox v-model="restaurant.visited" @change="editRestaurant(restaurant)" />
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title
                    :class="{
                      done: restaurant.visited
                    }"
                  >
                    {{ restaurant.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{ restaurant.city }}</v-list-item-subtitle>
                  <v-list-item-subtitle>Added on: {{ restaurant.date }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn
                  fab
                  ripple
                  small
                  color="red"
                  @click="removeRestaurant(restaurant)"
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
      restaurants: [],
      newRestaurant: {
        name: '',
        city: '',
        visited: false,
        date: new Date().toISOString().substr(0, 10) + ' 00:00:00'
      },
      day: this.restaurantDay(),
      date: new Date().getDate(),
      ord: this.nth(new Date().getDate()),
      year: new Date().getFullYear()
    }
  },
  mounted () {
    this.getAllRestaurants()
  },
  methods: {
    getAllRestaurants () {
      axios.get('https://api-noe-workspace.com/backend-kn/restaurants', {
      })
        .then((response) => {
          this.restaurants = response.data
          this.restaurants.forEach((element) => {
            const year = element.date
            const month = element.date
            const day = element.date
            element.date = day.substring(8, 10) + '-' + month.substring(5, 7) + '-' + year.substring(0, 4)
          })
        })
        .catch(error => console.log(error))
    },
    addNewRestaurant () {
      const formdata = new FormData()
      formdata.append('name', this.newRestaurant.name)
      formdata.append('city', this.newRestaurant.city)
      formdata.append('visited', this.newRestaurant.visited)
      formdata.append('date', this.newRestaurant.date)
      axios({
        url: 'https://api-noe-workspace.com/backend-kn/restaurants/create',
        method: 'POST',
        data: formdata
      }).then((response) => {
        window.location.reload()
      }).catch((error) => {
        const response = error.response
        window.alert('in catch' + JSON.stringify(response.data.errors))
      })
    },
    editRestaurant (restaurant) {
      const formdata = new FormData()
      formdata.append('id', restaurant.id)
      formdata.append('name', restaurant.name)
      formdata.append('city', restaurant.city)
      formdata.append('visited', restaurant.visited)
      axios({
        url: 'https://api-noe-workspace.com/backend-kn/restaurants/edit_restaurant',
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
    removeRestaurant (restaurant) {
      const formdata = new FormData()
      formdata.append('id', restaurant.id)
      axios({
        url: 'https://api-noe-workspace.com/backend-kn/restaurants/delete_restaurant',
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
    restaurantDay () {
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
