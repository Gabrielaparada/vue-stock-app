import Vue from 'vue'

export const loadData = ({commit}) => {
    //http without $ because we are accessing directly on the vue object itself
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if(data){
                console.log(data)
                const stocks = data.stocks
                const funds = data.funds
                const stockPortfolio = data. stockPortfolio
                const portfolio ={
                    stockPortfolio,
                    funds
                };
                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        })
}
