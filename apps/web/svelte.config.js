import sveltePreprocess from 'svelte-preprocess';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createPreprocessors(sourceMap) {
    return sveltePreprocess({
        sourceMap,

        typescript: {
            tsconfigFile: __dirname+'/tsconfig.build.json',
        }
    });
}

export default {
    preprocess: createPreprocessors(true),
    createPreprocessors
};
