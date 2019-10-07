const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: path.join(__dirname, 'src/dev.js'),
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
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        hot: true,
        compress: true,
        port: 8080
    }
}