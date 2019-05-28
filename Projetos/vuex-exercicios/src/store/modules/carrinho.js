export default {
    state: {
        produtos: [],

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
        },

    },
    actions: {
        adicionarProduto(context, produto) {
            setTimeout(() => {
                // Utilizar rootState para pegar a state global dos módulos
                // context.rootState.carrinho.commit('adicionarProduto', produto)
                context.commit('adicionarProduto', produto)
            }, 1000)
        }
    }
}