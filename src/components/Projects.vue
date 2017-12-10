<template lang="html" class="">
  <div class="projects row">
    <h3 class="col-md-12">{{ language ? title_project_en : title_project_fr }}</h3>
    <div class="col-md-12">
      <p>{{ language ? description_project_en : description_project_fr}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['language'],
  data () {
    return {
      title_project_en: 'Project MeufCode',
      title_project_fr: 'Projet MeufCode',
      description_project_en: 'IN ENGLISH Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.',
      description_project_fr: 'EN FRANCAIS Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.'
    }
  }
}
</script>

<style lang="css">
.projects {
  /*min-height: 100vh;*/
  font-family: 'Fira Mono', monospace;
  color: #300922;
  text-align: left;
}
/*h3 {
    padding: 0 7px ;
}*/
@media screen and (min-width: 768px) {
  p {
    font-size: 14px;
  }
}

</style>
