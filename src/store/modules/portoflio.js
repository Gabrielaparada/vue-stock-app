const state ={
    funds: 1000,
    stocks: []
};

const mutations = {
    //this refers to the buyStock method on stock.vue
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find((element) => {
            //return true if the id of the element we are at in our loop matches id of the stock we want to buy
            return element.id == stockId
        })
         //if we have a record we already have this item, therefore we dont want to push a new item into the array
         if(record){
            //we would take the record and update the quantity old qty + new qty
            record.quantity += quantity;
        } else {
            //if there is no record, push the stock item into the array
            state.stocks.push({id: stockId, quantity: quantity})
        }
        state.funds -= stockPrice * quantity
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        //find stock by id
        const record = state.stocks.find(element => element.id == stockId);
        // check record qty
        if(record.quantity > quantity){
            // old qty minus the new qty of the order
            console.log(record)
            record.quantity -= quantity;
        } else {
            //if I try to sell more than what I have or exactly what I have then we want to remove it from the array
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity
    },
    'SET_PORTFOLIO'(state, portfolio){
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    }
}

const actions = {
    sellStock({commit}, order){
        commit('SELL_STOCK', order);
    }
}

const getters ={
    stockPortfolio(state, getters){
        return state.stocks.map( stock => {
            //stock refers to the stocks we are currently at in the map,
            // elementid refers to the element array that's on our modules not just on our portfolio
            const record = getters.stocks.find(element => element.id == stock.id);
                //we will return a new record and this is what the elements on our array will look like
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds
    }
}

export default {
    mutations,
    actions,
    getters,
    state
}
