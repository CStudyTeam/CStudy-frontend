const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    webpack: {
        module: {
            rules: [
                {
                    test: /.s?css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
            ],
        },
        plugins: {
            add: [
                new MiniCssExtractPlugin(),
                new BundleAnalyzerPlugin(),
                new CopyWebpackPlugin({
                    patterns: [
                        { from: 'public/favicon.ico', to: 'favicon.ico' },
                        { from: 'public/logo*', to: '[name][ext]', globOptions: { ignore: ['**/logo.svg'] } },
                        { from: 'public/earth', to: 'earth' },
                        { from: 'public/stamp', to: 'stamp' },
                        { from: 'public/manifest.json', to: 'manifest.json' },
                    ],
                }),
            ],
        },
        configure: (webpackConfig) => {
            webpackConfig.output.filename = '[name].bundle.js';
            webpackConfig.output.chunkFilename = '[name].chunk.bundle.js';
            webpackConfig.output.path = path.resolve(__dirname, 'build');
            webpackConfig.output.clean = true;

            webpackConfig.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    reactVendor: {
                        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                        name: 'react',
                        chunks: 'all',
                    },
                },
            };
            webpackConfig.optimization.minimizer = [`...`, new CssMinimizerPlugin()];

            return webpackConfig;
        },
    },
};
