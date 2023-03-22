<template>
	<header>
		<div class="container">
			<nav>
				<a
					v-for="item in navList"
					@click.prevent="goto(item.path)"
					:href="item.path"
					:class="{ 'link__active': route.path === item.path }"
				>
					{{ item.name }}
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

		const navList = [
			{
				name: 'Constructor',
				path: '/constructor'
			},
			{
				name: 'Configs',
				path: '/configs'
			},
			{
				name: 'How to...',
				path: '/howto'
			},
		]

		function goto(path) {
			if (path === route.path) return
			router.push(path)
		}

		return { goto, route, navList }
	}
}
</script>
