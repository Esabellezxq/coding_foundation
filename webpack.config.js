const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const CleanWebpackPlugin =  require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        frame: './src/jsFrameAnimation/test.js'
    },
    output: {
        filename: 'js/[name]-[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'jsFrame.html',
            template: 'src/jsFrameAnimation/jsFrame.html',
            inject: 'body',
            chunks: ['frame']
        }),
        // new CleanWebpackPlugin(['dist'])
    ],
    
}