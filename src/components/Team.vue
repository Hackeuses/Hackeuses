<template lang="html" class="">
  <div class="team row col-12 col-md-12">
    <!-- <h3>Team</h3> -->

    <div class="row col-12 col-md-3">
      <div class="person col-6 col-md-6">
        <h4>Lutin</h4>
        <br>
        <p>Positive</p>
        <p>Drôle</p>
      </div>
      <div class="img col-6 col-md-6"></div>
    </div>
    <div class="row col-12 col-md-3">
      <div class="img col-6 col-md-6"></div>
      <div class="person col-6 col-md-6 order-md-first">
        <h4>PolPot</h4>
        <br>
        <p>Ambianceuse</p>
        <p>Folle</p>
      </div>
    </div>
    <div class="row col-12 col-md-3">
      <div class="person col-6 col-md-6">
        <h4>Caro</h4>
        <br>
        <p>L'as de pique</p>
        <p>de ton coeur</p>
      </div>
      <div class="img col-6 col-md-6 "></div>
    </div>
    <div class="row col-12 col-md-3">
      <div class="img col-6 col-md-6"></div>
      <div class="person col-6 col-md-6 order-md-first">
        <h4>Olivia</h4>
        <br>
        <p>petit text</p>
        <p>petit text</p>
      </div>
    </div>
    <div class="row col-12 col-md-3">
      <div class="person col-6 col-md-6 ">
        <h4>Maelle</h4>
        <br>
        <p>text</p>
        <p>text</p>
      </div>
      <div class="img col-6 col-md-6 order-md-first"></div>
    </div>
    <div class="row col-12 col-md-3">
      <div class="img col-6 col-md-6"></div>
      <div class="person col-6 col-md-6">
        <h4>Laura</h4>
        <br>
        <p>petit text</p>
        <p>petit text</p>
      </div>
    </div>
    <div class="row col-12 col-md-3">
      <div class="person col-6 col-md-6 ">
        <h4>Elisa</h4>
        <br>
        <p>text</p>
        <p>text</p>
      </div>
      <div class="img col-6 col-md-6 order-md-first"></div>
    </div>
    <div class="row col-12 col-md-3">
      <div class="img col-6 col-md-6 order-md-first"></div>
      <div class="person col-6 col-md-6 ">
        <h4>Hackeuse!</h4>
        <br>
        <p>text</p>
        <p>text</p>
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
  color: #DBD5D5;
  margin: inherit !important;

}
.person {
  background-color: #300922;
  padding: inherit !important;

}

@media screen and (min-width: 768px) {
  .person h4 {
    font-size: 14px;
    text-align: center;
    margin-top: 3px
  }
  .person p {
    font-size: 10px;
    margin: inherit !important;
  }
}

.img {
  background-image: url(../assets/background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
