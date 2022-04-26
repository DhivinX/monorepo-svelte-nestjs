module.exports = {
    parser: '@typescript-eslint/parser',
    
    root: true,

    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.build.json'],
        extraFileExtensions: ['.svelte']
    },

    env: {
        es6: true,
        browser: true
    },

    settings: {
        'svelte3/typescript': () => require('typescript'),
        'svelte3/ignore-styles': () => true
    },

    plugins: [
        'svelte3', 
        '@typescript-eslint'
    ],

    ignorePatterns: [
        '.eslintrc.cjs',
        'rollup.config.js',
        'svelte.config.js',
        'node_modules',
        'public'
    ],

    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3',
            rules:{
                semi: ['error', 'always'],
            }
        }
    ],

    rules:{
        semi: ['error', 'always'],
    }
};
