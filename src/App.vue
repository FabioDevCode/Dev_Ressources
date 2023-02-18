<script setup>
import { ref } from 'vue';

const drawer = ref(null);
const items = [
	{ title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
	{ title: 'CSS', icon: 'mdi-format-color-fill', to: '/CSS' },
	{ title: 'Icones', icon: 'mdi-svg', to: '/Icones' },
	{ title: 'Images', icon: 'mdi-panorama-variant-outline', to: '/Images' },
	{ title: 'Fonts', icon: 'mdi-format-font', to: '/Fonts' },
	{ title: 'Outils', icon: 'mdi-tools', to: '/Outils' },
	{ title: 'Packages', icon: 'mdi-npm', to: '/Packages' },
	{ title: 'Autre', icon: 'mdi-message-question-outline', to: '/Autre' },
];
</script>

<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app class="bg-blue-grey-lighten-5">
			<v-list-item class="bg-blue-grey-darken-2 text-white">
				<v-list-item-content>
					<v-list-item-title class="text-h6 pa-4">
						Menu
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>


			<v-list lines="true" nav>
				<v-list-item v-for="item in items" :key="item.title" :href="item.to">
					<template v-slot:prepend>
						<v-icon>{{ item.icon }}</v-icon>
					</template>

					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>


		<v-app-bar class="bg-blue-grey-darken-3 text-white">
			<v-app-bar-nav-icon @click="drawer = !drawer">
			</v-app-bar-nav-icon>

			<v-toolbar-title>Dev Ressources</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<style scoped>

</style>