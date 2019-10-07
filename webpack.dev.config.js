const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.(jpeg|jpg|gif|png)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        port: 8080
    }
}