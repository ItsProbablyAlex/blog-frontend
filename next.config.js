const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
    swcMinify: true,
    experimental: {
        styledComponents: true,
    },
    webpack: (config, { isServer, webpack }) => {
        if (!isServer) {
            config.plugins.push(new webpack.IgnorePlugin({
                resourceRegExp: /^(graphql|@apollo\/client)$/,
            }));
        }
        return config;
    },
    productionBrowserSourceMaps: true,
});
