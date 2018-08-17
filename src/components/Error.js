import React from 'react';
import "../css/Normalize.css";
import "../css/Error.css";

class Error extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="error">
          <p>Oops! Page doesn't exist! <a href="/"><button>Go Home</button></a></p>
        </div>
      </div>
    );
  }
};

export default Error;