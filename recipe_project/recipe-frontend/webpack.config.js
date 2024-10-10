const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Входная точка приложения
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    filename: 'bundle.js', // Имя выходного файла
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Правила для JavaScript/React
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Правила для CSS
        use: ['style-loader', 'css-loader'], // Загружаем CSS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Расширения для автоматического разрешения
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: './dist', // Папка с статическими файлами
    port: 3000,
  },
};