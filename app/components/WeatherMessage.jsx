var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {tempProp, locationProp} = this.props;
//     return (
//       <div>
//         <h3>{locationProp} is {tempProp} degrees.</h3>
//       </div>
//     );
//   }
// });

// simplified with arrow notation, skipping rendering since it doesnt pass state
// var WeatherMessage = (props) => {
//   var {tempProp, locationProp} = props;
//   return (
//     <div>
//       <h3>{locationProp} is {tempProp} degrees.</h3>
//     </div>
//   );
// }

// You can make this destructuring even simpler
var WeatherMessage = ({tempProp, locationProp}) => {
  return (
    <div>
      <h3 className="text-center">{locationProp} is {tempProp} degrees.</h3>
    </div>
  );
}

module.exports = WeatherMessage;
