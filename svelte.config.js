import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),
    kit: {
        paths: {
            base: '/digilog-clock',
            assets: ''
        },
        prerender: {
            default: true
        },
        adapter: adapter({
            pages: 'public',
            assets: 'public',
            fallback: null
        })
    }
};

export default config;
