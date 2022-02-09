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
            config.plugins.push(
                new webpack.IgnorePlugin({
                  checkResource(resource, context) {
                    // If I am including something from my backend directory, I am sure that this shouldn't be included in my frontend bundle
                    if (resource.includes('/lib/backend') && !context.includes('node_modules')) {
                      return true;
                    }
                    return false;
                  },
                }),
            );
        }
        return config;
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/about',
            permanent: true,
          },
        ]
    },
    productionBrowserSourceMaps: true,
});
