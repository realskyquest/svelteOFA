import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { imagetools } from 'vite-imagetools';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

//import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
	plugins: [imagetools(), sveltekit(), purgeCss()]
});
