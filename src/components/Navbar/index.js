import React, { Component } from "react";
import "./Navbar.scss";
import location from "../../assets/images/Location.svg";
import account from "../../assets/images/Account.svg";
export default class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="container px-3 d-flex justify-content-between align-items-center">
          <div className="card1 d-flex justify-content-center align-items-center">
            <div className="moskva d-flex justify-content-center align-items-center">
              <img src={location} alt="lokation" />
              <h5> Москва </h5>{" "}
            </div>{" "}
            <div>
              <h5> Проверить адрес </h5>{" "}
            </div>{" "}
            <div className="">
              <h5> Среднее время доставки *: 00: 24: 19 </h5>{" "}
            </div>{" "}
            <div> </div>{" "}
          </div>{" "}
          <div className="card2 d-flex">
            {" "}
            <h5> Время работы: с 11: 00 до 23: 00 </h5>{" "}
            <div className="voytivaccount d-flex justify-content-center align-items-center g-2">
              <img src={account} alt="" />
              <h5> Войти в аккаунт </h5>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
