export default {
    state: {

        quantidade: 10,
        preco: 5
    },
    getters: {

    },
    mutations: {

        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },
    actions: {

    }
}