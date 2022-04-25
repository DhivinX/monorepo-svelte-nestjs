import sveltePreprocess from 'svelte-preprocess';

function createPreprocessors(sourceMap) {
    return sveltePreprocess({
        sourceMap
    });
}

export default {
    preprocess: createPreprocessors(true),
    createPreprocessors
};
