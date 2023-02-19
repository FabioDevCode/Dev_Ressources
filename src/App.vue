<script setup>
import { ref } from 'vue';
import Dashboard from '@/components/Dashboard.vue';
import Css from '@/components/Css.vue';
import Icones from '@/components/Icones.vue';
import Images from '@/components/Images.vue';
import Fonts from '@/components/Fonts.vue';
import Outils from '@/components/Outils.vue';
import Packages from '@/components/Packages.vue';
import Autre from '@/components/Autre.vue';

const drawer = ref(null);
const items = [
	{ title: 'Dashboard', icon: 'mdi-view-dashboard', class: 'btn_list' },
	{ title: 'CSS', icon: 'mdi-format-color-fill', class: 'btn_list' },
	{ title: 'Icones', icon: 'mdi-svg', class: 'btn_list' },
	{ title: 'Images', icon: 'mdi-panorama-variant-outline', class: 'btn_list' },
	{ title: 'Fonts', icon: 'mdi-format-font', class: 'btn_list' },
	{ title: 'Outils', icon: 'mdi-tools', class: 'btn_list' },
	{ title: 'Packages', icon: 'mdi-npm', class: 'btn_list' },
	{ title: 'Autre', icon: 'mdi-message-question-outline', class: 'btn_list' },
];

const show = ref({
	Dashboard: true,
	CSS: false,
	Icones: false,
	Images: false,
	Fonts: false,
	Outils: false,
	Packages: false,
	Autre: false
});


function display(arg) {
	for (const [key, value] of Object.entries(show.value)) {
		if(key !== arg) {
			show.value[key] = false;
		} else {
			show.value[key] = true;
		}
	};
};





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
					<v-list-item
						v-for="item in items"
						:key="item.title"
						:class="item.class"
						@click="display(item.title)"
						>

						<template v-slot:prepend>
							<v-icon>{{ item.icon }}</v-icon>
						</template>

						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar class="bg-blue-grey-darken-3 text-white">
			<v-app-bar-nav-icon 
			@click="drawer = !drawer"
			>
			</v-app-bar-nav-icon>

			<v-toolbar-title>Dev Ressources</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<Dashboard v-if="show.Dashboard" />
			<Css v-if="show.CSS" />
			<Icones v-if="show.Icones"/>
			<Images v-if="show.Images" />
			<Fonts v-if="show.Fonts" />
			<Outils v-if="show.Outils" />
			<Packages v-if="show.Packages" />
			<Autre v-if="show.Autre" />
		</v-main>
	</v-app>
</template>


<style scoped>
	.btn_list {
		cursor: pointer;
	}
	.btn_list:hover {
		background-color: rgba(0, 0, 0, .05);
	}
	.btn_list:active {
		background-color: rgba(0, 0, 0, .1);
	}

	.bg-active {
		background-color: rgba(0, 0, 0, .15);
	}

	.v-list-group-active {
		background-color: rgba(0, 0, 0, .15);
	}

	.slide-fade-enter-active {
        transition: all 300ms ease-out;
    }

    .slide-fade-leave-active {
        transition: all 300ms ease-in;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }
</style>