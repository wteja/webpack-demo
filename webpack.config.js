const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, 'src/app.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
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
        new CleanWebpackPlugin()
    ]
}