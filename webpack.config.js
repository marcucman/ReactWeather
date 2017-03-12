var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', // use script-loader npm module
    'script!foundation-sites/dist/foundation.min.js', // use script-loader npm module
    './app/app.jsx'
  ], // where to pull the app code from
  externals: { // key = module name, value = variable name we want available in external script files
    jquery: 'jQuery' // allows foundation properly attach methods to jQuery object
  },
  plugins: [
    new webpack.ProvidePlugin({ // key = variable name to watch for, value = module to replace with
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname, // gives the path to the current folder (the root directoy)
    filename: './public/bundle.js' // where to compile the app code at
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx', // weather api
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.css'
    },
    extensions: ['', '.js', '.jsx'] // all the types of files to include
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
