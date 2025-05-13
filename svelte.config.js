/** @import { Config } from '@sveltejs/kit*/

import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {Config} */
export default {
    preprocess: vitePreprocess(),
    kit: { adapter: adapter({ fallback: '404.html' }) },
};
