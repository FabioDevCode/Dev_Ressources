<script setup>
import { ref } from 'vue';
const drawer = ref(null);
const items = [
	{ title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
	{ title: 'Projets', icon: 'mdi-file-presentation-box', to: '/projets' },
	{ title: 'Informations', icon: 'mdi-account-box', to: '/informations' },
	{ title: 'Documents', icon: 'mdi-file-document', to: '/documents' },
	{ title: 'Réglages', icon: 'mdi-cog', to: '/reglages' },
];

</script>

<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app class="bg-indigo-lighten-5">
			<v-list-item class="bg-indigo-darken-4 text-white">
				<v-list-item-content>
					<v-list-item-title class="text-h6 pa-4">
						Menu
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list lines="true" nav>
				<v-list-item v-for="item in items" :key="item.title" :href="item.to" link="true">
					<template v-slot:prepend>
						<v-icon>{{ item.icon }}</v-icon>
					</template>

					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>


		</v-navigation-drawer>


		<v-app-bar class="bg-indigo-darken-4 text-white">
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
	html {
		overflow: hidden !important;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	html::-webkit-scrollbar {
		width: 0;
		height: 0;
	}


</style>