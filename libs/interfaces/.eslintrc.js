module.exports = {
    root: true,

    extends: [
        '../../.eslintrc.js',
    ],

    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.build.json',
        sourceType: 'module',
    },

    ignorePatterns: [
        '.eslintrc.js', 
        'node_modules',
        'dist'
    ]
};
