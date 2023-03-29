import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
export default class Toastify extends Component {
  render() {
    const notify = () => {
      toast.success("Qo'shildi", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
      });
    };
    return (
      <div>
        {" "}
        <button onClick={notify}> Notify! </button> <ToastContainer />{" "}
      </div>
    );
  }
}
