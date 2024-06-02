/** @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
export default {
  singleQuote: true,
  proseWrap: 'always',
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrderTypeScriptVersion: '5.4.0',
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '<TYPES>',
    '<TYPES>^[.]',
    '^[.]',
  ],
};
