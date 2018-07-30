import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../css/Normalize.css";
import "../css/Header.css";
library.add(faHome, faSearch, faMapMarkerAlt)

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="navbar">
          <NavLink to="/"><button title="Home"><FontAwesomeIcon className="navitem" icon="home" /></button></NavLink>
          <form onSubmit={this.props.getProducts}>
            <input type="text" name="search_term" placeholder="Search" onChange={this.props.updateSearchTerm} />
            <button title="Search"><FontAwesomeIcon className="navitem" icon="search" /></button>
          </form>
          <NavLink to="/stores"><button title="Store Locator"><FontAwesomeIcon className="navitem" icon="map-marker-alt" /></button></NavLink>
        </div>
        <div className="refine-sort">
          <div className="refine">
            Refine by Price: <input type="text" name="min_price" placeholder="Min" onChange={this.props.updateMinPrice} /> - <input type="text" name="max_price" placeholder="Max" onChange={this.props.updateMaxPrice} /><button onClick={this.props.getProducts} title="Refine">Go</button>
          </div>
          <div className="sortby">
            Sort by: <select name="sortby" onChange={this.props.updateSortBy}>
              <option value="relevance">Best Match</option>
              <option value="bestseller">Best Sellers</option>
              <option value="price&order=asc">Price: low to high</option>
              <option value="price&order=desc">Price: high to low</option>
              <option value="customerRating&order=desc">Highest Rating</option>
              <option value="new">New</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;