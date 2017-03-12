var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// var About = function (props) {
//   return (
//     <h3>About Component</h3>
//   )
// };

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built with React and Foundation.
        Enter a city name and get the temperature for that city.</p>
      <p>Here are some of the tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - This was used to return weather data
        </li>
      </ul>
    </div>
  )
};

// var About = (props) => { // old About without Foundation
//   return (
//     <div>
//       <h3>About</h3>
//       <p>Welcome to the About Page</p>
//     </div>
//   )
// };

module.exports = About;
