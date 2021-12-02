<template>
  <v-container class="center-screen">
    <v-row>
      <v-img src="/avatar.jpg" class="avatar" max-height="200" max-width="200" />
      <v-col cols="12">
        <h1 class="name">
          Nils Achy
        </h1>
      </v-col>
      <v-col cols="12">
        <v-btn
          id="linkedIn"
          elevation="2"
          class="btn mr-2"
          outlined
          x-large
          href="https://www.linkedin.com/in/nils-achy-8a2984195/"
          target="_blank"
        >
          LinkedIn
        </v-btn>
        <v-btn
          id="github"
          elevation="2"
          class="btn ml-2"
          outlined
          x-large
          href="https://github.com/Nilsachy"
          target="_blank"
        >
          Github
        </v-btn>
      </v-col>
      <v-col cols="12" class="mt-10">
        <a class="links" href="mailto:nils.achy@gmail.com">nils.achy@gmail.com</a>
      </v-col>
      <v-col cols="12">
        <a class="links">+33 (0)6.65.06.97.68</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'simpleview'
}
</script>

<style>
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  margin-top: -50px;
}

.avatar {
  margin: auto;
  width: 50%;
  border-radius: 100px;
}

.name {
  font-size: 100px;
  color: rgb(105, 105, 141);
  font-family: 'Avenir';
}

.btn {
  width: 130px;
  border-width: 2px;
}

#linkedIn {
  border-color: #0072b1;
  color: #0072b1;
}

#linkedIn:hover {
  background-color: #0072b1;
  color: white;
}

#github {
  border-color: #c9510c;
  color: #c9510c;
}

#github:hover {
  background-color: #c9510c;
  color: white;
}

.links {
  color: rgb(105, 105, 141)  !important;
}

</style>
