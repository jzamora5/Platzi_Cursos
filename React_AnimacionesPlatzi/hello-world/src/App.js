import React, { Component } from "react";
import logo from "./logo.svg";
import logoPlatzi from "./platzi.png";
import "./App.css";

import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends React.Component {
  state = {
    logo: logo,
  };

  onClick() {
    this.setState({
      logo: logoPlatzi,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TransitionGroup>
            <CSSTransition
              key={this.state.logo}
              classNames="fade"
              timeout={1000}
            >
              <img
                src={this.state.logo}
                className="App-logo"
                alt="logo"
                // key={this.state.logo}
              />
            </CSSTransition>
          </TransitionGroup>
          <p>Hola Mundo!</p>
          <button onClick={this.onClick.bind(this)}>click me!</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Animations
          </a>
        </header>
      </div>
    );
  }
}

export default App;
