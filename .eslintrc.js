module.exports = {
    extends: ['airbnb-typescript-prettier'],
    rules: {
        'no-param-reassign': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'react-hooks/exhaustive-deps': 'off',
    },
    env: {
        "browser": true,
    },
    parser: "@typescript-eslint/parser"
};
