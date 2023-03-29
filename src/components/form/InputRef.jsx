import React, { Component, createRef } from "react";

export default class InputRef extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
    this.inputRef = createRef();
  }

  render() {
    const getValue = () => {
      this.setState({ value: this.inputRef.current.value });
    };
    return (
      <div>
        <input ref={this.inputRef} type="text" id="name" onChange={getValue} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}
