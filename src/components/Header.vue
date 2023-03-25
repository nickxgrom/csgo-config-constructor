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
				<div
					class="btn"
					title="Work in progress"
				>
					Sign In
				</div>
				<div
					class="btn"
					title="Work in progress"
				>
					<mdicon name="translate"/>
				</div>
				<div
					@click="changeTheme"
					class="btn"
				>
					<mdicon name="theme-light-dark"/>
				</div>
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

		document.body.setAttribute('data-theme', localStorage.getItem('theme') || 'light')
		localStorage.setItem('theme', document.body.getAttribute('data-theme'))

		function goto(path) {
			if (path === route.path) return
			router.push(path)
		}

		function changeTheme() {
			const isLight = document.body.getAttribute('data-theme') === 'light'
			document.body.setAttribute('data-theme', isLight ? 'dark' : 'light')

			localStorage.setItem('theme', document.body.getAttribute('data-theme'))
		}

		return { goto, route, navList, changeTheme }
	}
}
</script>
