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
  
  componentDidMount() {
    if (this.props.search_term) {
      this.setState({search_term: this.props.search_term});
    }
  }
  
  updateSearchTerm = (e) => {
    e.preventDefault();
    e.target.value ? this.setState({search_term: e.target.value}) : this.setState({search_term: ""});
  }
  
  handleSearchClick(e){
    if(this.state.search_term === "") e.preventDefault()
  }

  render() {      
    return (
      <div className="header">
        <div className="navbar">
          <NavLink to="/">
            <button title="Home">
              <FontAwesomeIcon className="navitem" icon="home" />
            </button>
          </NavLink>
          <form>
            <input type="search" name="search_term" placeholder="Search" onChange={this.updateSearchTerm} value={this.state.search_term} />
            <NavLink onClick={(e) => this.handleSearchClick(e)} to={{
              pathname: '/search',
              state: { search_term: this.state.search_term }
            }}>
              <button title="Search">
                <FontAwesomeIcon className="navitem" icon="search" />
              </button>
            </NavLink>
          </form>
          <NavLink to="/stores">
            <button title="Store Locator">
              <FontAwesomeIcon className="navitem" icon="map-marker-alt" />
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
};

export default Header;