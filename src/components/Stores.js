import React from "react";
import Header from "./Header";
import "../css/Stores.css";

class Stores extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="store-locator">
          <p>STORE LOCATOR</p>
        </div>
      </div>
    );
  }
};

export default Stores;
