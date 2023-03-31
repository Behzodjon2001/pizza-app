import React, { Component } from "react";
import ItemCard from "../../components/card/ItemCard";
import { products } from "../../data/produts";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Alert, Badge, Button } from "react-bootstrap";
import CardCard from "../../components/card/CardCard";
import { ToastContainer, toast } from "react-toastify";
import { CARDPRODUCTS } from "../../const";
import shoppingBag from "../../assets/images/Shopping_bag.svg";
import kuda_pizza from "../../assets/images/kuda_pizza.svg";
import "./Dessert.css";
import CategoriesCard from "../card/CategoriesCard";
import { categories } from "../../data/categories";
import fire from "../../assets/images/Fire.svg";
import ad_image1 from "../../assets/images/ad_image1.png";
import ad_image2 from "../../assets/images/ad_image3.png";

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
        let findProduct = products.find((el) => el.id === id);
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
        <hr className="hr_backcolor" />
        <ToastContainer autoClose={1000} />{" "}
        <div className=" d-flex justify-content-between 3 down_header ">
          <div className="card1 kuda_image_title d-flex justify-content-between align-items-center">
            <img src={kuda_pizza} alt="" />
            <h5 className="kuda_pizza_w"> Куда пицца </h5>{" "}
          </div>{" "}
          <Button className="mb-3 mt-3 badge_back" onClick={handleShow}>
            <img src={shoppingBag} alt="" />{" "}
            <Badge bg="">
              {" "}
              {this.state.cardProducts.reduce((acc, el) => {
                return acc + el.price * el.quantity;
              }, 0)}{" "}
              <span> ₽ </span>{" "}
            </Badge>{" "}
            <span className="visually-hidden">
              {" "}
              <img src={shoppingBag} alt="" />{" "}
            </span>{" "}
          </Button>{" "}
        </div>{" "}
        <div className="cards_all pt-3">
          <div className="container">
            {" "}
            <div className="d-flex justify-content-center align-items-center">
              <div className="out_categories_card">
                <span className="span_categories_card">
                  <img src={fire} alt="aa" />
                  <br /> <br />
                  <h5> Акции </h5>{" "}
                </span>{" "}
              </div>{" "}
              <div className="d-flex justify-content-center align-items-center display_flex_categories">
                {" "}
                {categories.map((el, index) => (
                  <CategoriesCard key={index} {...el} />
                ))}{" "}
              </div>{" "}
            </div>{" "}
            <div className="ad_div_proveriy">
              <div className="card1ad d-flex justify-content-between p-3">
                <span className="ad_span">
                  <img src={ad_image1} alt="" />{" "}
                  <p className="srednee_pizza">
                    {" "}
                    3 средние пиццы от 999 рублей{" "}
                  </p>{" "}
                </span>{" "}
                <span className="ad_span">
                  {" "}
                  <img src={ad_image2} alt="dd" />
                  <p className="srednee_pizza">
                    {" "}
                    Кэшбек 10 % на самовывоз(доставка){" "}
                  </p>{" "}
                </span>{" "}
                <span className="ad_span">
                  {" "}
                  <img src={ad_image1} alt="" />{" "}
                  <p className="srednee_pizza">
                    {" "}
                    3 средние пиццы от 999 рублей{" "}
                  </p>{" "}
                </span>{" "}
                <span className="ad_span">
                  {" "}
                  <img src={ad_image2} alt="" />
                  <p className="srednee_pizza">
                    Кэшбек 10 % на самовывоз(доставка){" "}
                  </p>{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="d-flex justify-content-center align-items-center lacation_checked">
              <div className="cardadress">
                <h4 className="proveritadress"> Проверить адрес доставки </h4>{" "}
              </div>{" "}
              <div className="cardadress">
                <label htmlFor="text"> </label>{" "}
                <input type="text" name="text" placeholder="Адрес" />
              </div>{" "}
              <div className="cardadress">
                <button className="pruverit_button"> Проверить </button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row p-3 g-3">
              {" "}
              {products.map((el) => (
                <div key={el.id} className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                  <ItemCard {...el} getProduct={getProduct} />{" "}
                </div>
              ))}{" "}
            </div>{" "}
            <Offcanvas
              className="offcanfaas"
              placement="end"
              show={this.state.show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title> Selected products </Offcanvas.Title>{" "}
              </Offcanvas.Header>{" "}
              <Offcanvas.Body className="row p-3 g-3">
                {" "}
                {this.state.cardProducts.length !== 0 ? (
                  this.state.cardProducts.map((el) => (
                    <div
                      key={el.id}
                      className="col-lg-3 col-md-4 col-sm-6 col-12"
                    >
                      <CardCard
                        {...el}
                        decrease={decrease}
                        increase={increase}
                      />{" "}
                    </div>
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
        </div>{" "}
      </>
    );
  }
}
