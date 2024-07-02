module.exports = {
  // Другие настройки...
  module: {
    rules: [
      // Другие правила...
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
