import React, { Component } from "react";
import Dessert from "../components/dessert";
import Navbar from "../components/Navbar";

// import InputForward from "../components/form/InputForward";
// import Counter from "../components/counter";
// import InputRef from "../components/form/InputRef";
// import Dessert from "../components/dessert";
// import InlineBox from "../components/style/InlineBox";
// import Toastify from "../components/toastify";
// import { dessert } from "../data/produts";
// import Katolog from "../components/Katolog";
// import Navbar from "../components/navbar";
// import "./homework.scss";
export default class Homework extends Component {
  render() {
    return (
      <>
        <div className=" ">
          <Navbar />

          <Dessert />
        </div>
      </>
    );
  }
}
