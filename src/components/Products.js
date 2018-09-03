import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../css/Products.css";

class Products extends React.Component {
  renderStarRating(rating){
    if(Math.ceil(rating) === 1){
      return <span>
        <FontAwesomeIcon icon="star" />
      </span>
    } else if (Math.ceil(rating) === 2){
      return <span>
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
      </span>
    } else if (Math.ceil(rating) === 3){
      return <span>
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
      </span>
    } else if (Math.ceil(rating) === 4){
      return <span>
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
      </span>
    } else if (Math.ceil(rating) === 5){
      return <span>
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
      </span>
    }
  }
    
  render() {
    return (
      <div className="products">
        {this.props.data.totalResults &&
        <div className="num-results">
          <p>Showing 1-{this.props.data.numItems} of {this.props.data.totalResults} results</p>
        </div>
        }
        <div className="product-listing">
          { this.props.data.items.map(item => (
            <div className="product" key={item.itemId}>
              <p><a href={item.productUrl} target="_blank"><img src={item.mediumImage} alt="" /></a></p>
              <p><a href={item.productUrl} target="_blank">{item.name}</a></p>
              {item.customerRating && <p>
                <span className="star-rating">{this.renderStarRating(item.customerRating)}</span>
                <span className="num-reviews">{item.numReviews}</span></p>}
              <p>
                {item.salePrice && <span className="sale-price">${item.salePrice.toFixed(2)}</span>}
                {item.msrp && <span className="msrp">List <s>${item.msrp.toFixed(2)}</s></span>}
              </p>
              {item.isTwoDayShippingEligible && <p className="two-day">2-day shipping</p>}
            </div>
          )) }
        </div>
      </div>
    );
  }
};

export default Products;