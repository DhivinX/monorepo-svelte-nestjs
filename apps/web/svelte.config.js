import sveltePreprocess from 'svelte-preprocess';

function createPreprocessors(sourceMap) {
    return sveltePreprocess({
        sourceMap,

        typescript: {
            tsconfigFile: './tsconfig.build.json',
        }
    });
}

export default {
    preprocess: createPreprocessors(true),
    createPreprocessors
};
