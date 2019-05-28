import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue'
import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
// import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

Vue.use(Router);

const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

const router = new Router({
    mode: 'history',
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
    routes: [{
            path: '/',
            component: Inicio,
            name: 'inicio'
        },
        {
            path: '/usuario',
            component: Usuario,
            props: true,
            children: [{
                    path: '',
                    component: UsuarioLista
                },
                {
                    path: ':id',
                    component: UsuarioDetalhe,
                    props: true,
                    beforeEnter: (to, from, next) => {
                        console.log('Antes da rota usuario detalhe')
                        next()
                    }
                },
                {
                    path: ':id/edit',
                    component: UsuarioEditar,
                    props: true,
                    name: 'editarUsuario'
                },
                {
                    path: '*',
                    redirect: '/'
                }
            ]
        }
    ]
})

// Before enter rota global
router.beforeEach((to, from, next) => {
    console.log('Antes de entrar na rota')
    // Next para chamar a rota to
    next()
})

export default router