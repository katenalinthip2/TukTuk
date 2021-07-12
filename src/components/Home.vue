<template>
  <b-container>
    <div class="background">
      <div class="text1">
        <img
          src="../assets/text_booking.png"
          style="margin: 30px 0px 0px; width: 550px"
        />
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.background {
  width: 100%;
  height: 850px;
  left: 0px;
  background: url(../assets/cover-home.png);
  background-size: cover;
  overflow: hidden;
  position: fixed;
}

.text1 {
  position: relative;
  width: 600px;
  height: 200px;
  float: right;
  margin: 150px 50px;
  background: rgba(196, 196, 196, 0.8);
}
</style>

