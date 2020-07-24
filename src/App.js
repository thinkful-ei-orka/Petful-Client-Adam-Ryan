import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: null,
      pets: null,
      error: null,
    };
  }
  componentDidMount() {}
}

export default App;
