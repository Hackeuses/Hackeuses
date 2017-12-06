<template>
  <div id="app" class="">

    <div class="row col-lg-6 col-md-6">
      <app-home class="col-lg-12 col-md-12"></app-home>
    </div>

    <div class="row col-lg-6 col-md-6">
      <app-Projects class="col-lg-12 col-md-12"></app-Projects>
      <app-Team class="col-lg-12 col-md-12"></app-Team>
      <app-Contact class="col-lg-12 col-md-12"></app-Contact>
    </div>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Team from './components/Team.vue'
import Contact from './components/Contact.vue'
export default {
  name: 'app',
  components: {
    appHome: Home,
    appProjects: Projects,
    appContact: Contact,
    appTeam: Team
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.row{
  margin: inherit !important;
  padding: inherit !important;
}
h2{
  margin-top: inherit !important;
}
</style>
