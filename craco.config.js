const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
    webpack: {
        plugins: {
            add: [new BundleAnalyzerPlugin()],
        },
        configure: (webpackConfig) => {
            webpackConfig.output.filename = '[name].js';
            webpackConfig.output.chunkFilename = '[name].bundle.js';
            webpackConfig.output.path = path.resolve(__dirname, 'build');
            webpackConfig.output.clean = true;
            webpackConfig.output.publicPath = '/';

            webpackConfig.optimization.splitChunks = {
                name: (module, chunks, cacheGroupKey) => {
                    const allChunksNames = chunks.map((chunk) => chunk.name).join('-');
                    return allChunksNames;
                },
                chunks: 'all',
                cacheGroups: {
                    reactVendor: {
                        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                        name: 'vendor-react',
                        chunks: 'all',
                    },
                    corejsVendor: {
                        test: /[\\/]node_modules[\\/](core-js)[\\/]/,
                        name: 'vendor-corejs',
                        chunks: 'all',
                    },
                },
            };

            return webpackConfig;
        },
    },
};
