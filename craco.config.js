const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
    webpack: {
        plugins: {
            add: [new BundleAnalyzerPlugin()],
        },
        configure: (webpackConfig) => {
            webpackConfig.output.filename = '[name].bundle.js';
            webpackConfig.output.path = path.join(__dirname, '/dist');
            webpackConfig.output.clean = true;

            webpackConfig.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    react: {
                        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                        name: 'react',
                        chunks: 'all',
                    },
                },
            };

            return webpackConfig;
        },
    },
};
