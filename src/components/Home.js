import React from "react";
import Header from "./Header";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="home">
          <p>PLEASE TRY THE PRODUCT SEARCH ABOVE</p>
        </div>
      </div>
    );
  }
};

export default Home;
