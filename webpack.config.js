/** @format */

const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node', // Aggiunto per specificare il target Node.js
  entry: './src/index.ts', // Punto di ingresso rimane invariato
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js', // Nome del file di output può essere semplificato
    libraryTarget: 'commonjs2', // Opzionale, per esportare correttamente il tuo bundle come modulo
  },
  resolve: {
    extensions: ['.ts', '.js'], // Rimossa l'opzione '.css'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Rimosse le regole per il CSS
    ],
  },
  plugins: [
    // Plugin rimossi
  ],
  devtool: 'inline-source-map
