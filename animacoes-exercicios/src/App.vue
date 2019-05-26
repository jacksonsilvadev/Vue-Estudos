<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr>
    <!-- <b-button class="my-3" @click="exibir = !exibir" variant="primary">Mostrar mensagem</b-button> -->

    <!-- <transition name="fade" appear>
      <b-alert variant="info" v-if="exibir" show>{{ msg }}</b-alert>
    </transition>

    <transition name="slide" type="animation" appear>
      <b-alert variant="info" v-show="exibir" show>{{ msg }}</b-alert>
    </transition>-->

    <!-- <transition
      enter-active-class="animated bounce"
      mode="out-in"
      leave-active-class="animated shake"
    >
      <b-alert variant="info" v-if="exibir" key="info" show>{{ msg }}</b-alert>
      <b-alert variant="warning" key="warn" v-else show>{{ msg }}</b-alert>
    </transition>

    <hr>

    <b-select v-model="tipoAnimação">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>-->
<!-- 
    <transition :name="tipoAnimação" appear>
      <b-alert variant="info" v-show="exibir" show>{{ msg }}</b-alert>
    </transition>
    <hr>
    <transition
      enter-active-class="animated bounce"
      mode="out-in"
      leave-active-class="animated shake"
    >
      <b-alert variant="info" v-if="exibir" key="info" show>{{ msg }}</b-alert>
      <b-alert variant="warning" key="warn" v-else show>{{ msg }}</b-alert>
    </transition> -->

    <hr>
    <button @click="exibir2 = !exibir2">Mostrar</button>
    <!-- :css desabilita o css dessa animação que vem por padrão -->
    <transition
    
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>

    <hr>
  <div class="mb-4">
   <b-button class="mr-4" variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
    <b-button variant="primary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertencia</b-button>
  </div>
   
<transition name="fade" mode="out-in">
  <component :is="componenteSelecionado"></component>
</transition>
  </div>
</template>



<script>

import AlertaInfo from './AlertaInfo.vue'
import AlertaAdvertencia from './AlertaAdvertencia.vue'

export default {
  components: {
    AlertaAdvertencia, AlertaInfo
  },
  data() {
    return {
      msg: "Uma mensagem de informação para o usuário",
      exibir: true,
      exibir2: true,
      tipoAnimação: "fade",
      larguraBase: 0,
      componenteSelecionado: 'AlertaInfo'
    };
  },
  methods: {
    animar(el, done, negativo) {
      let rodada = 1
      // Abrindo um temporizador para que ele aumente a cada nova rodada e quando a rodada for maior que 30 ele começa novamente a execução do 0
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + ( negativo ? -rodada * 10: rodada * 10 )
      el.style.width = `${novaLargura}px`
      rodada++
      if(rodada > 30) {
        clearInterval(temporizador)
        done()
      }
      }, 20)
    },
    beforeEnter(el) {
       this.larguraBase = 0
        el.style.width = `${this.larguraBase}px`
    },
    enter(el, done) {
     this.animar(el,done)
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      this.larguraBase = 300
      el.style.width = `${this.larguraBase}px`
    },
    leave(el, done) {

      this.animar(el, done, true)
    
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

/* Por padrão opacity ja é 1 */
.fade-enter-to {
}

/* Por padrão opacity ja é 1 */
.fade-leave {
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
