/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['ru', 'en', 'de', 'it'],
  //   defaultLocale: 'en'
  // },
  reactStrictMode: true,

  webpack: (cfg, opt) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    ),
      cfg.resolve.fallback = { fs: false };
    if (!opt.dev) {
      cfg.devtool = opt.isServer ? false : 'source-map';
    }
    return cfg;
  },
}

module.exports = nextConfig
