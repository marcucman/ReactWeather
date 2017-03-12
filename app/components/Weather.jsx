var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
    this.setState({
      isLoadingState: true,
      errorMessage: undefined // clear any error message
    });

    openWeatherMap.getTemp(locationReceived).then(function (temp) { // SUCCESS
      that.setState({
        locationState: locationReceived,
        tempState: temp,
        isLoadingState: false
      });
    }, function (e) { // FAILURE
      that.setState({
        isLoadingState: false,
        errorMessage: e.message
      });
    });
  },
  render: function () {
    var {isLoadingState, tempState, locationState, errorMessage} = this.state;

    // load either weather message or loading message
    function renderMessage() {
      if (isLoadingState) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (tempState && locationState) {
        return <WeatherMessage locationProp={locationState} tempProp={tempState}/>
      }
    }

    // load an error message if one exists
    function renderError() {
      if (typeof errorMessage === 'string') { // errorMessage exists, has not been cleared
        return (
          // create new instance of error modal, pass the error message as a prop
          <ErrorModal messageProp={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
