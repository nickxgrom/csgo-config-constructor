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
					class="dropdown-menu switch-lang-btn"
					tabindex="0"
					@blur="toggleSwitchLangMenu('remove')"
				>
					<div
						@click="toggleSwitchLangMenu"
						class="btn"
					>
						<mdicon name="translate"/>
					</div>
					<div class="dropdown-menu__content">
						<div
							v-for="locale in locales"
							:key="locale.code"
							class="locale-item"
							@click="changeLanguage(locale.code)"
						>
							{{ locale.name }}
						</div>
					</div>
				</div>
				<div
					@click="changeTheme"
					class="btn"
				>
					<mdicon
						:name="theme === 'light' ? 'weather-night' : 'weather-sunny'"
					/>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { ref } from "vue";
import { useI18n } from "vue-i18n";
export default {
	name: "Header",
	setup() {
		const route = useRoute(),
			router = useRouter(),
			i18n = useI18n()


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
		let theme = ref(document.body.getAttribute('data-theme'))
		localStorage.setItem('theme', theme.value)

		function goto(path) {
			if (path === route.path) return
			router.push(path)
		}

		function changeTheme() {
			const isLight = document.body.getAttribute('data-theme') === 'light'
			document.body.setAttribute('data-theme', isLight ? 'dark' : 'light')

			const dataTheme = document.body.getAttribute('data-theme')
			localStorage.setItem('theme', dataTheme)
			theme.value = dataTheme
		}

		function toggleSwitchLangMenu(action) {
			const switchLangBtn = document.querySelector('.switch-lang-btn'),
				switchLangActivator = switchLangBtn.querySelector('.btn')
			if (action === 'remove') {
				switchLangBtn.classList.remove('active')
				switchLangActivator.classList.remove('active')
			} else {
				switchLangBtn.classList.toggle('active')
				switchLangActivator.classList.toggle('active')
			}
		}

		function changeLanguage(code) {
			i18n.locale.value = code
			toggleSwitchLangMenu()
		}

		return {
			goto,
			changeTheme,
			toggleSwitchLangMenu,
			changeLanguage,
			route,
			navList,
			theme,
			locales: [
				{
					name: 'English',
					code: 'en-US'
				},
				{
					name: 'Русский',
					code: 'ru-RU'
				}
			]
		}
	}
}
</script>
