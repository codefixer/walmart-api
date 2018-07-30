import React from "react";
import Header from "./Header";
import axios from "axios";
import ProductList from "./ProductList";
import { Spinner } from "spin.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../css/Products.css";
import "../css/Spinner.css";
library.add(faStar)

class Products extends React.Component {
  state = {
    items: [],
    search_term: "",
    sort_by: "relevance",
    min_price: 0,
    max_price: 10000
	};
  
  updateSearchTerm = (e) => {
    e.preventDefault();
    e.target.value ? this.setState({search_term: e.target.value}) : this.setState({search_term: ""});
  }

  updateSortBy = (e) => {
    e.persist();
    this.setState(
      { sort_by: e.target.value },
      () => this.getProducts(e)
    );
  }
  
  updateMinPrice = (e) => {
    e.target.value ? this.setState({min_price: e.target.value}) : this.setState({min_price: 0});
  }

  updateMaxPrice = (e) => {
    e.target.value ? this.setState({max_price: e.target.value}) : this.setState({max_price: 10000});
  }

  getProducts = async (e) => {
    e.preventDefault();
    if(this.state.search_term){
      var target = document.getElementById('root');
      let spinner = new Spinner({color:'#000', lines: 12}).spin(target);
      const self = this;
      axios.get(`https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=${this.state.search_term}&format=json&apiKey=${process.env.REACT_APP_API_KEY}&sort=${this.state.sort_by}&facet=on&facet.range=price:[${this.state.min_price} TO ${this.state.max_price}]`)
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
  }
  
  render() {
    return (
      <div className="page">
        <Header
            updateSearchTerm={this.updateSearchTerm}
            updateSortBy={this.updateSortBy}
            updateMinPrice={this.updateMinPrice}
            updateMaxPrice={this.updateMaxPrice}
            getProducts={this.getProducts}
          />
        <ProductList data={this.state} />
      </div>
    );
  }
};

export default Products;
