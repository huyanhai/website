import globals from 'globals';
import pluginJs from '@eslint/js';
import typescriptLint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  pluginJs.configs.recommended,
  ...typescriptLint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.tsx'],
    rules: {
      'no-undef': 'error',
      complexity: ['error', 10], // 圈复杂度
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-non-null-asserted-optional-chain': ['warn']
    }
  },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      'node_modules',
      'dist',
      'commitlint.config.js',
      'eslint.config.mjs',
      'tailwind.config.js'
    ]
  }
];
