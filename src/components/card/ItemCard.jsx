import React, { Component } from "react";

export default class ItemCard extends Component {
  render() {
    let { id, image, name, description, price, getProduct } = this.props;
    return (
      <div>
        <div className="card">
          <div className="container">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <p className="btn btn-primary" onClick={() => getProduct(id)}>
                  Add to card
                </p>
                <p>{price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
