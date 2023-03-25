<script setup>
	import Header from "./components/Header.vue";
	import { useRoute, useRouter } from "vue-router"

	const route = useRoute(),
		router = useRouter()

	if (route.path === '/') {
		router.push('/constructor')
	}
</script>

<template>
	<Header/>
	<div class="wrapper">
		<router-view/>
	</div>
</template>

