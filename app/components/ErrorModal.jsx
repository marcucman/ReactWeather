var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      titleProp: 'Error'
    };
  },
  propTypes: {
    titleProp: React.PropTypes.string, // titleProp must be a string
    messageProp: React.PropTypes.string.isRequired // message must exist
  },
  componentDidMount: function () {
    var {titleProp, messageProp} = this.props; // use destructuring to pull props into variables
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{titleProp}</h4>
        <p>{messageProp}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    // ReactDOMServer.renderToString() turns JSX code to string
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    // to prevent DOM problems, this should return an empty div
    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
