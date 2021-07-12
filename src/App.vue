<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
    />
    <div class="top-nav">
      <div class="logo1">
        <img src="./assets/top-navbar/icon-logo.png" />
      </div>
      <div class="logo2">
        <img src="./assets/top-navbar/text-logo.png" />
      </div>

      <div class="all_button">
        <div class="nav_button">
          <router-link to="/"><b-button>Home</b-button></router-link>
        </div>
        <div class="nav_button">
          <router-link to="/booking"><b-button>Booking</b-button></router-link>
        </div>
        <div class="nav_button">
          <router-link to="/contect">
            <b-button>Contact us</b-button></router-link>
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
  width: 100%;
  height: 85px;
  background-color: black;
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

.all_button {
  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav_button {
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  display: inline-block;

  height: 30px;
  margin-top: 30px;
  margin-left: 30px;

  transition-duration: 0.4s;
  cursor: pointer;
}

.nav_button:hover {
  background: linear-gradient(180deg, #fca311 0%, #fcc600 100%);
  border-radius: 16.5px;
  color: #1e1d1e;
}
</style>
