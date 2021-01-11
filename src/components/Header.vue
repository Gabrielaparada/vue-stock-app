<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav nav">
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        </ul>
        <strong class='navbar-text navbar-right'>Funds: {{ funds | currency}}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li  @click="isDropdownOpen = !isDropdownOpen " class="dropdown" :class=" {'open' : isDropdownOpen}">
            <a class="dropdown-toggle"
               role="button"
               data-toggle="dropdown"
               aria-haspopup="true"
               href="#"
               aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">End Day</a></li>
              <li><a href="#" @click="loadData">Load data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

  </nav>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds
      }
    },
    methods: {
      ...mapActions({
        // if you want to keep the original name of the action you need to pass an array
        randomnizeStock: 'randomnizeStock',
        fetchData: 'loadData'
      }),
      endDay() {
        console.log('random')
        this.randomnizeStock();
      },
      saveData() {
        console.log('clicked')
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        };
        //using put will overwrite the old data
        // //data.json is the node of the file we want to create
        this.$http.put('data.json', data)
      },
      loadData() {
        console.log('load')
        this.fetchData()
      }
    }
  }
</script>
