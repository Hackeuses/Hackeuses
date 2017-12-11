<template lang="html" class="">
  <div class="contact row">
    <h3 class="col-md-12">{{ language ? title_contact_en : title_contact_fr }}</h3>
    <form class="row"  method="POST" action="https://formspree.io/contact.hackeuses@gmail.com">
      <fieldset class="row">
        <div class="row col-md-5">
          <div class="form-group col-md-12">
            <label for="name"></label>
            <input
              class="borderInput"
              type="text"
              id="name"
              name="name"
              v-model="name"
              :placeholder="language ? yourname_en : yourname_fr"
              required>
          </div>
          <div class="form-group col-md-12">
            <label for="email"></label>
            <input
              class="borderInput"
              type="email"
              id="email"
              name="email"
              v-model="email"
              :placeholder="language ? youremail_en : youremail_fr"
              required>
          </div>
        </div>
        <div class="form-group col-md-5">
          <label for="comments"></label>
          <textarea
            id="comments"
            name="commnets"
            rows="4" cols="80"
            v-model="comments"
            :placeholder="language ? comments_en : comments_fr"
            required></textarea>
        </div>
        <div class="form-group submit col-md-2">
          <button class="btn btn-secondary btn-sm" type="submit" name="button">{{ language ? send_en : send_fr }}</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  props: ['language'],
  data () {
    return {
      title_contact_en: 'Contact Us',
      title_contact_fr: 'Contactez-nous',
      yourname_en: 'Your name *',
      yourname_fr: 'Votre nom *',
      youremail_en: 'Email address *',
      youremail_fr: 'Adresse mail *',
      comments_en: 'Comments *',
      comments_fr: 'Commentaires *',
      send_en: 'SEND',
      send_fr: 'ENVOYER',
      name: '',
      email: '',
      comments: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        name: this.name,
        email: this.email,
        comments: this.comments
      }
      /* eslint-disable */
      console.log(formData)
    },
},
}
</script>

<style lang="css">
.borderInput {
  width: 90%;
  border: inherit !important;
  border-bottom: 1px solid grey !important;
}
textarea{
  width: 90%;
  border: 2px solid grey;
}
</style>
