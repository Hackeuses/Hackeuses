<template lang="html" class="">
  <div class="team">
    <h3>Team</h3>
    <div class="row col-lg-12 col-md-12 com-xs-12">
      <div class="col-xs-6">
        <h4>OURNAME</h4>
        <p>petit text</p>
        <p>petit text</p>
      </div>
      <div class="img col-xs-6  col-md-12">

      </div>
      <!-- <img src="../assets/logo.png" alt="" class="col-xs-6"> -->
    </div>
    <div class="row col-lg-12 col-12 col-md-12">
      <img src="../assets/logo.png" alt="" class="col-6">
      <div class="col-xs-6">
        <h4>OURNAME</h4>
        <p>petit text</p>
        <p>petit text</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.team {
  background-color: #300922;
  font-family: 'Fira Mono', monospace;
  color: #DBD5D5;
}
.img {
  height: 120px;
  background-image: url(../assets/background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
@media screen and (min-width: 768px)  and (max-width: 1400px) {
  .team{
    background-color: salmon;
    height: 33vh;
    width: 50vw;
  }
}
</style>
