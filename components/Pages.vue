<template>
  <div>
    <div class="main">
      <ul class="city" v-for="(c, index) in paginatedCity" :key="index">
        <li>name: {{c.name}}</li>
        <li>temperature: {{c.temperature}}</li>
        <li>wind speed: {{c.wind_speed}}</li>
        <li>pressure: {{c.pressure}}</li>
        <button type="button" class="btn btn-danger" style="margin: 5px 10px" @click="deleteCity(name)">delete
        </button>
      </ul>
    </div>
    <ul class="pag-list2">
      <li class="page" v-for="(p, key) in pages_count" :key="key" @click="page = p"
          :class="{act: page === p}">{{p}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        page: 1
      }
    },
    computed: {
      pages_count() {
        return Math.ceil(this.$store.state.all_cities.length / 2)
      },
      paginatedCity() {
        let start = (this.page - 1) * 2,
          end = start + 2
        return this.$store.state.all_cities.slice(start, end)
      }
    },
    methods: {
      deleteCity(name) {
        let index = this.$store.state.all_cities.findIndex(e => e.name === name)
        this.$store.commit('deleteCity', index)
      }
    }
  }
</script>
<style scoped>
  .pag-list, .pag-list2 {
    list-style-type: none;
  }

  .pag-list2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .page {
    width: 25px;
    height: 25px;
    border: 1px black solid;
    margin: 10px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
  }
  .act{
    background: orangered;
    color: black;
  }
</style>
