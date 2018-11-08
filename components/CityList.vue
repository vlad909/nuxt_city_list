<template>
  <div class="general" v-if="cities.length">
    <ul class="custom-tab">
      <li @click="isPaginate = false" :class="{'act-li': !isPaginate}">All</li>
      <li @click="isPaginate = true" :class="{'act-li': isPaginate}">Paginate</li>
    </ul>
    <h1>Count: {{cities.length}}</h1>
    <div v-if="!isPaginate">
      <div class="main">
        <ul class="city" v-for="(c, index) in cities" :key="index">
          <li>name: {{c.name}}</li>
          <li>temperature: {{c.temperature}}</li>
          <li>wind speed: {{c.wind_speed}}</li>
          <li>pressure: {{c.pressure}}</li>
          <button type="button" class="btn btn-danger" style="margin: 5px 10px" @click="deleteCity(index)">delete
          </button>
        </ul>
      </div>
    </div>
    <page-limit v-else></page-limit>
    <div class="new">
      <div class="form-group m-t-10">
        <label class="undel-label" for="name">name</label>
        <input class="form-control" type="text" id="name" v-model="city.name">
      </div>
      <div class="form-group m-t-10">
        <label class="undel-label" for="temperature">temperature</label>
        <input class="form-control" type="text" id="temperature" v-model.number="city.temperature">
      </div>
      <div class="form-group m-t-10">
        <label class="undel-label" for="wind_speed">wind speed</label>
        <input class="form-control" type="text" id="wind_speed" v-model.number="city.wind_speed">
      </div>
      <div class="form-group m-t-10">
        <label class="undel-label" for="wind_speed">pressure</label>
        <input class="form-control" type="text" id="pressure" v-model.number="city.pressure">
      </div>
      <button type="button" class="btn btn-success m-t-20 add" @click="addCity">Add new</button>
    </div>
  </div>
</template>
<script>
  import list from '../data.json'
  import PageLimit from './Pages'

  export default {
    data() {
      return {
        city: {
          name: '',
          temperature: '',
          wind_speed: '',
          pressure: ''
        },
        isPaginate: false
      }
    },
    components: {
      PageLimit
    },
    computed: {
      cities() {
        return this.$store.state.all_cities || []
      }
    },
    methods: {
      deleteCity(i) {
        this.$store.commit('deleteCity', i)
      },
      addCity() {
        this.$store.commit('addCity', this.city)
      }
    },
    mounted() {
      this.$store.commit('setAll', list)
    }
  }
</script>
<style>
  .custom-tab {
    display: flex;
    padding: 10px 47%;
    font-size: 18px;
  }

  .custom-tab li  {
    margin: 0 10px;
    cursor: pointer;
  }

  .act-li, .cursor-tab li:hover {
    color: #fb9678;
    border-bottom: 1px #fb9678 solid;
  }

  input[type="text"], .add {
    width: 250px;

  }

  .main {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 10px;
    flex-wrap: wrap;
  }

  .city {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    /*margin: 0 25px;*/
  }

  .city li {
    width: 250px;
    border: 1px white solid;
  }

  .new {
    display: flex;
    flex-direction: column;
    padding: 0 45%;
  }

  h1 {
    padding: 0 45%;
    cursor: pointer;
    user-select: none;
  }
</style>
