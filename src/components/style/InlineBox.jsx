import React, { Component } from "react";
import styled from "styled-components";
import styles from "./InlineBox.module.css";
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  padding: 10px 20px;
  &:hover {
    color: yellow;
  }
`;
export default class InlineBox extends Component {
  render() {
    return (
      <div>
        <Button color="red">Sign In</Button>
        <Button color="blue">Sign Up</Button>
        <button className={styles.image}>Submit</button>
      </div>
    );
  }
}
