const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        main: "./app.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',

                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: 'sass-loader',

                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            // favicon: "./public/favicon.ico",
        }),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },
    devServer: {
        historyApiFallback: true,
    },
};
