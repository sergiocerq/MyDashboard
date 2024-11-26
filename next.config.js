/**
 * @description Configuração do Next.js para analisar o bundle gerado.
 *
 * Este arquivo contém a configuração necessária para habilitar a análise do bundle gerado pelo Next JS.
 *
 * @example
 * // Para habilitar a análise do bundle, execute o seguinte comando:
 * $ ANALYZE=true npm run build
 *
 * @see
 * Para mais informações sobre otimização de pacotes no Next.js, consulte a documentação oficial:
 * https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling
 */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({});
