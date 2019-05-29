import stocks from '../../data/stocks'
export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    },
    actions: {
        buyStock({
            commit
        }, order) {
            commit()
        },
        initStocks({
            commit
        }) {
            commit('setStocks', stocks)
        }
    }
}