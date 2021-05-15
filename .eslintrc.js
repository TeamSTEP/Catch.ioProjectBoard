module.exports = {
    root: true,
    env: {
        node: true,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'error',
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'prettier',
        '@vue/typescript',
        '@vue/prettier',
    ],
    plugins: ['vue', 'prettier'],
};
