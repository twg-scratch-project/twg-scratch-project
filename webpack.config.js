const path = require('path');


module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js',
    },
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000',
        },
        static: {
            directory: __dirname,
        },
    },
    mode: 'development',
    module: {
        rules: [
            {
              test: /\.jsx?/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env','@babel/preset-react'],
                  plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
              }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
        ]
    },
    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx'],
    }
};