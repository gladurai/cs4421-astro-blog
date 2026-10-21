import tsParser from '@typescript-eslint/parser';

export default [
    {
        ignores: ["dist/**", ".astro/**", "node_modules"]
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    },
    {
        files: ["cdk/test/**/*.ts"],
        languageOptions: {
            globals: {
                test: "readonly"
            }
        }
    }
];