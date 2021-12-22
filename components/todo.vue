<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card elevation="10" class="pa-5">
          <v-toolbar color="transparent" elevation="0">
            <v-toolbar-title class="headline">
              All the things we want to do! <span style="font-size:100%;color:red;">&hearts;</span>
            </v-toolbar-title>
            <v-spacer />
            <v-subheader class="headline">
              {{ day }}, {{ date }}{{ ord }} {{ year }}
            </v-subheader>
          </v-toolbar>
          <br>

          <v-list two-line subheader>
            <p class="mx-12 text-right">
              <b>{{ todos.length }}</b> todos
            </p>

            <v-list-item>
              <v-list-item-content>
                <v-text-field
                  id="newTodo"
                  v-model="newTodo.title"
                  outlined
                  name="newTodo"
                  label="Type your todo"
                  @keyup.enter="addNewTodo"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list subheader two-line flat>
            <v-subheader v-if="todos.length == 0" class="subheading">
              We have 0 Todos, add some
            </v-subheader>
            <v-subheader v-else class="subheading">
              Our todos
            </v-subheader>

            <v-list-item-group>
              <v-list-item v-for="(todo, i) in todos" :key="i">
                <v-list-item-action>
                  <v-checkbox v-model="todo.done" @change="editTodo(todo)" />
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title
                    :class="{
                      done: todo.done
                    }"
                  >
                    {{ todo.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>Added on: {{ todo.date }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn
                  fab
                  ripple
                  small
                  color="red"
                  @click="removeTodo(todo)"
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
      todos: [],
      newTodo: {
        title: '',
        done: false,
        date: new Date().toISOString().substr(0, 10) + ' 00:00:00'
      },
      day: this.todoDay(),
      date: new Date().getDate(),
      ord: this.nth(new Date().getDate()),
      year: new Date().getFullYear()
    }
  },
  mounted () {
    this.getAllToDos()
  },
  methods: {
    getAllToDos () {
      axios.get('https://api-noe-workspace.com/backend-kn/todos', {
      })
        .then((response) => {
          this.todos = response.data
          this.todos.forEach((element) => {
            const year = element.date
            const month = element.date
            const day = element.date
            element.date = day.substring(8, 10) + '-' + month.substring(5, 7) + '-' + year.substring(0, 4)
          })
        })
        .catch(error => console.log(error))
    },
    addNewTodo () {
      const formdata = new FormData()
      formdata.append('title', this.newTodo.title)
      formdata.append('done', this.newTodo.done)
      formdata.append('date', this.newTodo.date)
      axios({
        url: 'https://api-noe-workspace.com/backend-kn/todos/create',
        method: 'POST',
        data: formdata
      }).then((response) => {
        window.location.reload()
      }).catch((error) => {
        const response = error.response
        window.alert('in catch' + JSON.stringify(response.data.errors))
      })
    },
    editTodo (todo) {
      const formdata = new FormData()
      formdata.append('id', todo.id)
      formdata.append('title', todo.title)
      formdata.append('done', todo.done)
      axios({
        url: 'https://api-noe-workspace.com/backend-kn/todos/edit_todo',
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
    removeTodo (todo) {
      const formdata = new FormData()
      formdata.append('id', todo.id)
      axios({
        url: 'https://api-noe-workspace.com/backend-kn/todos/delete_todo',
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
    todoDay () {
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
