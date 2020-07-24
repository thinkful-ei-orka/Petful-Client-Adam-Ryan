import React from "react";
import "./App.css";
const PeopleService = require('./services/PeopleService');
const PetService = require('./services/PetService');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: null,
      pets: null,
      error: null,
    };
  }
  componentDidMount() {
    console.log(PeopleService)
    PeopleService.get().then(people => this.setState({ people }));
    PetService.get().then(pets => this.setState({ pets }));
  }

  render() {
    return (
      <div>
        {`${this.state.pets}`}
      </div>
    );
  }
}

export default App;
