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
            '/api/**': 'http://localhost:3000',
        },
        proxy: {
          '/auth/**': 'http://localhost:3000',
      },
        static: {
            directory: __dirname,
        },
        historyApiFallback: true,
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
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
              
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  
                  },
                ],
              },
        ]
    },
};