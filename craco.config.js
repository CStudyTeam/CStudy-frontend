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
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: [0.65, 0.9],
                                    speed: 4,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                svgo: {
                                    enabled: true,
                                },
                                webp: {
                                    quality: 75,
                                },
                            },
                        },
                    ],
                },
            ],
        },
        plugins: {
            add: [
                new MiniCssExtractPlugin({
                    filename: 'styles/[name].css',
                    chunkFilename: 'styles/[id].css',
                }),
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
                name: (module, chunks, cacheGroupKey) => {
                    const allChunksNames = chunks.map((chunk) => chunk.name).join('-');
                    return allChunksNames;
                },
                cacheGroups: {
                    corejsVendor: {
                        test: /[\\/]node_modules[\\/](core-js)[\\/]/,
                        name: 'corejs',
                        chunks: 'all',
                        priority: 90,
                    },
                    reactVendor: {
                        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                        name: 'react',
                        chunks: 'all',
                        priority: 80,
                    },
                    axiosAndReactQuery: {
                        test: /[\\/]node_modules[\\/](axios|@tanstack)[\\/]/,
                        name: 'axios-react-query',
                        chunks: 'all',
                        priority: 70,
                    },
                    threeVendor: {
                        test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
                        name: 'three',
                        chunks: 'all',
                        priority: 60,
                    },
                },
            };
            webpackConfig.optimization.minimizer = [`...`, new CssMinimizerPlugin()];
            webpackConfig.optimization.minimize = true;

            return webpackConfig;
        },
    },
};
