import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '@/views/Dashboard.vue';
import Css from '@/views/Css.vue';
import Icones from '@/views/Icones.vue';
import Images from '@/views/Images.vue';
import Fonts from '@/views/Fonts.vue';
import Outils from '@/views/Outils.vue';
import Packages from '@/views/Packages.vue';
import Autre from '@/views/Autre.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Dashboard',
			component: Dashboard
		},
		{
			path: '/Dev_Ressources/CSS',
			name: 'CSS',
			component: Css
		},
		{
			path: '/Dev_Ressources/Icones',
			name: 'Icones',
			component: Icones
		},
		{
			path: '/Dev_Ressources/Images',
			name: 'Images',
			component: Images
		},
		{
			path: '/Dev_Ressources/Fonts',
			name: 'Fonts',
			component: Fonts
		},
		{
			path: '/Dev_Ressources/Outils',
			name: 'Outils',
			component: Outils
		},
		{
			path: '/Dev_Ressources/Packages',
			name: 'Packages',
			component: Packages
		},
		{
			path: '/Dev_Ressources/Autre',
			name: 'Autre',
			component: Autre
		},
	]
});

export default router;