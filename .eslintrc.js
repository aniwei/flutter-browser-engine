module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    "es2020": true,
    "node": true,
    "jest": true
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'o2team',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'semi': ['error', 'never'],
    'new-cap': 0,
    'brace-style': 0,
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'no-undef': 1,
    'no-undefined': 0,
    'no-lonely-if': 0,
    'no-unused-vars': 0,
    'no-useless-constructor': 0,
    'no-mixed-operators': 0,
    'no-use-before-define': 0,
    'no-duplicate-imports': 0,
    'no-await-in-loop': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': ['error', {
      types: {
        Function: false
      }
    }],
  }
}
