
// import "webpack";
const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
let libConfig = {
    mode: "production",
    entry: "src/",
    devtool: "source-map",
    output: {
        path: path.resolve(process.cwd(), "build/web"),
        filename: "/src/js/build.min.js",
        cssFilename: '/src/css/[name].css',
        publicPath: '/web',
        assetModuleFilename: '/src/img/[base]'
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/styles/gui.css", to: "build/web/src/css/gui.css" },
                { from: "src/styles/theme.css", to: "build/web/src/css/theme.css" }
            ]
        })
    ]
}
let config = {
    mode: "production",
    entry: path.resolve(process.cwd(), "src/js/app.js"),
    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/, use: ["css-loader"]
            }
        ]
    },
    target: "web",
    output: {
        path: path.resolve(process.cwd(), "build/web"),
        filename: "/src/js/build.min.js",
        cssFilename: '/src/css/[name].css',
        publicPath: '/public',
        assetModuleFilename: '/src/img/[base]'
    },
    devServer: {
        devMiddleware: {
            index: true,
        },
        hot: true,
        open: false,
        server: 'http',
        compress: true,
        liveReload: true,
        port: 5500,
        host: 'localhost',
        static: {
            directory: path.join(process.cwd(), 'web'),
        },
        watchFiles: ['src/js/*', 'public/**/*'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            favicon: "src/img/favicon.ico",

            filename: "web/index.html", publicPath: "/web"
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //     ]
        // })
    ]
}


module.exports = config;