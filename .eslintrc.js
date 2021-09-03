module.exports = {
    extends: ['airbnb-typescript-prettier'],
    rules: {
        'no-param-reassign': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'react-hooks/exhaustive-deps': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'import/no-cycle': 'warn',
        "jsx-a11y/label-has-associated-control": [ 1, {
            "labelComponents": ["CustomInputLabel"],
            "labelAttributes": ["label"],
            "controlComponents": ["CustomInput"],
            "depth": 3,
        }]
    },
    env: {
        "browser": true,
    },
    parser: "@typescript-eslint/parser"
};
