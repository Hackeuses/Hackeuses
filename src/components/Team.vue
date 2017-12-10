<template lang="html" class="">
  <div class="team row col-12 col-md-12" >
    <!-- <h3>Team</h3> -->

    <div class="row col-12 col-md-3" v-for="hackeuse in hackeuses">
      <div class="person col-6 col-md-6">
        <h4>{{ hackeuse.name }}</h4>
        <br>
        <p>{{ hackeuse.intro }}</p>
        <p>{{ hackeuse.text }}</p>
      </div>
      <div class="img col-6 col-md-6"></div>
    </div>
    <!-- <div class="row col-12 col-md-3">
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
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['language'],
  data () {
    return {
      hackeuses: [
        {
          name: 'Mahana',
          intro: 'Folle',
          text: 'Tatoo'
        },
        {
          name: 'Olivia',
          intro: 'Miam',
          text: 'Pouf'
        },
        {
          name: 'Aurélia',
          intro: 'Grenouille',
          text: 'Lutin'
        },
        {
          name: 'Carolyn',
          intro: 'Rousse',
          text: 'Tennis'
        },
        {
          name: 'Maelle',
          intro: 'Folle',
          text: 'Tatoo'
        },
        {
          name: 'Elisa',
          intro: 'Miam',
          text: 'Pouf'
        },
        {
          name: 'Laura',
          intro: 'Grenouille',
          text: 'Lutin'
        },
        {
          name: 'Hack!',
          intro: 'Rousse',
          text: 'Tennis'
        }
      ]
    }
  }
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
