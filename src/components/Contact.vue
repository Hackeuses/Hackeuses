<template lang="html" class="">
  <div class="contact row">
    <h3 class="col-md-12">{{ language ? title_contact_en : title_contact_fr }}</h3>
    <form class="row" action="" method="post">
      <fieldset class="row">
        <div class="row col-md-5">
          <div class="form-group col-md-12">
            <input class="borderInput" type="text" name="name" value="" placeholder="" required>
          </div>
          <div class="form-group col-md-12">
            <input class="borderInput" type="email" name="email" value="" placeholder="" required>
          </div>
        </div>
        <div class="form-group col-md-5">
          <textarea name="comments" rows="4" cols="80" placeholder="" required></textarea>
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
      send_fr: 'ENVOYER'
    }
  }
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
