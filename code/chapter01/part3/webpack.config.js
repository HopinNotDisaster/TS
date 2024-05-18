const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {

    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),

        filename: "bundle.js",
        // 告诉webpack不要使用箭头函数
        environment: {
            arrowFunction: false
        }
    },
    module: {

        rules: [
            {
                test: /\.ts$/,
                use: [

                    //配置babel
                    {
                        //指定加载器！
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息！
                                    {
                                        // 要兼容的
                                        targets: {
                                            "chrome": "87"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }


                    },
                    'ts-loader',

                ],
                exclude: /node-modeles/
            }

        ]
    },

    mode: 'production',

    // 配置webpack的插件！
    plugins: [
        new HTMLWebpackPlugin({
            // 可以指定生成的模板！
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],

    resolve: {
        extensions: ['.ts', '.js']//表示只要扩展名是ts和js的都可以作为模块使
    },

};