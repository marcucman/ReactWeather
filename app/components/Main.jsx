var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav/>
//         <h2>Main Component</h2>
//         {/* React.Router will take care of this */}
//         {this.props.children}
//         {/* this indicates where children components should go */}
//         {/* these children as passed in as props in the subroutes in app.jsx */}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {/* React.Router will take care of this */}
      {props.children}
      {/* this indicates where children components should go */}
      {/* these children as passed in as props in the subroutes in app.jsx */}
    </div>
  );
};

module.exports = Main;
