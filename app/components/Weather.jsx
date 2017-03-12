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
      errorMessage: undefined, // clear any error message
      locationState: undefined,
      tempState: undefined
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
  componentDidMount: function () {
    // react-router gives you access to the query string through props
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      // set the URL to the Root directory
      window.location.hash = '#/';
    }
  },
  // this will fire when the URL changes and will receive the props sent by react-router
  // this handles the case when the top-right search is used while the user is on the Get Weather page
  componentWillReceiveProps: function(newProps) { // update props
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      // set the URL to the Root directory
      window.location.hash = '#/';
    }
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
