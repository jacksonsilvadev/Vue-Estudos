<template>
	<div id="app">
		<ul>
            <li v-for="fruta in frutas">{{fruta}}</li>
        </ul>
        <input name="" id="" class="btn btn-primary" type="text" value="" v-model="fruta" @keyup.enter="add">
	</div>
</template>

<script>
import frutasMixin from './FrutasMixin'

export default {
    mixins: [frutasMixin]
	}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
