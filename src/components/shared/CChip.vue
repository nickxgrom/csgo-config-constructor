<template>
	<div :class="`c-chip color_${color}`">
		{{ text }}
	</div>
</template>

<script setup>
defineProps({
	text: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true,
		validator(value) {
			return ['success', 'error'].includes(value)
		}
	}
})
</script>

<style lang="scss" scoped>
.c-chip {
	@apply
	h-[20px]
	p-1
	rounded
	text-white
	text-[.6rem]
	leading-[.6rem]
}

.color {
	&_success {
		background: #08A500;
	}

	&_error {
		background: #E40A0A;
	}
}
</style>