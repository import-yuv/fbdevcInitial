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
    color: "black",
    fontWeight: "bold",
    fontFamily: "sans-serif"
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
      name: "EveryOne",
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
        <span style={styles.text}>Hello {this.state.name} !!!!</span>
        <div style={{ display: "flex" }}>
          <button
            style={styles.button}
            onClick={e => {
              e.preventDefault();
              this.setState({ name: "FBDEV-C" });
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
      </div>
    );
  }
}
