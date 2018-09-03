import React from "react";
import Header from "./Header";
import axios from "axios";
import Products from "./Products";
import { Spinner } from "spin.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../css/Spinner.css";
import "../css/Search.css";
library.add(faStar)

class Search extends React.Component {
  state = {
    items: [],
    sort_by: "relevance",
    min_price: 0,
    max_price: 10000
	};
  
  updateSortBy = (e) => {
    e.persist();
    this.setState(
      { sort_by: e.target.value },
      () => this.getProducts()
    );
  }
  
  updateMinPrice = (e) => {
    e.target.value ? this.setState({min_price: e.target.value}) : this.setState({min_price: 0});
  }

  updateMaxPrice = (e) => {
    e.target.value ? this.setState({max_price: e.target.value}) : this.setState({max_price: 10000});
  }
  
  getProducts = () => {
    const target = document.getElementById('root');
    let spinner = new Spinner({color:'#000', lines: 12}).spin(target);
    const self = this;
    const API_CALL = `https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search` +
      `?query=${this.props.location.state.search_term}` +
      `&format=json&apiKey=${process.env.REACT_APP_API_KEY}` +
      `&sort=${this.state.sort_by}` +
      `&facet=on` +
      `&facet.range=price:[` +
      `${this.state.min_price}` +
      ` TO ` +
      `${this.state.max_price}]`;
    console.log(this.props.location.state.search_term);
    console.log(this.state.sort_by);
    console.log(this.state.min_price);
    console.log(this.state.max_price);
    console.log(API_CALL)
    axios.get(API_CALL)
    .then(function (response) {
      // handle success
      console.log(response.data);
      self.setState(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      spinner.stop();
    });
  }

  componentDidMount() {
    if(this.props.location.state.search_term){
      this.getProducts();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.state.search_term !== prevProps.location.state.search_term) {
      this.getProducts()
    }
  }
  
  render() {
    return (
      <div className="page">
        <Header search_term={this.props.location.state.search_term} />
        <div className="search">
          <div className="refine-sort">
            <div className="refine">
              Refine by Price: <input type="text" name="min_price" placeholder="Min" onChange={this.updateMinPrice} /> - <input type="text" name="max_price" placeholder="Max" onChange={this.updateMaxPrice} /><button onClick={this.getProducts} title="Refine">Go</button>
            </div>
            <div className="sortby">
              Sort by: <select name="sortby" onChange={this.updateSortBy}>
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
        <Products data={this.state} />
      </div>
    );
  }
};

export default Search;
