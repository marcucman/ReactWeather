var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var locationToRequest = this.refs.locationSearch.value;

    if (locationToRequest.length > 0) {
      this.refs.locationSearch.value = ''; // clear the input
      this.props.onSearch(locationToRequest);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="locationSearch" placeholder="Enter City Name"/><br />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
