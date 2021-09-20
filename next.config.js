module.exports = {
  distDir: 'build',
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