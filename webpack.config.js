const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HTMLplugin = require("html-webpack-plugin");
const webpack = require("webpack");
const isDev = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = {
    target: 'web', //web 平台
    entry: path.join(__dirname, "src/index.js"), //入口文件
    output: {   //出口文件
        filename: 'bundle.js',
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(git|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',//将图片转为base64 , 如果file-loader , 则将图片放入另一个位置
                        options: {
                            limit: 10000,
                            name: '[name]-aaa.[ext]' //图片原文件的名称为[name].[ext]
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader', // 3 将js 插入 html 里
                    'css-loader',  // 2 将css 文件编译成js
                    // {
                    //     loader: 'post-css-loader',  //将之前编译的sourceMap直接拿来用 提高效率
                    //     options: {
                    //         sourceMap: true
                    //     }
                    // },
                    'stylus-loader' // 1 将styl 文件编译成css文件
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLplugin(),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devtool: '#cheap-module-eval-source-map',//调式组件
    devServer: {
        port: 8000,
        host: '127.0.0.1',
        overlay: {
            errors: true, //将错误输出到网页
        },
        open: true,//打开默认浏览器
        hot: true //热部署

    }
}
if (this.isDev) {
    // config.module.rules.push({
    //     test: /\.styl/,
    //     use: [
    //         'style-loader',
    //         'css-loader',
    //         {
    //             loader: 'postcss-loader',
    //             options: {
    //                 sourceMap: true,
    //             }
    //         },
    //         'stylus-loader'
    //     ]
    // });
    // config.module.rules.push(
    //     {
    //       test: /\.styl(us)?$/,
    //       use: [
    //         'style-loader',
    //         'css-loader',
    //         {
    //           loader: 'postcss-loader',
    //           options: {
    //             sourceMap: true,
    //           }
    //         },
    //         'stylus-loader'
    //       ]
    //     }
    //   );
    config.devtool = '#cheap-module-eval-source-map'; //帮助我们调试代码
    //dev配置
    config.devServer = {
        port: 8000,
        host: '127.0.0.1',
        overlay: { //错误显示在网页上
            errors: true
        },
        hot: false //热更新，只重新渲染该页面的组件
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(), //配合hot使用
        new webpack.NoEmitOnErrorsPlugin() //减少不需要的信息展示
    );
} else {
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    }
    config.output.filename = '[name].[hash].js';
    // 因为hash存在弊端， 每次编译的时候js\css 命名不一样， 而chunkhash可以解决
    //这里的hash由chunkhash改成hash，原因是使用HotModuleReplacementPlugin之后不能使用chunkhash和contenthash。
    config.plugins.push(new MiniCssExtractPlugin({
        // 类似 webpackOptions.output里面的配置 可以忽略
        filename: '[name].css',
        chunkFilename: '[id].css',
    }));
    config.optimization = {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: true
    }
}
module.exports = config;