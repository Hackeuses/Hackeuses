<template lang="html" class="">
  <div class="contact col-sm-6">
    <h3>Contact Us</h3>
    <form class="" action="" method="post">
      <fieldset>
        <div class="row col-sm-5">
          <div class="form-group col-sm-12">
            <input class="borderInput" type="text" name="name" value="" placeholder="Your name *" required>
          </div>
          <div class="form-group col-sm-12">
            <input class="borderInput" type="email" name="email" value="" placeholder="Email address *" resuired>
          </div>
        </div>
        <div class="form-group col-sm-5">
          <textarea name="comments" rows="8" cols="80" placeholder="Comments *" required></textarea>
        </div>
        <div class="form-group submit col-sm-2">
          <input type="submit" name="" value="SEND">
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
.submit {
  text-align: left;
  padding-left: 15px;
}
h3 {
  text-align: left;
}
.contact {

}
textarea{
  width: 90%;
  border: 2px solid grey;
}
@media screen and (min-width: 767px) {
  .contact{
    width: 50vw;
  }
}
</style>
