<template>
	<div class="command-card w-0">
		<div class="card-header">
			<div class="command-name">{{ name }}</div>
			<slot/>
		</div>
		<hr>
		<div class="card-description">
			Description: {{ description }}
		</div>
	</div>
</template>

<script	setup>
defineProps({
	// TODO: add id prop
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
})

</script>

<style scoped>
	.command-card {
		flex-basis: calc(33.33% - 8px);
		@apply
		max-w-[220px]
		rounded
		bg-white
		grow
	}

	.card-header {
		@apply
		flex
		justify-between
		py-1
		px-2
	}

	.command-name {
		@apply
		text-main-text-color
	}

	.card-description {
		@apply
		text-[.6rem]
		p-2
		text-main-text-color
	}
</style>