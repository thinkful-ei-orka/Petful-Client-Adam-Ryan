import React from "react";
import Pet from "../components/Pet";
import AdoptionQueue from "../components/AdoptionQueue.js";
import AddToList from "../components/AddToList";
import ApiService from "../services/ApiService";
import config from "../config";


export default class AdoptionPage extends React.Component {
  componentDidMount() {
    this.props.getState();
  };

  handlePetAdopted(type) {
    ApiService.handlePetAdopted(type).catch((error) => console.error(error));
    ApiService.handleRemoveUser().catch((error) => console.error(error));
  };

  demoFunction = () => {
    let type = ["cats", "dogs"][Math.floor(Math.random() * 2)];
    this.handlePetAdopted(type);
  };

  addToQueue = (name) => {
    const newUser = {
      name: name,
    };
    const userString = JSON.stringify(newUser);
    fetch(`${config.API_ENDPOINT}people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: userString,
    })
      // .then(this.props.getState())
      .catch((error) => {
        console.error({ error });
      });
    this.props.getState();
  };

  render() {
    return (
      <div className="AdoptionPage">
        <header>
          <h1>Here are some available fluffballs!</h1>
        </header>
        <section>
          <section className="AdoptionQueue">
            <AdoptionQueue people={this.props.people} />
            {this.props.user !==
              this.props.people[this.props.people.length - 1] ? (
                <AddToList
                  user={this.props.user}
                  userChange={this.props.userChange}
                  addToQueue={this.addToQueue}
                  people={this.props.people}
                  demoFunction={this.demoFunction}
                />
              ) : null}
          </section>
          <section className="AdoptionPagePrimary">
            <Pet
              pet={this.props.pets.cat}
              user={this.props.user}
              people={this.props.people}
              type="cats"
              handlePetAdopted={this.handlePetAdopted}
            />
            <Pet
              pet={this.props.pets.dog}
              user={this.props.user}
              people={this.props.people}
              type="dogs"
              handlePetAdopted={this.handlePetAdopted}
            />
          </section>
        </section>
      </div>
    );
  }
}
