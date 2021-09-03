module.exports = {
    extends: ['airbnb-typescript-prettier'],
    rules: {
        'no-param-reassign': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'react-hooks/exhaustive-deps': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off'
    },
    env: {
        "browser": true,
    },
    parser: "@typescript-eslint/parser"
};
