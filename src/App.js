import React, { Component } from "react";
import "./App.css";

const styles = {
  maindiv: {
    backgroundColor: "skyblue",
    height: window.innerHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: "white"
  },
  button: {
    backgroundColor: "red",
    width: 100,
    height: 40,
    marginLeft: 20,
    marginTop: 20
  }
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [
        "Yuv",
        "Mohit",
        "Sharavn",
        "Loki",
        "Bharat",
        "Divyansh",
        "Anju",
        "Devendra",
        "Shahid",
        "Mayank",
        "Radhika",
        "Amit"
      ],
      index: 0,
      color: "skyblue"
    };
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.color,
          height: window.innerHeight,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            padding: 20,
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <span style={{ color: "white" }}>
            <u> Parent Component</u>
          </span>
          <span style={styles.text}>
            Hello {this.state.name[this.state.index]} !!!!
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <button
            style={styles.button}
            onClick={e => {
              e.preventDefault();
              this.setState({ index: Math.floor(Math.random() * 11) });
            }}
          >
            Change Name
          </button>
          <button
            style={styles.button}
            onClick={e => {
              e.preventDefault();
              this.setState({
                color: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
                  Math.random() * 255
                )},${Math.floor(Math.random() * 255)})`
              });
            }}
          >
            Change Background
          </button>
        </div>
        <br />
        <Test name={this.state.name[this.state.index]} />
      </div>
    );
  }
}
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          width: 200,
          height: 50
        }}
      >
        <span>
          <u> Child Component</u>
        </span>
        <span style={{ color: "blue", paddingTop: 10 }}>
          My Name is: {this.props.name}
        </span>
      </div>
    );
  }
}
