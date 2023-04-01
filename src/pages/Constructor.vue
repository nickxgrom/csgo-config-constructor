<template>
	<div class="page-title">
		<h1>{{ $t('pages.constructor.title') }}</h1>
	</div>
	<div class="container">
		<div class="categories">
			<c-select
				:options="options"
			/>
		</div>
		<div>wip</div>
	</div>
</template>

<script setup>
import CSelect from "@/components/shared/CSelect.vue";
import {useI18n} from "vue-i18n";

const i18n = useI18n()

const options = [
	{
		text: i18n.t('pages.constructor.categorySelect.sound'),
		value: 'sound'
	},
	{
		text: i18n.t('pages.constructor.categorySelect.voice'),
		value: 'voice'
	},
]

</script>

<style scoped>
.container {
	@apply
	flex
	justify-between
	py-5
	px-8
	gap-5
}

.categories {
	@apply
	bg-card-color
	max-w-[50%]
	w-full
	p-3
	rounded
}
</style>