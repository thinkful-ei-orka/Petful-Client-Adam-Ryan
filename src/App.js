import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./routes/LandingPage/LandingPage.js";
import AdoptionPage from "./routes/AdoptionPage/AdoptionPage.js";
import PeopleService from "./services/PeopleService";
import PetService from "./services/PetService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      pets: { cat: {}, dog: {} },
      user: "",
      error: null,
    };
  }

  getState = () => {
    PeopleService.get().then((people) => this.setState({ people }));
    PetService.get().then((pets) => this.setState({ pets }));
  };
  userChange = (value) => {
    this.setState({ user: value });
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          path="/adopt"
          render={() => (
            <AdoptionPage
              getState={this.getState}
              people={this.state.people}
              pets={this.state.pets}
              user={this.state.user}
              userChange={this.userChange}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
