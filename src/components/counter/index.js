import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      toggle: false,
    };
  }

  componentWillMount() {
    console.log("WillMount");
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log("Render");
    const decrease = (n) => {
      this.setState({
        counter: this.state.counter - n,
      });
    };

    const increase = (n) => {
      this.setState({
        counter: this.state.counter + n,
      });
    };

    const toggle = () => {
      this.setState({ toggle: !this.state.toggle });
      document.body.classList.toggle("dark");
    };
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <h1 className="text-center"> {this.state.counter} </h1>{" "}
            <div className="d-flex justify-content-between">
              <Button variant="danger" onClick={() => decrease(3)}>
                {" "}
                -{" "}
              </Button>{" "}
              <Button variant="success" onClick={() => increase(3)}>
                {" "}
                +{" "}
              </Button>{" "}
            </div>{" "}
          </Col>{" "}
        </Row>{" "}
        <button onClick={toggle}> Toggle </button>{" "}
        <div className={`dropdown ${this.state.toggle ? "" : "d-none"}`}>
          {" "}
          <ul>
            <li className="lorem1"> lorem1 </li>{" "}
            <li className="lorem1"> lorem1 </li>{" "}
            <li className="lorem1"> lorem1 </li>{" "}
            <li className="lorem1"> lorem1 </li>{" "}
            <li className="lorem1"> lorem1 </li>{" "}
          </ul>{" "}
        </div>{" "}
      </Container>
    );
  }
}

export default Counter;
