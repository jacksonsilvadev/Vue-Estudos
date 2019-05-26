<template>
	<div id="app">

		<span>
			<button @click="component = 'Citacoes'"> Citações </button>
			<button @click="component = 'Sobre'"> Sobre </button>
		</span>
		<!-- Serve para não resetar o componente quando trocar em si -->
	<keep-alive>
		<component :is="component"></component>
	</keep-alive>
		
		<!-- <Citacoes />
		<Sobre /> -->
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre },
	data() {
		return {
			component: 'Citacoes'
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>