import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../css/Normalize.css";
import "../css/Header.css";
library.add(faHome, faSearch, faMapMarkerAlt)

class Header extends React.Component {
  state = {
    items: [],
    search_term: ""
	};
  
  updateSearchTerm = (e) => {
    e.preventDefault();
    e.target.value ? this.setState({search_term: e.target.value}) : this.setState({search_term: ""});
  }
    
  render() {
    return (
      <div className="header">
        <div className="navbar">
          <NavLink to="/"><button title="Home"><FontAwesomeIcon className="navitem" icon="home" /></button></NavLink>
          <div>
            <input type="text" name="search_term" placeholder="Search" onChange={this.updateSearchTerm} />
            <NavLink to={{
              pathname: '/search',
              state: { search_term: this.state.search_term }
            }}><button title="Search"><FontAwesomeIcon className="navitem" icon="search" /></button></NavLink>
          </div>
          <NavLink to="/stores"><button title="Store Locator"><FontAwesomeIcon className="navitem" icon="map-marker-alt" /></button></NavLink>
        </div>
      </div>
    );
  }
};

export default Header;