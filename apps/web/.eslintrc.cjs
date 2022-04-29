module.exports = {
    root: true,

    extends: [
        '../../.eslintrc.js',
        //'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.build.json'],
        extraFileExtensions: ['.svelte']
    },

    ignorePatterns: [
        '.eslintrc.cjs',
        'rollup.config.js',
        'svelte.config.js',
        'node_modules',
        'public'
    ],

    plugins: [
        'svelte3'
    ],

    settings: {
        'svelte3/typescript': () => require('typescript'),
        'svelte3/ignore-styles': () => true
    },

    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3',
            rules: {
                'prettier/prettier': ['off', {
                    semi: false
                }],
            }
        }
    ],
};
