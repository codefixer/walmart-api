import React from 'react';
import "../css/Normalize.css";
import "../css/Error.css";

class Error extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="error">
          <p>Error: Path does not exist! Go <a href="/">Home</a></p>
        </div>
      </div>
    );
  }
};

export default Error;