<template lang="html" class="">
  <div class="home row col-sm-6">
    <button type="btn" name="button">EN</button>
    <h1 class="col-sm-12">Hackeuses!</h1>
    <br>
    <div class="col-sm-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.home{
  height: 100vh;
  background-color: #300922;
  font-family: 'Fira Mono', monospace;
  color: #DBD5D5;
  text-align: left;
}
h1 {
  margin-top: 45px !important;
}
p {
  padding: 0 7px ;
}
button {
  position: absolute;
  right: 5px !important;
  background-color: #DBD5D5;
  color: #330922;
  font-family: 'Fira Mono', monospace;
}
@media screen and (min-width: 767px) {
  .home {
    min-height: 100vh;
    width: 50vw;
    background-color: #300920;
  }
  button {
    position: absolute;
    right: 5%;
  }
}
</style>
