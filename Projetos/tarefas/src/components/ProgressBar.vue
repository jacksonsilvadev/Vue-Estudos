<template>
    <div class="bar">
			<div :style="{width: percentage + '%'}" class="percentage">{{ percentage + ' %'}}</div>
		</div>
</template>

<script>
export default {
    props: ['percentage']
}
</script>

<style>

</style>
