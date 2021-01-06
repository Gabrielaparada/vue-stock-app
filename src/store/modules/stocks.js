import stocks from '../../data/stocks'
const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, stocks){
        //we will be recieving stocks as arguments and we want to overwrite our existing state with this data
        state.stocks = stocks;
    },
    'RDN_STOCKS'(state){

    }
};

const actions = {
    buyStock:({commit}, order) => {
        commit()

    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks)
    },
    randomnizeStock: ({commit}) => {
        commit('RDN_STOCK')
    }
}

const getters = {
    stocks: state => {
        // this refers to the state that was set up on line 2
        return state.stocks
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
