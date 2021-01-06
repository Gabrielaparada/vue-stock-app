const state ={
    funds: 1000,
    stocks: []
};

const mutations = {
    //this refers to the buyStock method on stocks.vue
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find((element) => {
            //return true if the id of the element we are at in our loop matches the stock we want to buy
            return element.id == stockId
        })
    }
}
