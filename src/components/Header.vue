<template>
	<header>
		<div class="container">
			<nav>
				<a
					@click.prevent="goto('/constructor')"
					href="/constructor"
					:class="{ 'link__active': route.path === '/constructor' }"
				>
					Constructor
				</a>
				<a
					@click.prevent="goto('/configs')"
					href="/configs"
					:class="{ 'link__active': route.path === '/configs' }"
				>
					Configs
				</a>
				<a
					@click.prevent="goto('/howto')"
					href="/howto"
					:class="{ 'link__active': route.path === '/howto' }"
				>
					How to...
				</a>
			</nav>

			<div class="menu">
				<div title="Work in progress">
					Sign In
				</div>
				<mdicon name="translate"/>
				<mdicon name="theme-light-dark"/>
			</div>
		</div>
	</header>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
export default {
	name: "Header",
	setup() {
		const route = useRoute(),
			router = useRouter()


		function goto(path) {
			if (path === route.path) return
			router.push(path)
		}

		return { goto, route }
	}
}
</script>
