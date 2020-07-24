import React from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import LandingPage from './routes/LandingPage';
import AdoptionPage from './routes/AdoptionPage';
const PeopleService = require('./services/PeopleService');
const PetService = require('./services/PetService');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: null,
      pets: null,
      user: null,
      error: null,
    };
  }
  componentDidMount() {
    console.log(PeopleService);
    PeopleService.get().then(people => this.setState({ people }));
    PetService.get().then(pets => this.setState({ pets }));
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route
          path='/adopt'
          render={() => <AdoptionPage
            people={this.state.people}
            pets={this.state.pets}
            user={this.state.user}
          />}
        />
      </Switch>
    );
  }
}

export default App;
