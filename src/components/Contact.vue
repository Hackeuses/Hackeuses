<template lang="html" class="">
  <div class="contact row">
    <h3 class="col-md-12">Contact Us</h3>
    <form class="row" action="" method="post">
      <fieldset class="row">
        <div class="row col-md-5">
          <div class="form-group col-md-12">
            <input class="borderInput" type="text" name="name" value="" placeholder="Your name *" required>
          </div>
          <div class="form-group col-md-12">
            <input class="borderInput" type="email" name="email" value="" placeholder="Email address *" resuired>
          </div>
        </div>
        <div class="form-group col-md-5">
          <textarea name="comments" rows="8" cols="80" placeholder="Comments *" required></textarea>
        </div>
        <div class="form-group submit col-md-2">
          <button class="btn btn-secondary btn-sm" type="submit" name="button">SEND</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.borderInput {
  width: 90%;
  border: inherit !important;
  border-bottom: 1px solid grey !important;
}
/*.submit {
  text-align: left;
  padding-left: 15px;
}
h3 {
  text-align: left;
}*/
.contact {
  /*height: 100vh;*/
}
textarea{
  width: 90%;
  border: 2px solid grey;
}
/*@media screen and (min-width: 767px) {
  .contact{
    width: 50vw;
  }
}*/
</style>
