var React = require('react');

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
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    var {titleProp, messageProp} = this.props; // use destructuring to pull props into variables
    return (
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
  }
});

module.exports = ErrorModal;
