<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
    />
    <!-- <topnavbar /> -->
    <router-view />
  </div>
</template>

<script>
// import topnavbar from './components/Topnavbar.vue'
// var pathname = window.location.pathname
// console.log(pathname)
// export default {
//   components: {
//     topnavbar
//   }
// }
</script>

<style lang="scss">
#app {
  font-family: "Kanit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
