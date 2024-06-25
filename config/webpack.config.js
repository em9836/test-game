
// import "webpack";
const path = require('path');
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");

let config = {
    mode: "production",
    entry: path.resolve(process.cwd(), "src/js/app.js"),
    module: {

    },
    output: {
        path: path.resolve(process.cwd(), "build/web"),
        filename: "/src/js/[name].js",
        cssFilename: '/src/css/[name].css',
        publicPath: '/web',
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
            directory: path.join(process.cwd(), 'public'),
        },
        watchFiles: ['src/js/*', 'public/**/*'],
    },
    plugins: []
}
const envConfig = process.env.NODE_ENV === "production"? require("./webpack.config.prod.js"): config;

module.exports = (env)=>{
    return envConfig;
};