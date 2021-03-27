const path = require("path");

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
        publicPath:'/'
    },
    target: "node",
    devServer: {
        port: "9500",
        contentBase: ["./public"],
        open: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".js",".jsx",".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}