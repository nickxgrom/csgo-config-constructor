<template>
	<div class="page-title">
		<h1>{{ $t('pages.constructor.title') }}</h1>
	</div>
	<div class="container">
		<div class="categories">
			<c-select
				:options="options"
				class="mb-3"
			/>
			<div class="commands-list">
				<command-card
					v-for="c in 5"
					:key="5"
					name="volume"
					description="aalsij aldioj aodsij saodifjlk asodijkldsao"
				>
				</command-card>
			</div>
		</div>
		<div>wip</div>
	</div>
</template>

<script setup>
import CSelect from "@/components/shared/CSelect.vue";
import {useI18n} from "vue-i18n";
import CommandCard from "@/components/CommandCard.vue";

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
	p-3
	rounded
}

.commands-list {
	@apply
	flex
	flex-row
	flex-wrap
	gap-2
}
</style>