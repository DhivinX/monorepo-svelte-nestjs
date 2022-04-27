module.exports = {
    parser: '@typescript-eslint/parser',

    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended'
    ],

    env: {
        es6: true,
        browser: true,
        node: true
    },

    plugins: [
        '@typescript-eslint'
    ],

    ignorePatterns: [
        'node_modules',
        'dist'
    ],

    rules:{
        'prettier/prettier': ['warn', {
            tabWidth: 4,
            singleQuote: true
        }],

        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',

        semi: ['error', 'always'],
        quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    }
};
