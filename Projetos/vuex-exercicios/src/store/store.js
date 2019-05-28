import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0);
        }
    },
    mutations: {
        adicionarProduto(state, produto) {
            state.produtos.push(produto)
        }
    },
    actions: {
        adicionarProduto(context, produto) {
            setTimeout(() => {
                context.commit('adicionarProduto', produto)
            }, 1000)
        }
    }
})