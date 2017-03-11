var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoadingState: false
    }
  },
  handleSearch: function (locationReceived) {
    var that = this; // bind the this keyword properly
    // recall, this function will be executed in another file. The meaning of this will change if not bound
    this.setState({isLoadingState: true});

    openWeatherMap.getTemp(locationReceived).then(function (temp) { // SUCCESS
      that.setState({
        locationState: locationReceived,
        tempState: temp,
        isLoadingState: false
      });
    }, function (errorMessage) { // FAILURE
      alert(errorMessage);
      that.setState({isLoadingState: false});
    });
  },
  render: function () {
    var {isLoadingStatee, tempState, locationState} = this.state;

    // load either weather message or loading message
    function renderMessage() {
      if (isLoadingStatee) {
        return <h3>Fetching Weather...</h3>;
      } else if (tempState && locationState) {
        return <WeatherMessage locationProp={locationState} tempProp={tempState}/>
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
