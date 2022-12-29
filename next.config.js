/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['ru', 'en', 'de', 'it'],
  //   defaultLocale: 'en'
  // },
  reactStrictMode: true,

  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    ),
    cfg.resolve.fallback = { fs: false };
    return cfg;
  },
}

module.exports = nextConfig
