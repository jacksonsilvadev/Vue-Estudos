import Vue from 'vue'
import Vuex from 'vuex'
import Carrinho from './modules/carrinho'
import Parametros from './modules/parametros'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Carrinho,
        Parametros
    }
})