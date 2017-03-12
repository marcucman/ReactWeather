var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Phoenix'>Phoenix, AZ</Link>
        </li>
        <li>
          <Link to='/?location=Seattle'>Seattle, WA</Link>
        </li>
      </ol>
    </div>
  )
};

// var Examples = (props) => { // old Examples without foundation
//   return (
//     <div>
//       <h3>Examples</h3>
//       <p>Welcome to examples page</p>
//     </div>
//   )
// };

module.exports = Examples;
