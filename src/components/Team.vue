<template lang="html" class="">
  <div class="team row col-12 col-md-12">
    <!-- <h3>Team</h3> -->

    <div class="row col-12 col-md-6">
      <div class="person col-6 col-md-6">
        <h4>Lutin</h4>
        <br>
        <p>Positive</p>
        <p>Drôle</p>
      </div>
      <div class="img col-6 col-md-6"></div>
    </div>
    <div class="row col-12 col-md-6">
      <div class="img col-6 col-md-6"></div>
      <div class="person col-6 col-md-6 order-md-first">
        <h4>PolPot</h4>
        <br>
        <p>Ambianceuse</p>
        <p>Folle</p>
      </div>
    </div>
    <div class="row col-12 col-md-6">
      <div class="person col-6 col-md-6">
        <h4>Caro</h4>
        <br>
        <p>L'as de pique</p>
        <p>de ton coeur</p>
      </div>
      <div class="img col-6 col-md-6 order-md-first"></div>
    </div>
    <div class="row col-12 col-md-6">
      <div class="img col-6 col-md-6"></div>
      <div class="person col-6 col-md-6">
        <h4>Olivia</h4>
        <br>
        <p>petit text</p>
        <p>petit text</p>
      </div>
    </div>
    <div class="row col-12 col-md-6">
      <div class="person col-6 col-md-6">
        <h4>Maelle</h4>
        <br>
        <p>text</p>
        <p>text</p>
      </div>
      <div class="img col-6 col-md-6"></div>
    </div>
    <div class="row col-12 col-md-6">
      <div class="img col-6 col-md-6"></div>
      <div class="person col-6 col-md-6 order-md-first">
        <h4>Laura</h4>
        <br>
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
  /*min-height: 100vh;*/
  font-family: 'Fira Mono', monospace;
  color: #DBD5D5;
  padding: inherit !important;
  text-align: left;
}
.person {
  background-color: #300922;
}
.img {
  background-image: url(../assets/background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
