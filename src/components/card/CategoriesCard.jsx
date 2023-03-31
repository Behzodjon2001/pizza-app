import React, { Component } from "react";
import "./CategoriesCard.css";
export default class CategoriesCard extends Component {
  render() {
    return (
      <div className="container">
        <div className=" px-3 d-flex justify-content-center align-items-center card_header_all">
          <div className="out_categories_card d-flex">
            <span className="span_categories_card">
              <img src={this.props.image} alt="aa" />
              <br />
              <br />
              <h5>{this.props.name}</h5>{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
