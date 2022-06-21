/**
 * @type {import('prettier').Options}
 */
module.exports = {
  printWidth: 120,
  tabWidth: 4,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: true,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^@plasmohq/(.*)$", "^~(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  singleAttributePerLine: true,
}
