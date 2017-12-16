<template lang="html" class="">
  <div class="team row col-12 col-md-12" >
    <!-- <h3>Team</h3> -->

    <transition-group
    tag="ul"
    class="row col-md-12"
    >
    <li class="row col-12 col-md-3"
      id="zoomTeam"
      v-for="(hackeuse, index) in hackeuses"
      :key="index"
      :class="false"
      mode="out-in"
      @click="changeSize(index)">
        <div class="person col-6 col-md-6">
          <h4>{{ hackeuse.name }}</h4>
          <br>
          <p>{{ hackeuse.intro }}</p>
          <p>{{ hackeuse.text }}</p>
        </div>
        <div class="img col-6 col-md-6"></div>
    </li>
  </transition-group>
    <div class="row col-12 col-md-3" v-for="hackeuse in hackeuses_snd_row">
      <div class="img col-6 col-md-6 order-md-first" ></div>
      <div class="person col-6 col-md-6">
        <h4>{{ hackeuse.name }}</h4>
        <br>
        <p>{{ hackeuse.intro }}</p>
        <p>{{ hackeuse.text }}</p>
      </div>
    </div>
    <!-- <div class="row col-12 col-md-3">
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
      zoomIn: false,
      hackeuses_snd_row: [
        {
          name: 'Maelle',
          intro: 'Sample',
          text: 'Sample'
        },
        {
          name: 'Elisa',
          intro: 'Sample',
          text: 'Sample'
        },
        {
          name: 'Laura',
          intro: 'Sample',
          text: 'Sample'
        },
        {
          name: 'Hack!',
          intro: 'Sample',
          text: 'Sample'
        }
      ],
      hackeuses: [
        {
          name: 'Mahana',
          intro: 'Sample',
          text: 'Sample'
        },
        {
          name: 'Olivia',
          intro: 'Sample',
          text: 'Sample'
        },
        {
          name: 'Aurélia',
          intro: 'Sample',
          text: 'Sample'
        },
        {
          name: 'Carolyn',
          intro: 'Sample',
          text: 'Sample'
        }
      ]
    }
  },
  methods: {
    changeSize (index) {
      console.log(index)
      this.zoomIn = !this.zoomIn
      let element = document.getElementById('zoomTeam')
      if (this.zoomIn) {
        element.classList.remove('col-md-3')
        element.classList.add('col-md-12')
        element.classList.add('zoomIn')
        // element.classList.add('open')
      } else {
        element.classList.add('col-md-3')
        element.classList.remove('col-md-12')
        element.classList.remove('zoomIn')
        // element.classList.add('close')
      }
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
  @keyframes growth {
    0%   {height: 0%; width: 0%}
    /*50% {height: 100%; width: 50%}*/
    100% {height: 200%; width: 100%}
  }

  .zoomIn {
    position: absolute;
    height: 200%;
    z-index: 200;
    animation-name: growth;
    animation-duration: 0.5s;
  }

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
  background-image: url(../dist/static/img/background.3656d53.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
