// @ts-check

// @ts-expect-error
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }
    ]
  },
  ignores: ['./node_modules/', './output/'],
}).prepend([eslintPluginUnicorn.configs['flat/recommended']]);
