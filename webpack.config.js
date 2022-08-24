const path = require('path');
const webpack = require('webpack'); 

module.exports = {
  mode: 'production',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: {
      name: 'AsyncAPIParser',
      type: 'window'
    },
  },
  resolve: { 
    fallback: { 
      http: false,
      https: false, 
      url: require.resolve('url'),
      path: require.resolve('path-browserify'),
      util: require.resolve('util')
    }
  },
  plugins: [new webpack.ProvidePlugin({ 
    process: 'process/browser',
    Buffer: ['buffer', 'Buffer']
  })]
};
