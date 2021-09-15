module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|mp4)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
            },
          },
        ],
      },
    ],
  },
};
// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push(
//       {
//         test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
//         loader: 'url-loader?limit=100000' 
//       }
//     )
//     return config
//   },
// }
// module.exports = {
//   reactStrictMode: true,
//   mode: 'production',
// }
