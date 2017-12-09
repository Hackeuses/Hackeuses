<template lang="html" class="">
  <div class="home row">
    <button class="btnLanguage btn btn-secondary btn-sm" type="btn" name="button">EN</button>
    <h1 class="col-md-12">Hackeuses!</h1>
    <div class="col-md-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.home {
  background-color: #300922;
  color: #DBD5D5;
}
h1 {
  margin-top: 55px !important;
}

.btnLanguage {
  position: absolute;
  right: 5px !important;
  background-color: #DBD5D5;
  color: #330922;
}
@media screen and (min-width: 768px) {
  h1 {
    margin-top: 25vh !important;
  }
  .home p {
    font-size: 16px !important;
  }
}
</style>
