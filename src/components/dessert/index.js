import React, { Component } from "react";
import ItemCard from "../../components/card/ItemCard";
import { dessert } from "../../data/produts";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Alert, Badge, Button } from "react-bootstrap";
import CardCard from "../../components/card/CardCard";
import { ToastContainer, toast } from "react-toastify";
import { CARDPRODUCTS } from "../../const";
import shoppingBag from "../../assets/images/Shopping_bag.svg";
import kuda_pizza from "../../assets/images/kuda_pizza.svg";
import "./Dessert.css";
export default class Dessert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      cardProducts: JSON.parse(localStorage.getItem("cardProducts")) || [],
    };
  }
  render() {
    const handleClose = () => {
      this.setState({ show: false });
    };
    const handleShow = () => {
      this.setState({ show: true });
    };
    const changeCard = (card) => {
      this.setState({
        cardProducts: card,
      });
      localStorage.setItem(CARDPRODUCTS, JSON.stringify(card));
    };
    const getProduct = (id) => {
      let newCardProducts;
      let productInCard = this.state.cardProducts.find((el) => el.id === id);
      if (productInCard) {
        toast.info(`Product ${id}'s quantity increased to 1`);
        newCardProducts = this.state.cardProducts.map((pr) => {
          if (pr.id === id) {
            pr.quantity++;
          }
          return pr;
        });
      } else {
        let findProduct = dessert.find((el) => el.id === id);
        findProduct.quantity = 1;
        newCardProducts = [...this.state.cardProducts, findProduct];
        toast.success(`Product ${id} is added`);
      }
      changeCard(newCardProducts);
    };

    const increase = (id) => {
      console.log(id);
      let newCardProducts = this.state.cardProducts.map((pr) => {
        if (pr.id === id) {
          pr.quantity++;
        }
        return pr;
      });
      changeCard(newCardProducts);
    };
    const decrease = (id) => {
      let newCardProducts;
      let findCardProducts = this.state.cardProducts.find((el) => el.id === id);
      if (findCardProducts.quantity === 1) {
        newCardProducts = this.state.cardProducts.filter((el) => el.id !== id);
      } else {
        newCardProducts = this.state.cardProducts.map((pr) => {
          if (pr.id === id) {
            pr.quantity--;
          }
          return pr;
        });
      }
      changeCard(newCardProducts);
    };
    return (
      <>
        <ToastContainer autoClose={1000} />{" "}
        <div className="container px-3 down_header">
          <div className="card1 kuda_image_title d-flex">
            <img src={kuda_pizza} alt="" />
            <h5> Куда пицца </h5>{" "}
          </div>{" "}
          <Button className="mb-3 mt-3 badge_back" onClick={handleShow}>
            <img src={shoppingBag} alt="" />{" "}
            <Badge bg="">
              {" "}
              {this.state.cardProducts.reduce((acc, el) => {
                return acc + el.price * el.quantity;
              }, 0)}{" "}
            </Badge>{" "}
            <span className="visually-hidden">
              {" "}
              <img src={shoppingBag} alt="" />{" "}
            </span>{" "}
          </Button>{" "}
        </div>{" "}
        <div className="container">
          <div className="row p-3 g-3">
            {" "}
            {dessert.map((el) => (
              <div key={el.id} className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                <ItemCard {...el} getProduct={getProduct} />{" "}
              </div>
            ))}{" "}
          </div>{" "}
          <Offcanvas
            placement="end"
            show={this.state.show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title> Card </Offcanvas.Title>{" "}
            </Offcanvas.Header>{" "}
            <Offcanvas.Body>
              {" "}
              {this.state.cardProducts.length !== 0 ? (
                this.state.cardProducts.map((el) => (
                  <CardCard
                    key={el.id}
                    {...el}
                    decrease={decrease}
                    increase={increase}
                  />
                ))
              ) : (
                <Alert variant="warning"> Free Card </Alert>
              )}{" "}
              <Alert variant="success">
                Total price{" "}
                {this.state.cardProducts.reduce((acc, el) => {
                  return acc + el.price * el.quantity;
                }, 0)}{" "}
              </Alert>{" "}
            </Offcanvas.Body>{" "}
          </Offcanvas>{" "}
        </div>{" "}
      </>
    );
  }
}
