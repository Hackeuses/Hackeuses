<template lang="html" class="">
  <div class="contact">
    <h2>Contact</h2>
    <form class="" action="index.html" method="post">
      <fieldset>
        <div class="form-group">
          <input type="text" name="name" value="name" placeholder="your name">
        </div>
        <div class="form-group">
          <input type="email" name="email" value="email" placeholder="your email address">
        </div>
        <div class="form-group">
          <textarea name="comments" rows="8" cols="80" placeholder="your comments"></textarea>
        </div>
        <div class="form-group">
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
.contact {
  background-color: salmon;
}
textarea, input {
  width: 90%;
}
@media screen and (min-width: 768px)  and (max-width: 1400px) {
  .contact{
    background-color: lightgrey;
    min-height: 33vh;
    width: 50vw;
  }
}
</style>
