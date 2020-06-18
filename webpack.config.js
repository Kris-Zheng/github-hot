const path = require('path');

module.exports = function (env, argv) {
    const isEnvDevelopment = argv.mode === "development" || !argv.mode;
    const isEnvProduction = argv.mode === "production";

    return {
        mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            // {
            //     test: /\.css$/,
            //     include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
            //     use: ["style-loader", "css-loader", "postcss-loader"]
            // }
            ]
        }
    };
}
