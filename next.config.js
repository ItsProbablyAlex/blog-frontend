const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
    assetPrefix: './',
    swcMinify: true,
    experimental: {
        styledComponents: true,
    },
});
