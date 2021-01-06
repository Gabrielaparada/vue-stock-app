<template>
  <div>
    <h1>HI</h1>
    <Stocks v-for="stock in stocks" :stocks="stocks"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import StockPortfolio from './StocksPortfolio.vue'
export default {
  computed: {
    ...mapGetters({
      //if we pass it as an object we can do so as a named getter in this case "stocks" if we were to pass it as an array it would be ['stockPortfolio']
      stocks: 'stockPortfolio'
    })
  },
  components: {
    StockPortfolio
  }
}
</script>
