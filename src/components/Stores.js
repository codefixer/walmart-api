import React from "react";
import Header from "./Header";
import "../css/Normalize.css";
import "../css/Stores.css";

class Stores extends React.Component {
  render() {
    return (
      <div className="page">
        <Header
            updateSearchTerm={this.updateSearchTerm}
            updateSortBy={this.updateSortBy}
            updateMinPrice={this.updateMinPrice}
            updateMaxPrice={this.updateMaxPrice}
            getProducts={this.getProducts}
            handleClick={this.handleClick}
          />
        <div className="store-locator">
          <p>STORE LOCATOR (TO COME)</p>
        </div>
      </div>
    );
  }
};

export default Stores;
