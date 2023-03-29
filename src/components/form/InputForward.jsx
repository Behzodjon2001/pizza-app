import React, { Component } from "react";

class InputForward extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  render() {
    const getRef = () => {
      console.log(this.inputRef.current.value);
    };
    return (
      <InputText ref={this.inputRef} getRef={getRef} placeholder="username" />
    );
  }
}

export default InputForward;

const InputText = React.forwardRef((props, ref) => (
  <input onChange={props.getRef} ref={ref} {...props} />
));
