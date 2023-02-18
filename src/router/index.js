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
			path: '/CSS',
			name: 'CSS',
			component: Css
		},
		{
			path: '/Icones',
			name: 'Icones',
			component: Icones
		},
		{
			path: '/Images',
			name: 'Images',
			component: Images
		},
		{
			path: '/Fonts',
			name: 'Fonts',
			component: Fonts
		},
		{
			path: '/Outils',
			name: 'Outils',
			component: Outils
		},
		{
			path: '/Packages',
			name: 'Packages',
			component: Packages
		},
		{
			path: '/Autre',
			name: 'Autre',
			component: Autre
		},
	]
});

export default router;