<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
    />
    <div class="top-nav">
      <div class="logo">
        <div class="logo1">
          <img src="./assets/top-navbar/icon-logo.png" />
        </div>
        <div class="logo2">
          <img src="./assets/top-navbar/text-logo.png" />
        </div>
      </div>

      <div class="all_button">
        <div class="nav_button">
          <router-link to="/"
            ><b-button id="nav-button">Home</b-button></router-link
          >
        </div>
        <div class="nav_button">
          <router-link to="/booking"
            ><b-button id="nav-button">Booking</b-button></router-link
          >
        </div>
        <div class="nav_button">
          <router-link to="/contect">
            <b-button id="nav-button">Contact us</b-button></router-link
          >
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
</script>

<style lang="scss">
#app {
  font-family: "Kanit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.top-nav {
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 85px;
  background-color: black;
}

.logo {
  display: flex;
}
.logo1 {
  margin-left: 64.96px;
  margin-top: 15px;
  padding: 0;
}

.logo2 {
  margin-left: -8px;
  margin-top: 29px;
}

.all_button {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 48px;
}

// .nav_button {
//   font-size: 20px;
//   text-decoration: none;
//   text-align: center;

//   margin-left: 50px;

//   transition-duration: 0.4s;
//   cursor: pointer;
// }

// .nav_button:hover {
//   background: linear-gradient(180deg, #fca311 0%, #fcc600 100%);
//   border-radius: 16.5px;
//   color: #fcc600;
// }
</style>

<style scoped>
#nav-button {
  background-color: #ffffff00;
  margin-left: 50px;
  font-weight: normal;
  
  border: 0;
  padding: 0;
}

#nav-button:hover {
  color: #fcc600;
}
</style>
