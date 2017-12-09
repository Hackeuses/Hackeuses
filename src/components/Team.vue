<template lang="html" class="">
  <div class="team">
    <!-- <h3>Team</h3> -->

    <div class="row col-sm-6">
      <div class="person col-xs-6 col-sm-6">
        <h4>OURNAME</h4>
        <br>
        <p>petit text</p>
        <p>petit text</p>
      </div>
      <div class="img col-xs-6 col-sm-6"></div>
    </div>
    <div class="row col-sm-6">
      <div class="person col-xs-6 col-sm-6">
        <h4>OURNAME</h4>
        <br>
        <p>petit text</p>
        <p>petit text</p>
      </div>
      <div class="img col-xs-6 col-sm-6"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.team {
  font-family: 'Fira Mono', monospace;
  color: #DBD5D5;
  padding: inherit !important;
  text-align: left;
}
.row {
  margin: inherit !important;
  padding: inherit !important;
}
.person {
  background-color: #300922;
  height: 30vh;
}
h4{
  margin-top: 25px;
}
.img {
  height: 30vh;
  background-image: url(../assets/background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (min-width: 767px) {
  .team{
    height: 30vh;
    width: 50vw;
  }
}
</style>
