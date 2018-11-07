<template>
  <section>
    <city-list></city-list>
  </section>
</template>

<script>
  import CityList from '~/components/CityList.vue'

  export default {
    components: {
      CityList
    }
  }
</script>

<style>
  @import "../assets/styles/dark/dist/css/style.css";
  .list {
    width: 100%;
    height: 100%;
  }

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>

