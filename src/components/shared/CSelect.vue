<template>
	<select name="c-select" id="c-select">
		<option
			v-for="(option, index) in options"
			:key="index"
			:selected="index === selectedId"
			:value="option.value"
		>
			{{ option.text }}
		</option>
	</select>
</template>

<script setup>
defineProps({
	options: {
		type: Array,
		required: true
	},
	selectedId: {
		type: Number,
		default: 0
	},
	disabled: {
		type: Boolean,
		default: false
	},
	size: {
		type: Number,
		default: 0
	}
})
</script>

<style scoped>
#c-select {
	font-size: 0.8rem;
	@apply
	w-220
	px-3
	py-1
	rounded
}

</style>