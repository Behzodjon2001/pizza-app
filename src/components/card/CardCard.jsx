import React, { Component } from "react";

export default class CardCard extends Component {
  render() {
    let {
      id,
      image,

      name,
      description,

      quantity,
      decrease,
      increase,
    } = this.props;
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <button className="btn btn-danger" onClick={() => decrease(id)}>
                  -
                </button>
                <small className="text-body-secondary m-3">{quantity}</small>
                <button
                  className="btn btn-success"
                  onClick={() => increase(id)}
                >
                  +
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
