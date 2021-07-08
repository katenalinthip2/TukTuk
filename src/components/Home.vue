<template>
  <b-container>
    <div class="topnav">
      <div class="logo1">
        <img src="../assets/c9.png" />
      </div>
      <div class="logo2">
        <img src="../assets/ARS.png" />
      </div>

      <div class="all_button">
        <div class="home_button">
          <b-button>Home</b-button>
        </div>
        <div class="booking_button">
          <b-button>Booking</b-button>
        </div>
        <div class="contact_button">
          <b-button>Contact us</b-button>
        </div>
      </div>
    </div>

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
.topnav {
  position: absolute;
  width: 100%;
  height: 85px;
  left: 0px;
  top: 0px;
  margin: auto;
  background-color: black;
}

.background {
  position: absolute;
  width: 100%;
  height: 850px;
  left: 0px;
  top: 85px;
  background: url(../assets/img2.png);
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
.logo1 {
  margin-top: 10px;
  position: absolute;
  margin-left: 50px;
}
.logo2 {
  margin-top: 29px;
  position: absolute;
  margin-left: 90px;
}

.home_button {
  color: white;
  width: 80px;
  height: 30px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  margin-top: 30px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.home_button:hover {
  background: linear-gradient(180deg, #fca311 0%, #fcc600 100%);
  border-radius: 16.5px;

  color: #1e1d1e;
}
.booking_button {
  color: white;
  width: 100px;
  height: 30px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  margin-top: 30px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin-left: 30px;
}
.booking_button:hover {
  background: linear-gradient(180deg, #fca311 0%, #fcc600 100%);
  border-radius: 16.5px;

  color: #1e1d1e;
}
.contact_button {
  color: white;
  width: 120px;
  height: 30px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  margin-top: 30px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin-left: 30px;
}
.contact_button:hover {
  background: linear-gradient(180deg, #fca311 0%, #fcc600 100%);
  border-radius: 16.5px;

  color: #1e1d1e;
}
</style>

